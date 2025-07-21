import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">Blog</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">Page</h2>
        </div>
      </header>

      <main className="space-y-6">
        <Link
          to="/blogs/the-gumamela-I-offered-to-mary"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
        >
          <img
            src="/assets/images/gumamela2.jpg"
            alt="The gumamela I offered to Mary"
            className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col items-center justify-center p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              The <em>gumamela</em> I offered to Mary
            </h3>
            <p className="line-clamp-5 font-light italic">
              I wrote this short story during the height of the pandemic, when
              the silence of isolation gave me the space to reflect on the
              vibrant memories of my childhood, faith, and the quiet beauty of
              my hometown church. I have always turned to writing to express the
              emotions I could not say aloud. This piece captures not only my
              early religious experiences but also a tender moment of first
              love, wrapped in nostalgia and reverence for the Immaculate
              Conception Parish Church of Jasaan. It is a deeply personal
              tribute to a place that shaped my spiritual and emotional journey.
              This story was honored with "The Trailblazer Editor’s Choice"
              award in <em>Reflections 2023: 8-Bit Memory — Reimagined</em>, a
              recognition that affirmed the quiet sincerity and cultural weight
              it carries.
            </p>
            <div className="flex items-center text-sm gap-x-2">
              <img
                src="/assets/images/precious.png"
                alt="In the Midst of Silence"
                className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
              />
              <p>Precious Hope T. Jumuad | </p>
              <p>
                <time dateTime="2025-07-18">July 18, 2025</time>
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/blogs/have-i-not-breathed-for-a-moment"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
        >
          <img
            src="/assets/images/photos2.jpg"
            alt="Have I Not Breathed For A Moment"
            className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col items-center justify-center p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Have I Not Breathed For A Moment
            </h3>
            <p className="line-clamp-5 font-light italic">
              This essay was born in the quiet chaos of the pandemic, a period
              where isolation was no longer a choice but a collective reality.
              Amidst the monotony of online classes, emotional fatigue, and the
              relentless pressure to stay productive, I found myself desperately
              reaching for meaning, for pause, for breath. Writing became a
              sanctuary. This essay submitted to The Trailblazer Publication -
              USTP for their Reflections Portfolio on 2022, was a deeply
              personal meditation on stillness, self-awareness, and the
              emotional undercurrents often buried beneath academic demands and
              social expectations. Through seemingly ordinary moments like
              sunrises, moonlight, and melodies, I began to witness the
              extraordinary grace of simply being. This piece captures how, even
              in confinement, we can reconnect with beauty, with nature, and
              ultimately, with ourselves. I wrote this not only to reflect but
              to remind others: in the weight of living, don’t forget to stop,
              feel, and breathe. Even just for a moment.
            </p>
            <div className="flex items-center text-sm gap-x-2">
              <img
                src="/assets/images/precious.png"
                alt="In the Midst of Silence"
                className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
              />
              <p>Precious Hope T. Jumuad | </p>
              <p>
                <time dateTime="2025-07-13">July 13, 2025</time>
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/blogs/words-of-gratitude"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
        >
          <img
            src="/assets/images/vale1.jpg"
            alt="Words of Gratitude on Behalf of the Graduates"
            className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col items-center justify-center p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Words of Gratitude on Behalf of the Graduates
            </h3>
            <p className="line-clamp-5 font-light italic">
              This speech was written during the height of the COVID-19
              pandemic, a time of immense disruption, uncertainty, and emotional
              strain for students around the world. As the batch valedictorian
              of St. Rita's College of Balingasag Senior High School Class of
              2021, I delivered this message to honor not only our academic
              journey but the strength and resilience our batch showed despite
              the loss of traditional graduation rites. It was my way of
              expressing heartfelt gratitude to our families, teachers, and
              school leaders who supported us through remote learning, and to
              reflect on how our faith, grit, and Ignacian-Marian values carried
              us through a once-in-a-lifetime crisis.
            </p>
            <div className="flex items-center text-sm gap-x-2">
              <img
                src="/assets/images/precious.png"
                alt="In the Midst of Silence"
                className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
              />
              <p>Precious Hope T. Jumuad | </p>
              <p>
                <time dateTime="2025-07-12">July 12, 2025</time>
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/blogs/in-the-midst-of-silence"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
        >
          <img
            src="/assets/images/photos1.jpg"
            alt="In the Midst of Silence"
            className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col items-center justify-center p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              In the Midst of Silence: Reflections of a Bystander in a Time of
              Crisis
            </h3>
            <p className="line-clamp-5 font-light italic">
              I wrote this personal essay at the height of the COVID-19
              pandemic, a time when the world seemed to pause, yet our inner
              lives grew louder than ever. As someone who observes more than
              speaks, I felt the need to process the chaos, fear, and quiet
              blessings brought by that period. Writing became my outlet, a way
              to make sense of the global disruption and the unexpected gifts it
              gave. This piece is not just a reflection on the physical toll of
              the virus, but a deeply personal account of growth, surrender, and
              introspection during a time of isolation. Through it, I hoped to
              express the paradox of pain and peace that the pandemic planted in
              my life.
            </p>
            <div className="flex items-center text-sm gap-x-2">
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
        </Link>
      </main>
    </div>
  );
};

export default Blog;
