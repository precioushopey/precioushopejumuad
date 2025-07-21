import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft, MdOutlineOpenInNew } from "react-icons/md";

const Blog2 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col md:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              Words of Gratitude
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              on Behalf of the Graduates
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
              <time dateTime="2025-07-12">July 12, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            This speech was written during the height of the COVID-19 pandemic,
            a time of immense disruption, uncertainty, and emotional strain for
            students around the world. As the batch valedictorian of St. Rita's
            College of Balingasag Senior High School Class of 2021, I delivered
            this message to honor not only our academic journey but the strength
            and resilience our batch showed despite the loss of traditional
            graduation rites. It was my way of expressing heartfelt gratitude to
            our families, teachers, and school leaders who supported us through
            remote learning, and to reflect on how our faith, grit, and
            Ignacian-Marian values carried us through a once-in-a-lifetime
            crisis.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/50 rounded-4xl backdrop-blur-xs border shadow-xs font-medium tracking-normal p-8 space-y-6">
        <section className="flex flex-col gap-6 animate-fade-in-delay-2">
          <figure className="space-y-4">
            <img
              src="/assets/images/vale2.jpg"
              alt="Delivery of the Words of Gratitude Speech by Yours Truly"
              className="w-full aspect-[16/9] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig.1 - Delivery of the Words of Gratitude Speech by Yours Truly.
            </figcaption>
          </figure>
          <article className="space-y-4">
            <p>
              To our beloved School President, Sr. Ma. Rufina B. Guillano, RVM.,
              Sr. Ma. Anecita C. Navaja, RVM – our dynamic Vice President for
              Academic Affairs, to our ever-supportive Basic Education
              Principal, Sr. Ma. Lilibeth E. Monteclaro, RVM, Mr. Alfred A.
              Olano, our Senior High School Academic Coordinator, to the rest of
              the RVM Sisters, to all indefatigable and committed middle
              administrators, faculty and staff, personnel, proud parents,
              honored guests, distinguished visitors, alumni association
              members, fellow graduates, friends, ladies and gentlemen who are
              with us witnessing in this momentous event a pleasant day to all.
              Praised be Jesus and Mary!
            </p>
            <p>
              On behalf of the Senior High School batch 2020-2021, allow me to
              express to every one of you our deepest and honest gratitude for
              the support you gave us throughout our memorable journey. We are
              grateful that God gave us you all, to accompany us in this
              remarkable chapter of our lives. You are the most wonderful people
              who supported us unconditionally to move forward and fulfill our
              dreams to graduate despite this period of worldwide pandemic
              brought by COVID-19.
            </p>
            <p>
              We are now at the ramp where winners stand, carrying with us the
              banner of excellence, colored blue and white. As we step down and
              continue our journey further, we hope that you will continue to
              walk with us on our paths to education and adulthood. I thank God
              for giving me this exceptional chance to share my insights,
              personally to express my gratitude on behalf of my fellow
              graduates of SRCB batch 2020-2021.
            </p>
          </article>
        </section>

        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-3">
          <figure className="w-full md:w-1/2 space-y-4">
            <img
              src="/assets/images/vale1.jpg"
              alt="My Graduation Photo"
              className="w-full aspect-[4/5] rounded-4xl border object-cover"
            />
            <figcaption>Fig.2 - My Graduation Photo.</figcaption>
          </figure>
          <article className="w-full md:w-1/2 space-y-4">
            <p>
              Think of it, for more than a decade, we toil hard and travel back
              and forth to school. But with schools closed due to the pandemic,
              we had to shift, change our methods, and find ways to cope with
              the current situation to sustain and persevere with our dreams to
              finish our senior year. In the first months we were out of school,
              we were not on ourselves. We were ticking time bombs. A minute we
              would be fine, dandy, and then the next we would be crying,
              helpless. The COVID-19 pandemic may have jeopardized our crucial
              early adulthood stage, wherein our emotional and social growth
              develops.
            </p>
            <p>
              Many of us have had a particularly difficult time emotionally
              coping. But then, as the empowered youths of this generation, this
              pandemic has emphasized us as high-spirited young people with grit
              in the face of adversity. As this pandemic gets tougher, we must
              grow even bolder and tougher. We are the tough that gets going as
              the going gets tough. Also, because of this unprecedented twist in
              our lives, we got to see different life happenings. We saw
              families spending more time together. We saw new perspectives on
              our situations that we had never seen before, when what we all
              just mattered was school and academics.
            </p>
          </article>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-3">
          <article className="space-y-4">
            <p>
              We get to know our families deeper, get connected to friends more
              often, and even make friends with strangers from outside our
              bounds, even across the globe, through social media. Studying and
              mastering new material is difficult enough even with the help of
              our amazing teachers. With the added responsibilities of helping
              more at the house, working an essential job, and other challenges
              that come with being at home, it seemed impossible to keep up with
              schoolwork. We had to face a multitude of barriers with our
              unrelenting will to succeed. We are here today, despite all of the
              setbacks and obstacles, because our drive, our perseverance, our
              willpower to endure is stronger than any deterrent.
            </p>
            <p>
              Losing the face-to-face mode of education in the last year of high
              school to a virus was not what we had planned, but it's an
              experience that will affect our lives forever and a memory that we
              will never, ever forget. We are made up of our experiences and
              memories. All of the things that we have been through up to this
              point make us who we are, and the best part is, we are not done
              yet. We will all continue to experience things and make memories
              every day that mold us here and there, and who we truly are and
              who we are meant to become. And I am glad that we, the resilient
              graduates, handled the disappointments and challenges that we face
              during this new normal education set-up. And I hope we will
              continue to handle the next disappointments and challenges that
              will determine the experience that we have and the memory we walk
              away with.
            </p>
          </article>
        </section>

        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-4">
          <article className="w-full md:w-1/2 space-y-4">
            <p>
              We will miss everything in our school year. It would be way easier
              to reminisce about engaging activities the school had once before.
              We missed seniors’ premiere and graduation, our intramurals, and
              retreat. This pandemic was not the defining event for our class.
              Don't let it be. We had monumental events occurring every year,
              even though it was just through virtual streams. We still have our
              teachers’ support when we struggle with a topic. They've supported
              us when walking into school was harder than it was any other day.
            </p>
            <p>
              We supported each other through the shifts in friendships and hard
              times with family. SRCB brought us all together to teach us
              something about ourselves that we didn't know before. Maybe there
              are people out there who didn't, and probably still don't, believe
              that we have worked hard enough to be where we are now. It made us
              contemplate, "Do we deserve this?" Friends, we are exactly where
              God wants us to be, and the good God wants us to be the graduates
              of batch 2020-2021.
            </p>
          </article>
          <figure className="w-full md:w-1/2 space-y-4">
            <img
              src="/assets/images/vale3.jpg"
              alt="My Classmates at Grade 12- STEM B St. Luke"
              className="w-full aspect-[1/1] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig.3 - My Classmates at Grade 12- STEM B St. Luke.
            </figcaption>
          </figure>
        </section>

        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-4">
          <article className="space-y-4">
            <p>
              We all deserve to celebrate and be proud of ourselves. It's just
              upsetting that we won't have a traditional graduation ceremony,
              and sadly, we cannot control the circumstances that we face today.
              Now, as we step into adulthood and start to reach our goals, there
              will be harder challenges to overcome. But our willpower has been
              proven irrevocable. Also, fellow graduates, never forget that as
              long as we use our unrelenting will, we are an unstoppable force.
            </p>
            <p>
              I would like to take this opportunity to thank my parents and
              family, who encouraged and supported me to be educated in an
              Ignacian-Marian institution. I have said this once, and I’ll say
              it again, being a Marian-Ritarian graduate is serendipity. It is
              happiness and love I have not sought for but God gave to me. For
              the past three years, the values Faith, Excellence, and Humble
              Service instilled in me and forever will be in me. As an
              Ignacian-Marian graduate, proceeding to college and sooner
              entering the work force, I’ll forever live by the values I have
              earned from my three years in RVM institutions. With these core
              values, added with love, I will support my family as the future
              breadwinner while making a positive impact on the world.
            </p>
            <p>
              I invite everyone to look to those you can't thank, and take your
              time to do so, although the door for high school has abruptly shut
              for us. I would like to remind everyone that another has opened,
              and it’s a milestone where we can do what we want with it. Please
              know that things will go on and things will always change, but the
              future is absolute and it's coming upon us.
            </p>
            <figure className="space-y-4">
              <img
                src="/assets/images/vale4.jpg"
                alt="Presentation Slide with My Awards"
                className="w-full aspect-[16/9] rounded-4xl border object-cover"
              />
              <figcaption>Fig.4 - Awards Received.</figcaption>
            </figure>

            <p>
              Now that we have fulfilled our dream to graduate, we wish to share
              with you, our beloved supporters, our triumph and joy that we
              feel, realizing that our efforts, dedication, persistence,
              constancy, and resilience made this possible. We also wish to
              offer this diploma to God, to our ever supportive family, to our
              beloved teachers and advisers, and our alma mater, St. Rita’s
              College of Balingasag. God may bless you for all the support you
              gave to us. We love you so much and you will always be in our
              hearts. God bless you!
            </p>
          </article>
        </section>

        <section className="flex justify-center border-t-2 gap-2 pt-8">
          <a
            target="_blank"
            href="https://www.facebook.com/share/v/1PE37PXddC/"
            className="hover:underline"
          >
            <p>
              Joint 4th Senior High School Graduation Exercises and Recognition
              Rites 2021
            </p>
          </a>
          <MdOutlineOpenInNew size={20} />
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

export default Blog2;
