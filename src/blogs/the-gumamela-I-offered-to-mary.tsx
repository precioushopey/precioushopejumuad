import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft, MdOutlineOpenInNew } from "react-icons/md";

const Blog6 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col md:flex-row gap-x-2">
            <span className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              The
            </span>
            <span className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              gumamela
            </span>
            <span className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              I offered to
            </span>
            <span className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              Mary
            </span>
          </div>
          <div className="flex items-center text-sm gap-x-2">
            <img
              src="/assets/images/precious.png"
              alt="Precious Hope T. Jumuad"
              className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
            />
            <p>Precious Hope T. Jumuad | </p>
            <p>
              <time dateTime="2025-07-20">July 20, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            I wrote this short story during the height of the pandemic, when the
            silence of isolation gave me the space to reflect on the vibrant
            memories of my childhood, faith, and the quiet beauty of my hometown
            church. I have always turned to writing to express the emotions I
            could not say aloud. This piece captures not only my early religious
            experiences but also a tender moment of first love, wrapped in
            nostalgia and reverence for the Immaculate Conception Parish Church
            of Jasaan. It is a deeply personal tribute to a place that shaped my
            spiritual and emotional journey. This story was honored with "The
            Trailblazer Editor’s Choice" award in{" "}
            <em>Reflections 2023: 8-Bit Memory — Reimagined</em>, a recognition
            that affirmed the quiet sincerity and cultural weight it carries.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/50 rounded-4xl backdrop-blur-xs border shadow-xs font-medium tracking-normal p-8 space-y-6">
        <section className="flex flex-col gap-6 animate-fade-in-delay-2">
          <figure className="space-y-4">
            <img
              src="/assets/images/gumamela1.jpg"
              alt="Immaculate Conception Parish Church of Jasaan"
              className="w-full aspect-[3/2] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig.1 - Immaculate Conception Parish Church of Jasaan (photo
              courtesy of Arellano J. Galdo III){" "}
              <a
                href="https://www.flickr.com/photos/125160336@N08/16169144711/in/photostream/"
                target="_blank"
              >
                <cite>(Source: Galdo, 2015).</cite>
              </a>
            </figcaption>
          </figure>
          <article className="space-y-4">
            <p>
              The month of May always brought with it a sense of excitement and
              anticipation. It was the month of <em>Flores de Mayo</em>, a
              colorful and vibrant celebration that honored the Virgin Mary. As
              a child, I would wake up early on Saturday mornings to attend the
              Flores de Mayo procession. I would put on my best dress, and along
              the way, we would pick up flowers to offer to Mama Mary. My
              cousins and I would make our way to the town church where the
              procession would start.
            </p>
            <p>
              The procession was led by a group of children, dressed in white
              gowns and angel wings, and carrying baskets of flowers. They were
              followed by the letter sign ‘AVE MARIA’, adorned with even more
              flowers. The air was thick with the scent of gumamela, jasmine,
              daisies, roses, and other flowers, and the sound of{" "}
              <em>O Birhen Maria</em> being sung filled the air. As we made our
              way through the streets, children like us would come out of their
              homes to attend the procession in the church. We would then offer
              our picked-up flowers in front of the statue of the Immaculate
              Mary, while others would offer prayers and light candles.
            </p>
            <p>
              This was just one of my sweet and earliest memories of being a
              child growing up in the{" "}
              <em>Immaculate Conception Parish Church of Jasaan</em>. I lived in
              this town nestled in the heart of the coast since birth. The town
              was known for its lush greenery, beautiful beaches, and its
              Catholic church, which was declared a National Cultural Treasure
              in Northern Mindanao due to its artistic design and cultural
              values.
            </p>
          </article>
        </section>

        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-3">
          <figure className="w-full md:w-1/2 space-y-4">
            <img
              src="/assets/images/gumamela2.jpg"
              alt="Me and My Sibling's First Communion"
              className="w-full aspect-[778/1037] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig.2 - Me and My Sibling's First Communion.
            </figcaption>
          </figure>
          <article className="w-full md:w-1/2 space-y-4">
            <p>
              As a young girl growing up in a devout Catholic family, and from a
              very young age, I was introduced to the church's teachings and
              traditions. I was fascinated by its rich history, beautiful
              architecture, and the sense of peace and comfort it offered. As I
              grew older, I began to appreciate the church even more. It was the
              place where I experienced many firsts in my life.
            </p>
            <p>
              Here, I received my First Communion, a milestone that marked my
              official entry into the Catholic faith. I still remember the
              feeling of awe and wonder I felt as I knelt at the altar,
              surrounded by the beautiful red-white brick walls and flickering
              candlelight. The church was also the site of my Confirmation, a
              sacrament that deepened my commitment to my faith.
            </p>
            <p>
              I remember feeling nervous and excited as I stood before the
              bishop, dressed in my white gown and holding a lit candle. The
              bishop's words, the music, and the smell of incense combined to
              create a moment I would never forget. But it wasn't just religious
              milestones that I had experienced at the church. It was also the
              site where I found my first <em>love</em>. I remember that day as
              if it were yesterday.
            </p>
          </article>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-3">
          <article className="space-y-4">
            <p>
              Everyone was out taking their snacks and playing outside the
              church grounds. While I was walking along the church aisle, just
              enjoying myself as I felt the fresh summer breeze entering from
              the nearby windows and fondling my face, he came in. A guy,
              somewhat only a little older than me, came in landing as gently as
              an owl and making a beeline toward the church organ near the
              sanctuary.
            </p>
            <p>
              There, he helped himself set up and started on the first key. He
              then started tickling the keys with his fingers and proceeded to
              play a very heartwarming serenade. He was playing the tunes of a
              lovely church hymn, and every note sings silent lyrics. As he was
              playing that, the world seemed to stop. Suddenly, it was just me
              and him, distant in a huge hall. <em>I’m in love!</em> I just felt
              it the moment he played the first arpeggio notes. That was the
              first time I knew what love is, and that was also the last time I
              knew what love truly was.
            </p>
          </article>
        </section>

        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-4">
          <article className="w-full md:w-1/2 space-y-4">
            <p>
              His surroundings seemed to soften as he played his beloved piano.
              It was like soft flowers came bursting from behind; suddenly
              everything became rose-colored. That sensation seemed to rise onto
              the altar. The altar resembled a castle in heaven, with its cloud
              backdrop and statues of the church’s patron saints, with the
              Immaculate Mary enclosed at each window of the elevated castle
              breakfront.
            </p>
            <p>
              Just then, I noticed how beautiful and well-crafted it was. For a
              moment, I forgot what I was doing. I was just mesmerized by the
              sanctuary’s design, all while listening to him. It was like we
              were the only people in the world and everyone was just NPCs. Like
              the universe just conspires for this moment to happen.
            </p>
          </article>
          <figure className="w-full md:w-1/2 space-y-4">
            <img
              src="/assets/images/gumamela3.jpg"
              alt="The Restored Retablo (photo courtesy of Arellano J. Galdo III)."
              className="w-full aspect-[4/3] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig.3 - The Restored Retablo (photo courtesy of Arellano J. Galdo
              III){" "}
              <a
                href="https://www.metrocagayandemisamis.com/2025/04/24/historic-jasaan-church-finally-gets-a-historical-marker/"
                target="_blank"
              >
                <cite>(Source: Baños, 2025).</cite>
              </a>
            </figcaption>
          </figure>
        </section>

        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-4">
          <article className="space-y-4">
            <p>
              Oh, to be in love. Suddenly, the music stopped. My trance dance in
              the astral plane was disconnected. The children came running
              inside, and the guy on the piano stopped playing. Sadly, that was
              the first and last moment I was in an unfathomable deep dive into
              love. The true definition of it opened briefly for me. I was the
              brightest and luckiest girl on earth. Although I feel melancholic,
              I was also happy. Happy because for that short moment, I was in
              love and felt loved.
            </p>
            <p>
              Contrary to the objective view, I am not in love with the guy. I
              was in love with the moment and the place. Over the years, my love
              for the church only grew stronger. I attended mass regularly,
              participated in church events, and found comfort in the church's
              teachings during difficult times in my life. This parish is not
              just a synagogue, a landmark, or a National Cultural Treasure. It
              is also where I met and had my firsts, my childhood and
              coming-of-age core memories, my <em>rondalla</em> recitals, and my
              forbidden romantic rendezvous. More importantly, this is my HOME.
            </p>
            <figure className="space-y-4">
              <img
                src="/assets/images/gumamela4.webp"
                alt="Our Rondalla Performance in front of the Church"
                className="w-full aspect-[3/2] rounded-4xl border object-cover"
              />
              <figcaption>
                Fig.4 - Our Rondalla Performance in front of the Church{" "}
                <a
                  href="https://mindanews.com/photo-of-the-day/2014/06/jasaan-church/"
                  target="_blank"
                >
                  <cite>(Source: Gallardo, 2014).</cite>
                </a>
              </figcaption>
            </figure>
            <p>
              As I grew older, my appreciation for relevant church celebrations
              only deepened. I came to understand the significance of the
              celebrations, not just as a religious observance, but as a way to
              honor the beauty and diversity of Filipino culture. Today, as I
              look back on my cherished memories of the historic Catholic
              church, I feel a sense of nostalgia and longing. I miss the
              sights, sounds, and smells of religious activities. But I also
              feel grateful for the memories and experiences that have shaped
              me, and for the enduring spirit of Filipino culture that continues
              to thrive. I feel appreciative for the role it played in shaping
              my life. It will always hold a special place in my heart, and I
              know that it will continue to inspire and guide generations of
              faithful Catholics to come.
            </p>
          </article>
        </section>

        <section className="flex justify-center border-t-2 gap-2 pt-8">
          <a
            target="_blank"
            href="https://online.fliphtml5.com/yxrgv/tcvk/#p=32"
            className="hover:underline"
          >
            <p>Reflections 2023: 8-Bit Memory — Reimagined.</p>
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

export default Blog6;
