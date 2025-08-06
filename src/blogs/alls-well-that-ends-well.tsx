import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog11 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              All's Well
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              That Ends Well
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
              <time dateTime="2025-08-03">August 3, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            After four years of trials and tribulations, navigating a path
            beyond my passion but fueled by purpose, I can finally say — I am an
            engineer! Read my heartfelt reflection on how college shaped not
            just my skills, but my character through people, purpose, and grace.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/80 rounded-4xl backdrop-blur-xs border shadow-xs tracking-normal leading-7 text-left p-8 space-y-6">
        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-2">
          <figure className="w-full lg:w-1/2 space-y-4">
            <img
              src="/assets/images/all's_well.png"
              alt="All's Well That Ends Well"
              className="w-full aspect-[1/1] rounded-4xl border object-cover"
            />
          </figure>
          <article className="w-full lg:w-1/2 space-y-4">
            <p>
              As I close the chapter of my college journey, I’ve realized that
              growth was never confined to the walls of a laboratory or the
              logic of a codebase. College gave me more than academic knowledge.
              It gave me people, purpose, and a deeper understanding of what it
              means to grow.
            </p>
            <p>
              There’s something profoundly human about the way shared struggles
              can build friendships. Whether it was long thesis nights, quiet
              support during presentations, or spontaneous laughter in between
              classes, the relationships I formed reminded me that success is
              rarely a solo pursuit. I’ll always be grateful for teammates who
              believed in the same goal, classmates who brought levity to the
              hard days, and the friends who became family.
            </p>
          </article>
        </section>

        <section className="space-y-4 animate-fade-in-delay-3">
          <p>
            College taught me more than what was on the syllabus. Leading
            projects taught me how to organize chaos. Collaborating on research
            taught me how to listen. And even failure (especially failure)
            taught me resilience.
          </p>
          <p>
            From building a multi-camera customer tracking system in our thesis
            to designing and developing web applications during my internships,
            I learned that technical growth is only half the story. The other
            half? Self-awareness, teamwork, and humility.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-4">
          <article className="w-full lg:w-1/2 space-y-4">
            <p>
              Awards and milestones were affirming, but they weren’t what
              defined my experience. What stayed with me were the smaller
              things: helping a peer grasp a tough concept, brainstorming UI
              ideas past midnight, or simply choosing to show up even when I was
              exhausted. Growth, I’ve learned, is often quiet. It’s cumulative.
              And it rarely announces itself until you look back.
            </p>
            <p>
              To the mentors who taught and challenged me, my teammates in team
              SUBAY who trusted me, the organizations ICpEP SE - USTP, ICpEP SE
              - RX, SCEA - USTP, GDG on Campus USTP, USTP UDA, and Robogals CDO
              Asia Pacific, that gave me space to lead and learn. To my FAKULTO
              friends who reminded me to laugh and rest, to my parents and
              family who anchored me through it all, and above all, to God, for
              His grace, strength, and perfect timing. Thank you! You’ve taught
              me to be more intentional, more collaborative, and more empathetic
              in life.
            </p>
          </article>
          <figure className="w-full lg:w-1/2 space-y-4">
            <img
              src="/assets/images/collage.png"
              alt="All's Well That Ends Well"
              className="w-full aspect-[4/5] rounded-4xl border object-cover"
            />
          </figure>
        </section>

        <section className="space-y-4 animate-fade-in-delay-4">
          <p>
            Now, as I move forward, I carry not just technical skills but
            stories of grit, of grace, and of genuine connection. If there’s one
            thing college taught me, it’s that growth is not a sprint but a
            process. And in that process, people matter just as much as the
            product.
          </p>
          <p>
            To anyone navigating their path, whether you're just starting or
            nearly at the finish line, remember that the climb is lighter with
            good people beside you. May we all continue learning, connecting,
            and building something meaningful.
          </p>
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

export default Blog11;
