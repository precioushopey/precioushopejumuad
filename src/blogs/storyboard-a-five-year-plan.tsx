import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineDiversity1,
} from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { TbCross } from "react-icons/tb";

const Blog3 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col md:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              Storyboard:
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              My Five-Year Plan
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
              <time dateTime="2025-07-13">July 13, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            This storyboard was created as my final Performance Innovative Task
            for the subject Understanding the Self in my first year, where we
            were asked to map out a personal five-year development plan. It
            became an opportunity to reflect on who I am, the roles I currently
            play, and the person I am intentionally becoming. Rooted in my own
            values, experiences, and ambitions, this piece expresses my
            commitment to personal growth, spiritual grounding, and
            psychological resilience. The plan targets key aspects of the
            self—philosophical, psychological, spiritual, and
            political—highlighting my aspirations not only to be excellent in
            academics and leadership but also to pursue authentic happiness and
            self-actualization. My teacher appreciated the clarity and depth of
            this vision and chose to showcase it as a sample for the next batch,
            which affirmed its worthiness to be shared and remembered.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/50 rounded-4xl backdrop-blur-xs border shadow-xs font-medium tracking-normal text-left p-8 space-y-6">
        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-2">
          <article className="w-full md:w-3/5 space-y-4">
            <h3 className="pinyon-script text-3xl sm:text-4xl font-bold text-glow">
              General Plan
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <s>Be an exemplary student</s>{" "}
                <p className="font-light italic text-xs">
                  (PS. Hope here 3 years later, we did our "best" though, not so
                  "exemplary". After first year, it was literally HELL!)
                </p>
                <ul className="ml-4">
                  <li>
                    <s>Ace</s> Finished my classes
                    <p className="font-light italic text-xs">
                      ("Ace"? We barely survived girl!)
                    </p>
                  </li>
                  <li>
                    ✔ Be active in organizations
                    <p className="font-light italic text-xs">
                      (And apply to tons after the school year? Welp, it has
                      some benefits and struggles though.)
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                ✔ At least be a Jack of all trades (If I can’t be a Master of
                anything)
                <p className="font-light italic text-xs">
                  (God forbid, girly be so unhealthy now for wanting to learn
                  everything all at once ASAP!)
                </p>
              </li>
              <li>
                ✔ Be AMBITIOUS not DREAMY
                <p className="font-light italic text-xs">
                  (3 years later and still ambitious, but more careful and
                  calculated. Also, still not dreaming like some kid.)
                </p>
              </li>
              <li>
                Keep Sane, Watch Anime! ...
                <p className="font-light italic text-xs">
                  (Girl we're past sanity now! We're MONTHS behind our watch
                  list. But fret not, we still catch up on the main stream and
                  continuing our favourite Animes. College kept us from our
                  sanity, now it's Job Hunting T.T)
                </p>
              </li>
              <li>
                BE HAPPY! ...
                <p className="font-light italic text-xs">
                  (At this point? What is that even? This is still an ongoing
                  project)
                </p>
              </li>
            </ul>
          </article>
          <figure className="w-full md:w-2/5 space-y-4">
            <img
              src="/assets/images/storyboard.jfif"
              alt="Me in Umaru-chan merchandise hood III"
              className="w-full aspect-[3/4] rounded-4xl border object-cover"
            />
          </figure>
        </section>

        <section className="space-y-4 animate-fade-in-delay-3">
          <h3 className="pinyon-script text-3xl sm:text-4xl font-bold text-glow">
            Rationale
          </h3>
          <p>
            For the next five years of my life, I’ll just be a student, a
            daughter, a friend, a co-worker or even maybe become someone’s
            favorite person. I do not choose these roles; these were the roles
            given to me by the universe. And I have seen that the universe
            conspires for me to be in these roles, so I am obliged to be the
            best at it. All of the plan I listed are for me to keep my feet on
            the ground and be sane. Overall, I genuinely wanted to be my own
            definition of success for the next five years of my life.
          </p>
        </section>

        <section className="space-y-4 animate-fade-in-delay-4">
          <h3 className="pinyon-script text-3xl sm:text-4xl font-bold text-glow">
            Abilities and Resources
          </h3>
          <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="flex items-center gap-2">
                <FiBookOpen size={20} />
                <h4 className="text-xl font-semibold">Philosophical</h4>
              </span>
              <p>
                I am in pursuit of wisdom as other people were. I am in search
                for a general understanding of values and reality through
                chiefly speculative means rather than observational. This is
                because I am aware that I am a dweller in this world and I am
                very curious on the mystery my abode lies on. Because of this, I
                am very welcome to new knowledge even in fields I am not really
                into. Thus, my goal; be a Jack of all trades, if I can’t be a
                Master on anything.
              </p>
            </div>
            <div className="space-y-2">
              <span className="flex items-center gap-2">
                <LuBrain size={20} />
                <h4 className="text-xl font-semibold">Psychological</h4>
              </span>
              <p>
                I am very interested in the works and mystery of the mind and
                behaviors of people. It was for me a way to understand and
                empathize to other people and myself. It’s my way to keep myself
                on the ground and be just be sane. Also, what keeps me
                psychologically sound is watching movies and reading literary
                medias, specifically anime. It’s like a looking mirror for me to
                new perspectives and worldly ideas.
              </p>
            </div>
            <div className="space-y-2">
              <span className="flex items-center gap-2">
                <TbCross size={20} />
                <h4 className="text-xl font-semibold">Spiritual</h4>
              </span>
              <p>
                As a kid raised in a Catholic Christian environment, I should
                say I am very religious. I place so much importance on the
                beliefs and traditions of my religion but I am also concerned
                with growing and experiencing the Divine. Although, my religion
                instilled in me the fear of God, of sin and punishment, and of
                eternal paradise and hellish damnation, I have chosen to love
                God despite all of those knowledges. My love is of no
                condemnation and judgment, it is where mercy and acceptance
                prevail. I believe God is a living and loving presence in our
                hearts, like a father’s presence. My goal in life is to “live
                heaven on earth”, it means to live a life with God in its
                center, it’s my definition of happiness.
              </p>
            </div>
            <div className="space-y-2">
              <span className="flex items-center gap-2">
                <MdOutlineDiversity1 size={20} />
                <h4 className="text-xl font-semibold">Political</h4>
              </span>
              <p>
                I am proud of my heritage. As a full-blooded Filipino I
                epitomize the qualities of a Southeast Asian, both the fairness
                and the flaws. I am aware of my origin and history, and my
                present and progeny. I also have enough knowledge on the current
                dilemmas I am in, and I am confident in taking part in the
                solution. Because I am from a family of public servants, my
                ambition is to become a servant of my country like them. My
                father taught me to dream for our better future, and now I am
                done dreaming, I ready to help make it happen.
              </p>
            </div>
          </article>
        </section>

        <section className="space-y-4 animate-fade-in-delay-4">
          <h3 className="pinyon-script text-3xl sm:text-4xl font-bold text-glow">
            Success Indicator
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <li className="flex justify-center items-center text-center rounded-4xl border p-2">
              Self-Actualization
            </li>
            <li className="flex justify-center items-center text-center rounded-4xl border p-2">
              Health and Beauty
            </li>
            <li className="flex justify-center items-center text-center rounded-4xl border p-2">
              Respectable Status
            </li>
            <li className="flex justify-center items-center text-center rounded-4xl border p-2">
              Financial Independence
            </li>
            <li className="flex justify-center items-center text-center rounded-4xl border p-2">
              Selective but Authentic Connections
            </li>
          </ul>
        </section>
      </main>

      <footer className="flex justify-center pt-2">
        <Link
          to="/blog"
          className="w-fit flex items-center gap-x-2 white-button"
        >
          <MdOutlineKeyboardArrowLeft size={20} />
          Back to Blog
        </Link>
      </footer>
    </div>
  );
};

export default Blog3;
