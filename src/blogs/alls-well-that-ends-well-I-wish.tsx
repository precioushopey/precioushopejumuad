import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog14 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col md:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              “all’s well that ends well,”
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              I wish
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
              <time dateTime="2025-08-24">August 24, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            <cite>"Success must not come at the cost of conscience."</cite> –
            Vic Sotto
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/50 rounded-4xl backdrop-blur-xs border shadow-xs font-medium tracking-normal text-left p-8 space-y-6">
        <section className="flex flex-col md:flex-row gap-6 animate-fade-in-delay-2">
          <article className="w-full md:w-1/2 space-y-4">
            <p>
              They say,{" "}
              <cite>“College is a preparation for the real world.”</cite> I
              didn't know that meant learning how to be mistreated, disregarded,
              and then gaslit into thinking it’s part of the process.
            </p>
            <p>
              I enrolled in college with nothing but belief in myself and the
              practical hope that this system would help me become employable,
              stable, and proud. I entered the battlefield with a full heart and
              a nearly empty mind when it came to tech. I didn’t grow up
              tech-savvy. I was a top student, yes, a valedictorian even, but I
              was also a girl from the province, a dreamer without a backup
              plan. I took up Computer Engineering not because I understood it,
              but because I was told it was "future-proof." That it had no board
              exam. That I could start working right after. That I could be
              called “Engineer” without too much red tape. But no one warned me
              that this course, and the system behind it, would do everything to
              make me feel less than human.
            </p>
          </article>
          <figure className="w-full md:w-1/2 space-y-4">
            <img
              src="/assets/images/essay3.png"
              alt="“all’s well that ends well,” I wish"
              className="w-full aspect-[1/1] rounded-4xl border object-cover"
            />
          </figure>
        </section>

        <section className="space-y-4 animate-fade-in-delay-3">
          <p>
            Let me make it clear: <b>the system failed me.</b> Not just the
            professors who seemed allergic to empathy. Not just the admin who
            floated in their ivory towers, unaware or uninterested in what was
            happening below. The entire institution failed me, and thousands
            like me, by forgetting its purpose.{" "}
            <b>
              By mistaking authority for superiority, and students for
              statistics.
            </b>
          </p>
          <p>
            I speak not from bitterness, but from truth. This is not just my
            story, <em>it’s a case study in systemic rot.</em>
          </p>
          <p>
            I’ve seen teachers humiliate students in front of class. I’ve seen
            grades weaponized. I’ve had instructors demand expensive outputs
            worth 30% of our final grade that had nothing to do with the
            lessons. I’ve sat in classrooms where it was clear the teacher
            didn’t want to be there, and made sure we didn’t either. Some of
            these people shouldn’t be called educators, they are functionaries
            of an assembly line that’s rusted, overburdened, and apathetic.
          </p>
          <p>
            I would’ve endured all of that if I believed there was a purpose
            behind it. But most of it was <b>compliance theater.</b> The kind
            where form is favored over function. Where tasks are assigned just
            to make students busy. Where performance takes precedence over
            understanding.
          </p>
          <p>
            According to the{" "}
            <b>World Bank’s 2023 Philippine Education Sector Report,</b> over
            <b>
              {" "}
              90% of Filipino children aged 10 cannot read or understand a
              simple, age-appropriate text.
            </b>{" "}
            And while that data applies primarily to basic education, the same
            lack of comprehension, engagement, and meaningful instruction bleeds
            into college. The <b>Commission on Higher Education (CHED)</b>{" "}
            admits that only{" "}
            <b>
              53% of college graduates are considered employable within their
              fields,
            </b>{" "}
            largely because schools are not teaching industry-relevant or
            skill-specific content.
          </p>
          <p>
            Let that sink in: nearly half of us graduate without actually being
            job-ready. So what are we doing for four years?
          </p>
          <p>More than the academics, it’s the human toll that breaks me.</p>
          <p>
            I used to write every day. Journals, tweets, messenger notes. I was
            a chatterbox of thoughts. But college cut my tongue. Creativity
            died. My brain, once a furnace of ideas, went cold. For the first
            time in my life, I had no thoughts. No voice. No will. I was not me.
          </p>
          <p>
            Even commuting home was a metaphor for this silent suffering. I
            remember the nights I had to ride standing in jam-packed buses while
            soaked in rain, cramping, starving, and no one even offered a seat.
            Not even for the elderly standing beside me, trembling. We were all
            just trying to survive. And that’s what college felt like: a crammed
            vehicle with no seats left, no justice, no pause. Just bruised knees
            and white-knuckled railings.
          </p>
          <p>
            Some nights, I prayed. I asked God for resurrection that, like
            Christ rising from death, I too might rise from the academic grave
            they buried me in. It sounds dramatic, but that’s trauma for you. It
            dramatizes the truth or maybe just reveals how dramatic the truth
            really is.
          </p>
          <p>
            They say,{" "}
            <cite>“you should just be grateful you’re studying for free.”</cite>{" "}
            But what does free mean when we pay with our health, our dignity,
            our identity? When mental health services are non-existent? When we
            stand in queues all day just to be told we’re missing one
            requirement. One we weren’t informed about because no one answers
            emails or posts proper memos?
          </p>
          <p>
            The hypocrisy is staggering. Posters scream <i>“No to Red Tape!”</i>{" "}
            but we wait weeks for a signature. Professors demand respect but
            offer none in return. Student leaders parade hashtags and “safe
            space” declarations, yet ignore the real cries echoing through the
            halls. We are told to “rage against the dying of the light,” but our
            light was snuffed out the moment we stepped into classrooms run like
            courtrooms.
          </p>
          <p>
            Even worse, the student body, which should speak for us, is often
            blind, mute, or co-opted. Those who dare speak up? Exiled. Pressured
            to drop out. I’ve seen it. I’ve <em>felt</em> it.
          </p>
          <p>
            I know what you're thinking,{" "}
            <cite>
              “Maybe you just weren’t tough enough. Maybe this is part of life.”
            </cite>{" "}
            No. You don’t get to say that unless you’ve stood where I stood. In
            a bus with no seat, in a classroom with no voice, in a university
            with no soul.
          </p>
          <p>
            And yet. I learned. Not from their curriculum, but from their
            failures.
          </p>
          <p>
            I learned that <b>I am not my grades.</b> That{" "}
            <b>
              a medal won through shortcuts is a heavier burden than no medal at
              all.
            </b>{" "}
            That{" "}
            <b>
              Latin honors often go to the most strategic, not the most learned.
            </b>{" "}
            That groupmates will sometimes weaponize your competence, and
            professors will mistake silence for compliance. But most
            importantly, I learned that{" "}
            <b>
              {" "}
              I will never again put myself in a place where I am not valued.
            </b>
          </p>
          <p>
            After college, I quietly quit the version of myself that needed
            applause to feel worthy. I started reclaiming my life. I'm now
            learning, truly learning, not because of requirements, but because I
            want to. I’m going deep. No shortcuts. No cheating. No imposter
            syndrome. Just grit.
          </p>
          <p>
            And it’s terrifying. Because now, as I step into the real world, a
            fresh fear grips me:{" "}
            <cite>Will I end up living paycheck to paycheck?</cite> The average
            starting salary for new grads here hovers between ₱15,000 to
            ₱20,000/month before tax. And that’s if you're lucky. According to
            <b>
              {" "}
              PSA labor data (2024), underemployment among college graduates in
              the Philippines stands at over 17.9%,
            </b>{" "}
            with many working jobs far outside their field or earning below
            livable wage standards.
          </p>
          <p>
            I didn’t go through hell just to pay bills and die. But what other
            options are there when capitalism has you by the throat?
          </p>
          <p>
            They say, <cite>“all’s well that ends well.”</cite> But I wish. I
            really wish it were true.
          </p>
          <p>
            So here I am. Degree in hand, trauma in tow, and a heart still
            aching for justice.
          </p>
          <p>
            What now? Do I move forward? Do I forgive and forget? Or do I carry
            these truths with me, like quiet weapons, ready to make sure no one
            else suffers the way I did?
          </p>
          <p>
            <em>
              Maybe it’s not about ending well at all. Maybe it’s about starting
              over. This time, on your own terms.
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

export default Blog14;
