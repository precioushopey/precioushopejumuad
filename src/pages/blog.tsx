import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";

type BlogPost = {
  to: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    to: "/blogs/the-gumamela-I-offered-to-mary",
    image: "/assets/images/gumamela2.jpg",
    alt: "The gumamela I offered to Mary",
    title: "The gumamela I offered to Mary",
    description:
      "I wrote this short story during the height of the pandemic, when the silence of isolation gave me the space to reflect on the vibrant memories of my childhood, faith, and the quiet beauty of my hometown church. I have always turned to writing to express the emotions I could not say aloud. This piece captures not only my early religious experiences but also a tender moment of first love, wrapped in nostalgia and reverence for the Immaculate Conception Parish Church of Jasaan. It is a deeply personal tribute to a place that shaped my spiritual and emotional journey. This story was honored with The Trailblazer Editor’s Choice award in Reflections 2023: 8-Bit Memory — Reimagined, a recognition that affirmed the quiet sincerity and cultural weight it carries.",
    date: "2025-07-20",
  },
  {
    to: "/blogs/a-glimpse-of-my-future",
    image: "/assets/images/glimpse.jpg",
    alt: "A Glimpse Of My Future",
    title: "A Glimpse Of My Future",
    description:
      "This time capsule letter is a deeply personal message written by my 20-year-old self to the woman I hope to become. I created it as part of our essay activity in the subject Purposive Communication during my second year in college—a task that challenged us to articulate our identity, values, and vision through the lens of self-reflection. It captures my thoughts, struggles, and hopes during one of the most chaotic yet formative seasons of my life. Framed through the powerful lines of Invictus, it speaks to the resilience I’m striving to build, the self-love I’m slowly learning, and the clarity I seek in an uncertain future. As a young woman navigating adulthood, I wrote this not just as a reminder of who I was but as a promise to who I will become. It is both a conversation and a commitment to myself—to stay grounded, stay soft, and stay strong.",
    date: "2025-07-19",
  },
  {
    to: "/blogs/have-i-not-breathed-for-a-moment",
    image: "/assets/images/photos2.jpg",
    alt: "Have I Not Breathed For A Moment",
    title: "Have I Not Breathed For A Moment",
    description:
      "This essay was born in the quiet chaos of the pandemic, a period where isolation was no longer a choice but a collective reality. Amidst the monotony of online classes, emotional fatigue, and the relentless pressure to stay productive, I found myself desperately reaching for meaning, for pause, for breath. Writing became a sanctuary. This essay submitted to The Trailblazer Publication - USTP for their Reflections Portfolio on 2022, was a deeply personal meditation on stillness, self-awareness, and the emotional undercurrents often buried beneath academic demands and social expectations. Through seemingly ordinary moments like sunrises, moonlight, and melodies, I began to witness the extraordinary grace of simply being. This piece captures how, even in confinement, we can reconnect with beauty, with nature, and ultimately, with ourselves. I wrote this not only to reflect but to remind others: in the weight of living, don’t forget to stop, feel, and breathe. Even just for a moment.",
    date: "2025-07-18",
  },
  {
    to: "/blogs/storyboard-a-five-year-plan",
    image: "/assets/images/storyboard.jfif",
    alt: "Storyboard: A Five-Year Plan for the Development of Myself",
    title: "Storyboard: A Five-Year Plan for the Development of Myself",
    description:
      "This storyboard was created as my final Performance Innovative Task for the subject Understanding the Self in my first year, where we were asked to map out a personal five-year development plan. It became an opportunity to reflect on who I am, the roles I currently play, and the person I am intentionally becoming. Rooted in my own values, experiences, and ambitions, this piece expresses my commitment to personal growth, spiritual grounding, and psychological resilience. The plan targets key aspects of the self—philosophical, psychological, spiritual, and political—highlighting my aspirations not only to be excellent in academics and leadership but also to pursue authentic happiness and self-actualization. My teacher appreciated the clarity and depth of this vision and chose to showcase it as a sample for the next batch, which affirmed its worthiness to be shared and remembered.",
    date: "2025-07-13",
  },
  {
    to: "/blogs/words-of-gratitude",
    image: "/assets/images/vale1.jpg",
    alt: "Words of Gratitude on Behalf of the Graduates",
    title: "Words of Gratitude on Behalf of the Graduates",
    description:
      "This speech was written during the height of the COVID-19 pandemic, a time of immense disruption, uncertainty, and emotional strain for students around the world. As the batch valedictorian of St. Rita's College of Balingasag Senior High School Class of 2021, I delivered this message to honor not only our academic journey but the strength and resilience our batch showed despite the loss of traditional graduation rites. It was my way of expressing heartfelt gratitude to our families, teachers, and school leaders who supported us through remote learning, and to reflect on how our faith, grit, and Ignacian-Marian values carried us through a once-in-a-lifetime crisis.",
    date: "2025-07-12",
  },
  {
    to: "/blogs/in-the-midst-of-silence",
    image: "/assets/images/photos1.jpg",
    alt: "In the Midst of Silence: Reflections of a Bystander in a Time of Crisis",
    title:
      "In the Midst of Silence: Reflections of a Bystander in a Time of Crisis",
    description:
      "I wrote this personal essay at the height of the COVID-19 pandemic, a time when the world seemed to pause, yet our inner lives grew louder than ever. As someone who observes more than speaks, I felt the need to process the chaos, fear, and quiet blessings brought by that period. Writing became my outlet, a way to make sense of the global disruption and the unexpected gifts it gave. This piece is not just a reflection on the physical toll of the virus, but a deeply personal account of growth, surrender, and introspection during a time of isolation. Through it, I hoped to express the paradox of pain and peace that the pandemic planted in my life.",
    date: "2025-07-06",
  },
];

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
        {blogPosts.map((post) => (
          <Link
            key={post.to}
            to={post.to}
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="flex flex-col items-center justify-center p-4 space-y-2">
              <h3
                className="font-semibold text-lg"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <p className="line-clamp-5 font-light italic">
                {post.description}
              </p>
              <div className="flex items-center text-sm gap-x-2">
                <img
                  src="/assets/images/precious.png"
                  alt="Precious Hope T. Jumuad"
                  className="w-[40px] aspect-[1/1] object-cover rounded-full bg-white"
                />
                <p>Precious Hope T. Jumuad | </p>
                <p>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Blog;
