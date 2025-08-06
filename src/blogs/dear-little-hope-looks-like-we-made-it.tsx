import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog13 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              Dear little Hope,
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              looks like we made it..
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
              <time dateTime="2025-08-17">August 17, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            <em>
              "Childhood is the most valuable coin in the pocket of memory.
              Spend it wisely, for it buys you more than nostalgia."
            </em>
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/80 rounded-4xl backdrop-blur-xs border shadow-xs tracking-normal leading-7 text-left p-8 space-y-6">
        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-1">
          <figure className="w-full lg:w-1/2 space-y-4 text-center">
            <img
              src="/assets/images/college.png"
              alt="My College Graduation Photo"
              className="w-full aspect-[4/5] rounded-4xl border object-cover"
            />
            <figcaption>Fig. 1 - My College Graduation Photo</figcaption>
          </figure>
          <article className="w-full lg:w-1/2 space-y-4">
            <p>
              There’s a memory I keep tucked in the deepest folds of my mind,
              fourth grade, just after the morning flag ceremony. I stood at the
              podium in front of the entire school, sun on my face, classmates
              watching, teachers smiling. I had just won an inter-school
              contest, and my name echoed across the courtyard. My teacher
              proudly asked everyone to clap for me.
            </p>
            <p>That moment was magic. That moment rewired me.</p>
            <p>
              It was my first real taste of victory. The validation, the
              applause, the pride in my parents’ eyes, it sparked something
              inside me. From then on, I chased that feeling. I told myself,{" "}
              <cite>“If I work hard, I’ll be celebrated again.”</cite> That
              pursuit became my compass. And indeed, it led me to many podiums
              since. But none ever felt as innocent or as pure as that first.
            </p>
            <p>
              Childhood was a time when the world made sense. Effort equaled
              reward. Goodness was recognized. The adults around me, teachers,
              parents, neighbors, were mostly kind, warm, and supportive.
            </p>
          </article>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-2">
          <article className="space-y-4">
            <p>
              They believed in me. They made me feel safe, smart, and seen. And
              while the world was far from perfect, it was simple enough to
              believe that if you tried your best, things would work out.My
              family was my first fortress. Supportive, grounded, and nurturing.
              They stood by me in every academic contest, applauded every small
              win, and reminded me that being kind was just as important as
              being smart. Then there were my classmates. Chaotic, joyful,
              beautifully unpredictable. We were dreamers, pranksters,
              playground philosophers. We shared snacks, secrets, and songs.
              Together, we believed the world was ours to conquer.
            </p>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-2">
          <article className="w-full lg:w-1/2 space-y-4">
            <p>
              One of the earliest milestones of growing up was learning to
              commute alone. I was a country bumpkin, wide-eyed and confused by
              the buzz of the city. Riding a jeepney by myself for the first
              time felt like crossing a threshold. <em>I had arrived,</em> I
              told myself. But even that, the fear, the excitement, the
              independence, was formative. I began building the courage that
              would later carry me through far darker storms.
            </p>
            <p>
              There’s one place that holds more weight than all others. The
              Parish Church in Jasaan. It wasn’t just a place of worship. It was
              where I met my first love. It was where so many of my childhood
              Sundays were spent holding candles, whispering prayers, brushing
              knees against tiled floors worn smooth by generations. It was
              sacred not just in the spiritual sense, but emotionally. It was a
              place of grounding, mystery, and belonging.
            </p>
            <p>
              And I often wonder:{" "}
              <em>What would that version of me say if she saw me now?</em>
            </p>
          </article>
          <figure className="w-full lg:w-1/2 space-y-4 text-center">
            <img
              src="/assets/images/vale1.jpg"
              alt="My Senior High School Graduatioj Photo"
              className="w-full aspect-[4/5] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 2 - My Senior High School Graduation Photo
            </figcaption>
          </figure>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-3">
          <article className="space-y-4">
            <p>
              Would she recognize this more jaded, tired, adult self? Would she
              be proud of the battles I fought, or would she mourn the sparkle
              that faded? Sometimes I imagine telling her the truth, that the
              world ahead is not as kind as we thought. That podiums don’t
              always come with applause, and victories aren’t always
              acknowledged. That some people, even those in positions of power,
              may humiliate, belittle, and ignore your efforts. That not all
              grown-ups deserve the respect we so willingly gave them as
              children.
            </p>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-3">
          <figure className="w-full lg:w-1/2 space-y-4 text-center">
            <img
              src="/assets/images/jhs.jpg"
              alt="My Junior High School Completion Photo"
              className="w-full aspect-[3/4] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 3 - My Junior High School Completion Photo
            </figcaption>
          </figure>
          <article className="w-full lg:w-1/2 space-y-4">
            <p>
              But I would also tell her that strength doesn’t always look like a
              gold medal. That real triumph sometimes means simply standing back
              up after you've been crushed. That kindness, though rare in
              adults, is something worth preserving even if the world tells you
              it’s naïve. That dreaming hurts, yes, but to live without it is
              worse. And I’d reassure her of this, too: Even though our path to
              adulthood has been rocky, we’ve met incredible people along the
              way. People who helped carry the weight.
            </p>
            <p>
              I would tell her about the laughs and support we found with
              FAKULTO, the calm strength of a loving and understanding partner,
              the brilliance and unity of our thesis team, and classmates who
              showed up with sincerity and humor when we needed it most. These
              people made the climb bearable. They made it meaningful. And I’d
              tell her not to worry, we’ll find more people like them, maybe
              even better, as we go. Psychologists say that{" "}
              <u>
                the experiences we have between ages 7 and 12 form the blueprint
                of our emotional intelligence
              </u>{" "}
              (Goleman, 1995).
            </p>
          </article>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-4">
          <article className="space-y-4">
            <p>
              They shape our beliefs about self-worth, love, failure, and trust.
              And for those of us lucky enough to have had safe, meaningful
              childhoods, it becomes both a gift and a burden. Because every
              disappointment in adulthood feels like a betrayal of what we once
              believed. And every ache becomes sharper, because the child in us
              is still expecting a happy ending. According to a 2021 UNICEF
              report,{" "}
              <u>
                children who experience early emotional security tend to develop
                higher resilience in adulthood,
              </u>{" "}
              but they also{" "}
              <u>grieve harder when reality fails their expectations.</u> That
              explains the heaviness, the sadness I sometimes carry when I
              compare the clarity of those early years to the fog of the
              present.
            </p>
          </article>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay-4">
          <figure className="space-y-4 text-center">
            <img
              src="/assets/images/elementary.jpg"
              alt="My Elementary Graduation Photo"
              className="w-full aspect-[208/295] rounded-4xl border object-cover"
            />
            <figcaption>Fig. 4 - My Elementary Graduation</figcaption>
          </figure>
          <article className="space-y-4">
            <p>
              And yet, I’m grateful. Because that clarity, that simple joy, is
              still inside me. It flickers every now and then, in the warmth of
              old friends, in the scent of a church candle, in the sound of rain
              on tin roofs, in the laughter I didn’t expect but needed.It
              reminds me that while I cannot return to those years, I can honor
              them. By living with the same sincerity, the same courage, and the
              same unshakable belief in goodness.
            </p>
            <p>
              To the child I was: I miss you. I envy you. And I owe you
              everything.
            </p>
          </article>
          <figure className="space-y-4 text-center">
            <img
              src="/assets/images/preschool.jpg"
              alt="My Pre-School Graduation Photo"
              className="w-full aspect-[194/269] rounded-4xl border object-cover"
            />
            <figcaption>Fig. 5 - My Pre-School Graduation</figcaption>
          </figure>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-4">
          <article className="space-y-4">
            <p>
              So I’ll keep going, stumbling, and striving, because you’re still
              watching from the sidelines, waiting to see if the world you
              believed in still exists.
            </p>
            <p>
              And maybe, if I keep walking, I’ll find it again. Or better yet,
              build it myself.
            </p>
            <p>
              <em>
                Did everything really make sense back then or was I just too
                innocent to notice the chaos?
              </em>{" "}
              Maybe that’s the point.
            </p>
          </article>
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

export default Blog13;
