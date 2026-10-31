import React, { useState, useEffect, useRef } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { createSpring, type Spring } from "../lib/spring";

type CarouselProps = {
  images: string[];
  /** Describes the pictures; each slide adds "(n of N)". */
  alt?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

// A drag only becomes a swipe after the pointer moves this far, so taps and vertical scrolls pass.
const DRAG_THRESHOLD = 10;
// How quickly a settling slide arrives (seconds), and the bounce allowed after a flick.
const RESPONSE = 0.4;
const FLICK_DAMPING = 0.85;
// Scroll-like deceleration: the strip is projected to where a flick would carry it.
const DECELERATION = 0.99;
// A glitchy pointer event must never launch the strip (px/s).
const MAX_VELOCITY = 6000;

type Gesture = {
  startX: number;
  startY: number;
  /** Strip position when the pointer went down, so a catch mid-flight starts from the live spot. */
  startPos: number;
  locked: boolean;
  /** Recent strip positions (not pointer positions, so edge resistance is accounted for), for the
   *  release velocity. */
  history: { x: number; t: number }[];
};

/** Past the first or last slide the strip follows the finger with growing resistance, not 1:1. */
const rubberband = (offset: number, size: number, constant = 0.55) =>
  Math.sign(offset) *
  ((Math.abs(offset) * size * constant) /
    (size + constant * Math.abs(offset)));

/** Where a release at `velocity` (px/s) would coast to. */
const project = (velocity: number) =>
  ((velocity / 1000) * DECELERATION) / (1 - DECELERATION);

const Carousel: React.FC<CarouselProps> = ({
  images,
  alt = "Project images",
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // Once the visitor takes control by swiping or using a button, the slideshow stops advancing.
  const [taken, setTaken] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const spring = useRef<Spring | null>(null);
  const gesture = useRef<Gesture | null>(null);
  // Mirrors currentIndex for handlers that run between renders (rapid taps, autoplay).
  const index = useRef(0);
  // A wrap-around is a cross-fade in progress; the token lets a grab cancel its second half.
  const wrapping = useRef(false);
  const wrapToken = useRef(0);

  const width = () => viewport.current?.clientWidth ?? 1;
  const restingPlace = (i: number) => -i * width();
  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // The strip's position is a spring that writes straight to the element, one frame at a time.
  useEffect(() => {
    const s = createSpring(0, (x) => {
      if (track.current) {
        track.current.style.transform = `translate3d(${x}px, 0, 0)`;
      }
    });
    spring.current = s;
    const onResize = () =>
      s.jump(-index.current * (viewport.current?.clientWidth ?? 1));
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      s.stop();
    };
  }, []);

  /** Slide to picture `i`, carrying on from the strip's live position and speed. */
  const goTo = (i: number, velocity?: number, bounce = false) => {
    const s = spring.current;
    if (!s) return;
    index.current = i;
    setCurrentIndex(i);
    if (reducedMotion()) s.jump(restingPlace(i));
    else
      s.to(restingPlace(i), {
        velocity,
        response: RESPONSE,
        damping: bounce ? FLICK_DAMPING : 1,
      });
  };

  /** From the last picture to the first (or back) the strip would have to run the wrong way across
   *  every slide, which points away from the button that was pressed. Cross-fade instead. */
  const wrapTo = (i: number) => {
    const s = spring.current;
    const el = track.current;
    if (!s || !el) return;
    index.current = i;
    setCurrentIndex(i);
    if (reducedMotion()) {
      s.jump(restingPlace(i));
      return;
    }
    const token = ++wrapToken.current;
    wrapping.current = true;
    const out = el.animate(
      { opacity: [1, 0] },
      { duration: 150, easing: "ease-in", fill: "forwards" },
    );
    out.finished
      .then(() => {
        if (token !== wrapToken.current) return;
        s.jump(restingPlace(i));
        wrapping.current = false;
        el.animate(
          { opacity: [0, 1] },
          { duration: 200, easing: "ease-out" },
        );
        out.cancel();
      })
      .catch(() => {});
  };

  /** A wrap-around still fading is finished at once, so the strip shows the slide that is current
   *  before anything else moves it. */
  const finishWrap = () => {
    const s = spring.current;
    if (!wrapping.current || !s) return;
    wrapToken.current++;
    wrapping.current = false;
    track.current?.getAnimations().forEach((a) => a.cancel());
    s.jump(restingPlace(index.current));
  };

  const step = (direction: 1 | -1) => {
    finishWrap();
    const next = index.current + direction;
    if (next < 0 || next >= images.length) {
      wrapTo((next + images.length) % images.length);
    } else {
      goTo(next);
    }
  };

  useEffect(() => {
    if (!autoSlide || taken || reducedMotion()) return;
    const slideInterval = setInterval(() => step(1), autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSlide, autoSlideInterval, images.length, taken]);

  const nextSlide = () => {
    setTaken(true);
    step(1);
  };

  const prevSlide = () => {
    setTaken(true);
    step(-1);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = spring.current;
    if (!s || (e.pointerType === "mouse" && e.button !== 0)) return;
    finishWrap();
    // Catching a moving strip freezes it where it is on screen, not where it was heading.
    const caught = s.moving;
    s.stop();
    gesture.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPos: s.value,
      locked: caught,
      history: [{ x: s.value, t: e.timeStamp }],
    };
    if (caught) {
      e.currentTarget.setPointerCapture(e.pointerId);
      setTaken(true);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    const s = spring.current;
    if (!g || !s) return;
    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;

    if (!g.locked) {
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) {
        return;
      }
      // Mostly vertical: leave it to the page's own scrolling.
      if (Math.abs(dy) > Math.abs(dx)) {
        gesture.current = null;
        return;
      }
      g.locked = true;
      // Keep receiving moves when the finger leaves the picture.
      e.currentTarget.setPointerCapture(e.pointerId);
      setTaken(true);
    }

    // 1:1 with the pointer; past either end it resists instead.
    const min = restingPlace(images.length - 1);
    const x = g.startPos + dx;
    s.jump(
      x > 0
        ? rubberband(x, width())
        : x < min
          ? min + rubberband(x - min, width())
          : x,
    );
    g.history.push({ x: s.value, t: e.timeStamp });
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    const s = spring.current;
    gesture.current = null;
    if (!g || !s) return;
    if (!g.locked) return;

    // Speed over the last 100ms up to the release, in pixels per second. Holding still before
    // letting go leaves no recent samples, so that release has no momentum; neither does a cancel.
    const recent = [...g.history, { x: s.value, t: e.timeStamp }].filter(
      (p) => e.timeStamp - p.t <= 100,
    );
    const span = recent.length > 1 ? e.timeStamp - recent[0].t : 0;
    const velocity =
      e.type === "pointercancel" || span <= 0
        ? 0
        : Math.max(
            -MAX_VELOCITY,
            Math.min(
              MAX_VELOCITY,
              ((s.value - recent[0].x) / span) * 1000,
            ),
          );

    // Land on the picture nearest to where the strip is heading, not where it was let go.
    const heading = s.value + project(velocity);
    const target = Math.min(
      Math.max(Math.round(-heading / width()), 0),
      images.length - 1,
    );
    // The release speed carries straight into the spring; a flick is allowed a little bounce.
    goTo(target, velocity, Math.abs(velocity) > 300);
  };

  return (
    <div className="relative w-full">
      <div
        ref={viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        className="touch-pan-y select-none overscroll-x-contain overflow-hidden rounded-4xl cursor-grab active:cursor-grabbing"
      >
        <div ref={track} className="flex will-change-transform">
          {images.map((image, i) => (
            <div
              key={i}
              className="w-full shrink-0"
              aria-hidden={i !== currentIndex}
            >
              <img
                // The neighbours are fetched ahead so a swipe never shows an empty slide.
                loading={Math.abs(i - currentIndex) <= 1 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                src={image}
                alt={`${alt} (${i + 1} of ${images.length})`}
                className="w-full aspect-[16/9] rounded-4xl border object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous image"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 white-button hit-area p-1.5"
        onClick={prevSlide}
      >
        <LuChevronLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Next image"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 white-button hit-area p-1.5"
        onClick={nextSlide}
      >
        <LuChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
