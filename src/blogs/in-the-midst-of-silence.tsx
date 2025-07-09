import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog1 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
            In the Midst of Silence
          </h1>
          <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
            Reflections of a Bystander in a Time of Crisis
          </h2>
          <div className="flex items-center text-sm gap-x-2 pt-4">
            <img
              src="/assets/images/precious.png"
              alt="In the Midst of Silence"
              className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
            />
            <p>Precious Hope T. Jumuad | </p>
            <p>
              <time dateTime="2025-07-06">July 6, 2025</time>
            </p>
          </div>
        </div>
      </header>

      <main className="space-y-6">
        <section className="animate-fade-in-delay-1">
          <p>
            I wrote this personal essay at the height of the COVID-19 pandemic,
            a time when the world seemed to pause, yet our inner lives grew
            louder than ever. As someone who observes more than speaks, I felt
            the need to process the chaos, fear, and quiet blessings brought by
            that period. Writing became my outlet, a way to make sense of the
            global disruption and the unexpected gifts it gave. This piece is
            not just a reflection on the physical toll of the virus, but a
            deeply personal account of growth, surrender, and introspection
            during a time of isolation. Through it, I hoped to express the
            paradox of pain and peace that the pandemic planted in my life.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-6 border-t-2 pt-8 animate-fade-in-delay-2">
          <img
            src="/assets/images/photos1.jpg"
            alt="In the Midst of Silence"
            className="w-full md:w-1/2 aspect-[1/1] rounded-4xl border object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <article className="w-full md:w-1/2 space-y-6">
            <p>
              The world then stopped, the ever-crowded downtown now next to
              deserted ghost towns. Distances are widened, yet there is no brawl
              between people. Everyone was shaken and was brought to fear and
              panic. Then, heroes with no names emerged with their lives on the
              line. In this unseen battle, they fought as{" "}
              <em>"guardian angels"</em>
              against the invisible yet divisible human foe-Corona Virus Disease
              2019.
            </p>
            <p>
              Events that history has not seen, choices that were never made an
              option, and divisions that were built due to confusion and
              anxiety. There are the things that a mere bystander like me has
              witnessed. This pandemic is like a woman; it is both a blessing
              and a curse. Curse because it brought blight and plight to the
              world, tormenting the health of millions as the{" "}
              <em>"invisible adversary"</em> and crushing the economy from
              nation to nation. It is a blessing for me because, as an introvert
              by nature, I had the grounds to stay at home and keep away from
              unnecessary socialization. Also, I was able to nourish my skills
              in music and the arts, as well as in academics. I also had the
              chance to learn new things and discover new skills.
            </p>
          </article>
        </section>

        <article className="border-b-2 pb-6 animate-fade-in-delay-3">
          To conclude, the COVID-19 pandemic was a blessing and a curse, for it
          brought both opportunity and punishment to us. It is God's way of
          stopping time for most of us. To give rest to those who were restless
          and to give retreat to those who need to surrender. For a mere
          bystander like me, I am blessed to submit to God during these times of
          trials. Just like President Duterte said,{" "}
          <cite>"Only God can solve this problem."</cite> In this unseen battle,
          we are all soldiers. We must not fright but fight this enemy by
          washing our hands, staying calm, and praying always.
        </article>

        <div className="flex justify-center pt-2">
          <Link
            to="/blog"
            className="w-fit flex items-center gap-x-2 white-button"
          >
            <MdOutlineKeyboardArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog1;
