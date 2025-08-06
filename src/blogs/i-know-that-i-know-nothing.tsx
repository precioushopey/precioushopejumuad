import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog12 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              I know everything,
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              that I know nothing.
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
              <time dateTime="2025-08-10">August 10, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            <cite>"I know that I know nothing."</cite> - Socrates
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/80 rounded-4xl backdrop-blur-xs border shadow-xs tracking-normal leading-7 text-left p-8 space-y-6">
        <section className="flex flex-col lg:flex-row gap-6 animate-fade-in-delay-2">
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
              When I was researching courses to take in college, I was torn
              between three choices: Doctor, Lawyer, or Engineer. As the eldest
              child, my choices weren’t purely my own. Studying law was
              unrealistic despite my family’s background in it, I couldn't
              afford the time it demanded. Medicine was another closed door; no
              one in the family had the background, and the financial burden
              would be immense. So I settled on engineering. Specifically,
              Computer Engineering. It was future-proof, practical, and didn’t
              require a board exam. I thought, “Perfect, I can graduate early,
              work immediately, and be called an Engineer.” It was all very
              pragmatic.
            </p>
            <p>But in the pursuit of pragmatism, I lost myself.</p>
            <p>
              You see, I am a liberal arts soul. I process the world through
              emotions, meaning, stories, and empathy. And yet I enrolled in one
              of the most logic-dominated fields, where precision is king and
              emotion is often perceived as a bug, not a feature. At first, I
              thought I could play the game. But college didn’t just challenge
              me, it stripped me.
            </p>
          </article>
        </section>

        <section className="space-y-4 animate-fade-in-delay-3">
          <p>
            I was a valedictorian, the “girl who always wins.” I was used to
            excellence and being congratulated on podiums, with proud teachers
            and clapping classmates. But college hit me like a truck. I was no
            longer extraordinary, just average. Square in a circle. And this
            institution, unlike the ones I grew up in, didn’t cushion the blow.
          </p>
          <p>
            I began to limit my words. In high school, I was outspoken, a
            thought, a journal, a tweet, a messenger update. I lived in words.
            But in college, I shrank. The backlash of saying the wrong thing in
            a sensitive environment taught me caution. I started replying to
            conversations like I was defusing bombs. The trauma ran deep. I’ve
            never been treated so badly in my life, not even close. Some
            professors degraded students, humiliated them publicly, or dismissed
            their efforts with cold indifference. And sadly, it wasn’t an
            isolated experience, it was systemic.
          </p>
          <p>
            This is not a baseless rant. According to a 2023 UNESCO study,{" "}
            <u>
              over 60% of students in Southeast Asia report emotional distress
              tied to poor academic environments,
            </u>{" "}
            with “faculty behavior” cited as one of the top triggers (UNESCO,
            2023). Moreover,{" "}
            <u>
              a 2022 CHED report revealed that mental health cases in colleges
              have risen by over 30% in the last five years,
            </u>{" "}
            particularly in state universities where support systems are
            underfunded (CHED, 2022).
          </p>
          <p>
            And support was something I desperately needed but never received. I
            was not granted a scholarship, even though I <em>should</em> have
            been. The irony stings: the scholarship system often favored those
            who were already well-off, those who had the means to thrive without
            it, while students like me, who could barely afford a meal, were
            overlooked. I stood in line, shamefully, for food stamps just to get
            through the day. There were nights I went home hungry, because lunch
            money was a luxury I didn’t always have. I remember commuting soaked
            from the rain, battling through menstrual cramps, body trembling
            from exhaustion, and standing in overcrowded buses because I
            couldn’t afford to miss a ride home. I didn’t expect chivalry. But I
            hoped, even just once, for a little humanity.
          </p>
          <p>
            I coped the way many do, by surviving. I cheated myself of honesty.
            I relied on others more than I should have. Tasks were too foreign,
            too hard. And I hated how that made me feel: pathetic. But I also
            knew this, I had no choice but to play along. When your world is
            built on survival, integrity becomes a luxury. Even then, I knew
            this wasn’t who I was. I was lost.
          </p>
          <p>
            Still, college taught me. Not in the way I expected, but in the way
            I needed.
          </p>
          <p>
            I learned that people-pleasing doesn't build you up, it empties you
            out. That being the best means nothing if you’re alone. That even
            the smartest mind falls flat without collaboration. That survival
            isn’t success, it’s only the first step. I learned that silence can
            be a trauma response. And most of all, I learned that I must never
            again stay in places that don’t value me.
          </p>
          <p>
            I used to think that excellence meant Latin honors. But in
            hindsight, I’m glad I didn’t get them. It would have been a hollow
            win. As Vico Sotto once said,{" "}
            <cite>“Success must not come at the cost of conscience.”</cite> And
            mine would have paid a heavy price. I didn’t love what I did. I was
            not honest. I was not myself.
          </p>
          <p>
            But maybe that’s part of the journey. Maybe college is meant to
            break you so you can rebuild, this time, on your terms.
          </p>
          <p>
            As a graduate now, I carry no medals, only scars and stories. I know
            now that my degree didn’t define me. But my decisions, my
            resilience, my pain, and my refusal to quit? Those do. I'm not who I
            thought I was. I’m stronger. Quieter. But not silenced. I am still
            here. And I will take back my life.
          </p>
          <p>
            <u>So, was college the best time of my life?</u> No. But it was the
            most transformative. And perhaps, that’s even more important.
          </p>
          <p>
            <em>
              Maybe the best is still ahead, and it begins when I finally choose
              myself.
            </em>
          </p>
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

export default Blog12;
