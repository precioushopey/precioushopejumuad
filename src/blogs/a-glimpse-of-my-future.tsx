import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog5 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col md:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              A Glimpse Of
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              My Future
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
              <time dateTime="2025-07-19">July 19, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            This time capsule letter is a deeply personal message written by my
            20-year-old self to the woman I hope to become. I created it as part
            of our essay activity in the subject Purposive Communication during
            my second year in college—a task that challenged us to articulate
            our identity, values, and vision through the lens of
            self-reflection. It captures my thoughts, struggles, and hopes
            during one of the most chaotic yet formative seasons of my life.
            Framed through the powerful lines of <em>Invictus</em>, it speaks to
            the resilience I’m striving to build, the self-love I’m slowly
            learning, and the clarity I seek in an uncertain future. As a young
            woman navigating adulthood, I wrote this not just as a reminder of
            who I was but as a promise to who I will become. It is both a
            conversation and a commitment to myself—to stay grounded, stay soft,
            and stay strong.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/50 rounded-4xl backdrop-blur-xs border shadow-xs font-medium tracking-normal p-8 space-y-6">
        <section className="text-right animate-fade-in-delay-2">
          <p>232, M.L. Quezon St., Lower Jasaan</p>
          <p>Jasaan 9003, Misamis Oriental</p>
          <p>March 10, 2023</p>
        </section>

        <section className="text-left animate-fade-in-delay-3">
          <p>
            <b>Engr. Precious Hope T. Jumuad</b>
          </p>
          <p>Computer Engineer</p>
        </section>

        <section className="flex flex-col gap-6 animate-fade-in-delay-4">
          <p className="text-left">Dear Engr. Jumuad,</p>
          <article className="space-y-4">
            <p className="font-noto">
              <blockquote cite="https://www.poetryfoundation.org/poems/51642/invictus">
                <em>
                  <p>Out of the night that covers me,</p>
                  <p>Black as the pit from pole to pole,</p>
                  <p>I thank whatever gods may be</p>
                  <p>For my unconquerable soul.</p>
                </em>
              </blockquote>
            </p>
            <p>
              Hello, <em>Precious, Hope, HopHop, P, "Presh"?</em> How are you?
              Do you still remember this poem? We memorized and performed it
              since we were 4 years old. Isn’t it nostalgic? Do you still
              remember it? I always thought of it as our life allegory because
              this poem speaks volumes about the person we always wanted to be.
            </p>
            <p>
              Anyway, I know you've been busy with school or work right now.
              Also, I know you forgot to take care of yourself again. I know
              that when asked <em>"how are you"</em> you'll give the questioner
              a subtle and genuine smile with a sigh <em>"I'm fine"</em>, but
              deep down you're not. I know that even if you already grew out of
              that attitude, the people-pleaser personality is still with you. I
              know you because you are me. If you are reading this, please take
              a moment to slow down, lie your back somewhere comfortable, and
              give all your attention to this message.
            </p>
            <p className="font-noto">
              <blockquote cite="https://www.poetryfoundation.org/poems/51642/invictus">
                <em>
                  <p>In the fell clutch of circumstance</p>
                  <p>I have not winced nor cried aloud.</p>
                  <p>Under the bludgeoning of chance</p>
                  <p>My head is bloody, but unbowed.</p>
                </em>
              </blockquote>
            </p>
            <p>
              That’s the second part of the poem. It reminds me of how much we
              struggled to be resilient. The news is, we are practicing
              ‘Happiness 2.0’ or ‘Contentment’ right now. Also, we are absorbing
              stoic values so that we could become better people in the future.
              Well, with all of that, I hope that we are. Now, let me start
              again. Hello, I hope you are settled, how are you again? Are you
              in graduate school or just working? Is the earth still spinning on
              its axis? What’s with the world’s politics and health affairs?
              What's up lately, I mean, what's the thrill about life right now?
              Please, do take your time to contemplate before you proceed to the
              next question. Done? Now, for the million-dollar question, are you
              happy? Do you finally love yourself?
            </p>
            <p>
              Please take your time to reflect on these questions. After that,
              please read through what's happening in my, rather, our life right
              now as a 20-year-old. Sadly, we failed to make our 10-year-old
              self's dream of becoming a fine lady at 20. The 20-year-old
              Precious is stressed, anxious as always, and very haggard. We're
              fixing ourselves, but college is so chaotic that our glow-up
              cannot catch up. But it's fine right now. Hope that you are
              glowing, future Precious. If not physically then hopefully
              spiritually.{" "}
              <u>I hope we illuminate that radiance to our fellows.</u>
            </p>
            <p className="font-noto">
              <blockquote cite="https://www.poetryfoundation.org/poems/51642/invictus">
                <em>
                  <p>Beyond this place of wrath and tears</p>
                  <p>Looms but the Horror of the shade,</p>
                  <p>And yet the menace of the years</p>
                  <p>Finds and shall find me unafraid.</p>
                </em>
              </blockquote>
            </p>
            <p>
              The third stanza of the poem. I know horrors and disappointments
              will come across your life as it has come across mine.
              Fortunately, we have overcome those somehow, mostly through
              self-help and hope. Hope, that’s what we’ve named for, I am
              practicing to be that. I hope in the future we have become a
              <u>
                shining beacon of hope not just for ourselves but for others
                too.
              </u>
            </p>
            <p>
              Also, I am very curious. Do we have a romantic partner or are we
              still single, after all these years? If the above question is a
              ‘yes, we’re single’, then maybe we became a fully fledge{" "}
              <em>aromantic/asexual</em>. We figured that we are{" "}
              <em>aro/ace</em> since the start of our adulthood. Honestly, it's
              a life-changing realization. Instead of looking out for love,
              seeking validation from others, and thirsting for a romantic
              partner, we finally shifted our focus. This you, finally found the
              greatest love of all and is learning how to do it. You guessed it,
              it is loving oneself. We are slowly coping, slowly healing, and
              surely loving ourselves. Precious, we are consistent. I hope you
              feel proud that we did this to ourselves by the time you read
              this. Cheers to loving ourselves.
            </p>
            <p className="font-noto">
              <blockquote cite="https://www.poetryfoundation.org/poems/51642/invictus">
                <em>
                  <p>It matters not how strait the gate,</p>
                  <p>How charged with punishments the scroll,</p>
                  <p>I am the master of my fate,</p>
                  <p>I am the captain of my soul.</p>
                </em>
              </blockquote>
            </p>
            <p>
              This is the most beautiful part of the poem. The finishing touches
              are what make it the author’s magnum opus. Like what it said, it
              doesn’t matter if things don’t go perfectly or how you wished them
              to be. You are still your captain, you take control. You are Engr.
              Precious Hope T. Jumuad for god’s sake. You’ve overcome a lot of
              life’s trials and tribulations, and I know you are just starting.
              But Precious, may I remind you to not dream but to ambition. As a
              kid, we thought that we could dream big, as big as we desire it to
              be. But, most of the time, no. Life’s just that harsh. Dreams are
              nothing but hopeful conjectures of a tiny momentary speck like us
              within an indifferent universe. But I hope you coped up and moved
              on. The 20 years old you coped up, although the wounds of
              discouragement did not completely heal yet. So, future Precious, I
              hope you kept your dreams simple and subtle.{" "}
              <u>
                Focus on your ambitions and progress, stay healthy, and be
                wealthy, if not in possessions, then be in the heart.
              </u>{" "}
              <em>Keep up, P!</em>
            </p>
          </article>
        </section>

        <section className="text-right">
          <p>Always loving,</p>
          <p>
            <b>PRECIOUS HOPE T. JUMUAD</b>
          </p>
          <p>- 5 years ago</p>
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

export default Blog5;
