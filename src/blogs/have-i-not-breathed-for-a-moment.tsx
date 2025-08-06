import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft, MdOutlineOpenInNew } from "react-icons/md";

const Blog4 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              Have I Not Breathed
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              For A Moment
            </h2>
          </div>
          <div className="flex items-center text-sm gap-x-2">
            <img
              src="/assets/images/precious.png"
              alt="Precious Hope T. Jumuad"
              className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
            />
            <p>Precious Hope T. Jumuad | </p>
            <p>
              <time dateTime="2025-07-18">July 18, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            This essay was born in the quiet chaos of the pandemic, a period
            where isolation was no longer a choice but a collective reality.
            Amidst the monotony of online classes, emotional fatigue, and the
            relentless pressure to stay productive, I found myself desperately
            reaching for meaning, for pause, for breath. Writing became a
            sanctuary. This essay submitted to The Trailblazer Publication -
            USTP for their Reflections Portfolio on 2022, was a deeply personal
            meditation on stillness, self-awareness, and the emotional
            undercurrents often buried beneath academic demands and social
            expectations. Through seemingly ordinary moments like sunrises,
            moonlight, and melodies, I began to witness the extraordinary grace
            of simply being. This piece captures how, even in confinement, we
            can reconnect with beauty, with nature, and ultimately, with
            ourselves. I wrote this not only to reflect but to remind others: in
            the weight of living, don’t forget to stop, feel, and breathe. Even
            just for a moment.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/80 rounded-4xl backdrop-blur-xs border shadow-xs tracking-normal leading-7 text-left p-8 space-y-6">
        <section className="flex flex-col gap-6 animate-fade-in-delay-2">
          <figure className="space-y-4 text-center">
            <img
              src="/assets/images/photos3.jpg"
              alt="Lake Gumaod at Gumaod, Claveria, Misamis Oriental"
              className="w-full aspect-[184/73] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 1 - Lake Gumaod at Gumaod, Claveria, Misamis Oriental.
            </figcaption>
          </figure>
          <article className="space-y-4">
            <p>
              Activities and quizzes accumulate in my virtual classroom, but I'm
              no longer afraid. Rather, I took small, shivering steps upwards to
              the rooftop, just so I could gaze at the peaceful and sparkling
              waves of the lake waters in the darkness. Even from afar, I saw
              little scraps of glimmering green phosphorescence, thrown up like
              little diamonds in the pale ghostly lace of the lake spray, then
              disappearing, dissolving in the night. I gazed at it in awe, lost
              in that momentary scenery, then resurfaced to my consciousness. I
              then hurried back downstairs to continue my academic misery. But
              at the back of my mind, I thought,{" "}
              <em>
                "I couldn't have witnessed that awe-inspiring scenery, have I
                been afraid to breathe for a moment."
              </em>
            </p>
            <p>
              The next morning, virtual class links and almost due tasks greeted
              me. I got up to prepare for another day, and what a sight! That
              very morning, I saw the dawn for a very long time. Very gradually,
              beacons of color began to pierce the sky. It was as if the sun was
              burning off the cold of the night. The sunlight sloped in shafts
              across the golden landscapes, casting long shadows from the spiky
              trees onto the dewdrops-filled grass and muddy paths. I basked in
              the sun as it radiated all its glory on earth. The lake perked up
              a little from the reflection of these colored slivers in the sky.
              Bright highlights shone on the tips of the small waves, and
              beneath its gray surface, I could see lurking a deep midnight
              green.
            </p>
            <p>
              The corn fields and rice paddies on the lake banks shed their
              deadness and became a spectral gray-white, then whiter than gray,
              and finally it came back to its glorious colors, as lush as the
              garden of Eden. Birds started singing, and little invisible
              insects made crackling noises. I then saw some drunk men in the
              sheds; they made me think of Lazarus, brought back to life by the
              touch of God. This morning was one in a million others, but I know
              this one's going to be lovely. As soon as I resurfaced from my
              moment of revering the sun, I hurried to continue my morning
              routine so that I could proceed to my daily grind. But at the back
              of my mind, I thought,{" "}
              <em>
                "I couldn't have witnessed that glorious phenomenon, had I not
                paused and breathed for a moment."
              </em>
            </p>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-3">
          <figure className="w-full lg:w-1/2 space-y-4 text-center">
            <img
              src="/assets/images/photos2.jpg"
              alt="Sunset on the Rubber Trees at Gumaod, Claveria, Misamis"
              className="w-full aspect-[4/3] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 2 - Sunset on the Rubber Trees at Gumaod, Claveria, Misamis.
              Oriental.
            </figcaption>
          </figure>
          <article className="w-full lg:w-1/2">
            <p>
              Later on, the day seemed just as a blink of God's eyes. The
              morning ended, and the afternoon is at its inevitable end. I'm
              still working on my tasks. I've always thought to myself that this
              daily predicament is tantamount to eternal damnation in the
              underworld. Every day, I am falling into this bottomless abyss of
              things to do and family/peer pressure. But lo and behold, it's
              not, it's life itself! An unfathomable trench of anguish! If I
              were only given a choice to live or to drift in the heavens, I
              would have chosen the latter. Unfortunately, we do not hold our
              lives. Our purpose in this world is predetermined according to
              God's divine plan. Thus, we have no choice but to exist as it is
              His will. As I thought these to myself, my desk seemingly morphed
              into a sea of kaleidoscopes of things I had on it.
            </p>
          </article>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-3">
          <article className="space-y-4">
            <p>
              Mathematical equations came flying onto my face like some visual
              effects portrayed in that particular meme I usually share on
              social media. I felt dizzy, so I decided to retire to my bed to
              catch my breath. Breath, such a ubiquitous activity. Ever-present
              but often neglected, like God for an egotistical man. At the back
              of my mind, I thought,{" "}
              <em>
                "this paroxysm of fatigue never could have ended, had I not
                retired on my bed, to breathe for a moment."
              </em>
            </p>
            <p>
              I grabbed my earphones and played something on shuffle. The song
              that came up is Israel Kamakawiwo'ole's version of{" "}
              <cite>"Somewhere Over the Rainbow."</cite> I first thought to
              myself, <em>"this song is not for my mood right now."</em> And
              just after that thought, a trigger sets off in my mind, the song
              somehow travels up through my body in a process of emotional
              osmosis, and, out of nowhere, my face is covered in tears. A river
              of tears as the song turns into the gentlest lullaby.
              <blockquote cite="https://en.wikipedia.org/wiki/Somewhere_Over_the_Rainbow/What_a_Wonderful_World">
                <p>
                  <em>
                    ...someday I'll wish upon a star, wake up where the clouds
                    are far behind me...
                  </em>
                </p>
                <p>
                  <em>
                    ...where troubles melt like lemon-drops, high above the
                    chimney top, that's where you'll find me...
                  </em>
                </p>
              </blockquote>
            </p>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-4">
          <article className="w-full lg:w-1/2">
            <p>
              And then I found myself in the middle of a personal revelation, a
              moment of surrender to all of the things I squelch down during the
              day. All of the things I cover with paper works and, to-do lists,
              and post-its. I wanted to cover my face, or disappear, but the
              only thing I can do is keep singing and letting the sounds reach
              down under all my defenses and fly my soul up through the branches
              and beyond the trees, all the way past the constellations, not
              even looking back at the moon. But at the back of my mind, I
              thought,{" "}
              <em>
                "I couldn't have tasted this bitter-sweet flavor of fatigue
                tears, had I not cried to my heart's content, to breathe for a
                moment."
              </em>
              And speaking of the moon, there she is, outside my window, hoisted
              high in the skies, hiding in a canopy of clouds.
            </p>
          </article>
          <figure className="w-full lg:w-1/2 space-y-4 text-center">
            <img
              src="/assets/images/photos4.jpg"
              alt="Flowers at Gumaod, Claveria, Misamis Oriental"
              className="w-full aspect-[4/3] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 3 - Flowers at Gumaod, Claveria, Misamis Oriental.
            </figcaption>
          </figure>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-4">
          <article className="space-y-4">
            <p>
              Tonight, it is an impossibly large globe of yellow-orange rose
              quickly, as if thrown up by a giant, invisible hand. I watched in
              quiet disbelief while it climbed higher in the sky, changing to a
              golden orb, erasing the stars that had been so bright before it
              appeared. My music slowed, actually everything seemed to slow
              down, while watching the gold fade to yellow, then to white, while
              the full moon climbed. It seemed to smooth the lake waters from
              afar. The waves broke in low, lazy, dark rushes, with only a thin,
              lacy edge of pale foam. Across the quiet meadows, a wide silver
              path stretched from the glimmering grasses to the horizon. But at
              the back of my mind, I thought,{" "}
              <em>
                "I couldn't have witnessed that breathtaking scenery, had I not
                taken a break to breathe for a moment."
              </em>
            </p>
            <p>
              Oh, these omnipresent wonders that keep passing me. For a moment,
              they cheered my fragile and lonely heart. This romantic
              warmth-wanting heart that always seeks others' love and
              validation. Like the warmth the sun gave to the moon. But wait,
              why am I so amused at other Godly creations, when I am a wonder?
              How can I not see it? I’ve been blinded by earthly sufferings!
              From now on, I decided that I am entitled to be proud of much that
              I have accomplished. How little they may be. I am not a failure.
              But it is wrong to be proud of my weaknesses, and hiding from the
              world is a weakness, a fault of fear. I should be more open to
              life, not run away from it. And romance? The world was full of
              people who never knew it, and the world kept on spinning, with
              moonrises and flowers and sunlight dancing on the water and ten
              thousand other things to gladden the soul. That was more than
              enough for happiness.
            </p>
            <figure className="space-y-4 text-center">
              <img
                src="/assets/images/photos5.jpg"
                alt="Lake Gumaod at Gumaod, Claveria, Misamis Oriental"
                className="w-full aspect-[184/73] rounded-4xl border object-cover"
              />
              <figcaption>
                Fig. 4 - Rice Fields at Gumaod, Claveria, Misamis Oriental.
              </figcaption>
            </figure>
            <p>
              Finally, I realized, despite everything, I had welcomed each new
              day as though it were a new life, where all past failures and
              problems were erased, and all future possibilities and joys were
              open and available, to be achieved probably before night fell
              again. I should free myself from the chains of life or from what
              others call life. We should be free from emotion, from one's
              strengths, one's weaknesses. Stretch one moment out into a
              thousand, because why not? I may be a tiny momentary speck within
              an indifferent universe, but I am also a miracle in this vast
              cosmos. Even just for a moment, be but one momentary breath,
              one-millionth of a billion nebulas.
            </p>
            <p className="pinyon-script text-2xl sm:text-3xl font-semibold">
              <em>Breathe!</em>
            </p>
          </article>
        </section>

        <section className="flex justify-center border-t-2 gap-2 pt-8">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1-hlM-3s_r_WvBfA_jC7Qx5awlJ4WM8_i/view"
            className="hover:underline"
          >
            <p>BREATHE Reflections 2022.</p>
          </a>
          <MdOutlineOpenInNew size={20} />
        </section>
      </main>

      <footer className="flex justify-center pt-2">
        <Link
          to="/blog"
          target="_top"
          className="w-fit flex items-center gap-x-2 white-button"
        >
          <MdOutlineKeyboardArrowLeft size={20} />
          Back to Blog
        </Link>
      </footer>
    </div>
  );
};

export default Blog4;
