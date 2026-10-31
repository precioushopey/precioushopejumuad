// A spring for one number, driven by requestAnimationFrame. It always moves on from where the
// value is right now and at the speed it has right now, so it can be caught or redirected at any
// moment without a jump. Described like iOS springs: `response` is how quickly it reaches the
// target in seconds, `damping` is 1 for no overshoot and lower for a bounce.

export type Spring = {
  /** Current on-screen value. */
  readonly value: number;
  /** Current speed, in units per second. */
  readonly velocity: number;
  /** Whether it is still moving. */
  readonly moving: boolean;
  /** Head for `target`, keeping the current speed unless `velocity` is given. */
  to(
    target: number,
    options?: { velocity?: number; response?: number; damping?: number },
  ): void;
  /** Stop where it is (grab it). The value stays at its live position. */
  stop(): void;
  /** Set the value at once, with no motion. */
  jump(value: number): void;
};

const STEP = 1 / 240;

export const createSpring = (
  initial: number,
  onUpdate: (value: number) => void,
): Spring => {
  let value = initial;
  let velocity = 0;
  let target = initial;
  let stiffness = 0;
  let drag = 0;
  let frame = 0;
  let last = 0;

  const tick = (now: number) => {
    // A long gap (hidden tab) must not make a huge step.
    let remaining = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    while (remaining > 0) {
      const dt = Math.min(STEP, remaining);
      velocity += (stiffness * (target - value) - drag * velocity) * dt;
      value += velocity * dt;
      remaining -= dt;
    }
    if (Math.abs(target - value) < 0.1 && Math.abs(velocity) < 2) {
      value = target;
      velocity = 0;
      frame = 0;
      onUpdate(value);
      return;
    }
    onUpdate(value);
    frame = requestAnimationFrame(tick);
  };

  return {
    get value() {
      return value;
    },
    get velocity() {
      return velocity;
    },
    get moving() {
      return frame !== 0;
    },
    to(next, options = {}) {
      const { response = 0.4, damping = 1 } = options;
      const omega = (2 * Math.PI) / response;
      stiffness = omega * omega;
      drag = 2 * damping * omega;
      target = next;
      if (options.velocity !== undefined) velocity = options.velocity;
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    },
    stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      velocity = 0;
    },
    jump(next) {
      cancelAnimationFrame(frame);
      frame = 0;
      value = target = next;
      velocity = 0;
      onUpdate(value);
    },
  };
};
