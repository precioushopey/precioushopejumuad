import { LuExternalLink } from "react-icons/lu";
import { BlogPostLayout } from "../components/BlogPostLayout";

const Blog16 = () => {
  return (
    <BlogPostLayout>
      <section className="hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:left] animate-fade-in-delay-1">
        <p>
          I passed the Civil Service Professional Examination! But here’s the
          part I can’t stop thinking about: I was only one or two items away
          from hitting my personal goal of a 90% rating. After 10 weeks of
          building my own syllabus, creating a study plan, scheduling my time,
          and reviewing every subject area without skipping anything… I ended
          with 89.72%, a familiar kind of “almost,” reaching for an elusive
          prize that’s almost within reach, yet still slips away. But what that
          near-miss taught me changed everything. Sometimes the “almost” has
          more to say than the win.
        </p>
      </section>

      <div className="tracking-normal hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:left] space-y-6">
        <section className="space-y-6 animate-fade-in-delay-2">
          <figure className="space-y-3 text-center [text-align-last:center]">
            <img
              src="/assets/images/blog/csc1.png"
              alt="Immaculate Conception Parish Church of Jasaan"
              className="w-full aspect-[600/228] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 1 - Screenshot of Civil Service Professional Exam Pen and
              Paper Test Exam Result from the Civil Service Commission Website
            </figcaption>
          </figure>
          <article className="space-y-3">
            <p>
              <strong>
                I’m grateful and proud to share that I passed the Civil Service
                Professional Examination.
              </strong>
            </p>
            <p>
              This wasn’t something I took lightly. While many people have
              stories like <i>“I didn’t study”</i> or{" "}
              <i>“I barely slept but still passed,”</i> my journey looked very
              different. I prepared for this exam with intention and structure,
              the same way I’ve always approached my academics.
            </p>
            <ul>
              For 10 weeks, I locked in:
              <li>- I created a study plan.</li>
              <li>- I built my own syllabus.</li>
              <li>- I scheduled my time.</li>
              <li>
                - And I reviewed every subject area thoroughly, making sure I
                didn’t skip anything.
              </li>
            </ul>
            <p>
              I wanted to step into the exam room steady, confident, and fully
              prepared.
            </p>
            <p>
              And the results reflected that effort: <b>91, 90, and 89</b>{" "}
              across the major subject areas, a general rating of <b>89.72%!</b>{" "}
              Above average, consistent, and close, just as I hoped.
            </p>
          </article>
        </section>

        <section className="space-y-6 animate-fade-in-delay-3">
          <figure className="space-y-3 text-center [text-align-last:center]">
            <img
              src="/assets/images/blog/csc2.png"
              alt="Immaculate Conception Parish Church of Jasaan"
              className="w-full aspect-[600/304] rounded-4xl border object-cover"
            />
            <figcaption>
              Fig. 2 - Screenshot of Civil Service Professional Exam Pen and
              Paper Test Exam Rating Result from the Online Career Service
              Examination Result Generation System (OCSERGS) Website
            </figcaption>
          </figure>
          <article className="space-y-3">
            <p>
              However, I fell a little short of my personal target of a 90%
              general rating. I was only one or two items away from hitting that
              goal. It’s a familiar kind of <i>“almost,”</i> something I’ve felt
              throughout my college years; reaching for an elusive prize that’s
              almost within reach, yet still slips away.
            </p>
            <p>
              But this time, I chose not to be bitter about it. And with that
              shift in mindset, it didn’t feel like failure anymore, just quiet
              relief that I aimed high and came close… incredibly close. But
              next time, I’ll aim even higher.
            </p>
            <p>
              Despite not hitting that exact number, I’m genuinely proud. I'm
              not being ungrateful because passing an exam with a low national
              passing rate is already very meaningful to my family and me. To be
              part of the <b>45,730 passers (just 15.14%)</b> is an achievement
              I don’t take for granted.
            </p>
            <p>
              I’m not entirely sure yet how I’ll use this eligibility, but the
              value of this milestone goes beyond its practical purpose. It’s a
              reminder of what intentional effort can become. When I commit to
              something and give it structure, clarity, and consistency, I can
              rise to meet the challenge.
            </p>
            <p>
              This is a late post, but I hope you take something from this
              reflection. Sometimes we fall just short of a goal, not because
              we’re lacking, but because we’re growing. And every “almost” is
              proof that we’re getting closer, just one step, one effort, one
              brave attempt at a time.
            </p>
          </article>
        </section>

        <section className="flex justify-center border-t-2 gap-2 pt-6 clear-both">
          <p>See results here:</p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1oi6Jd25WEKXa75Uw8pYFApkID7VLhnYY/view?usp=sharing"
            className="hover:underline"
          >
            <p>CSE Professional Region 10 List of Passers</p>
          </a>
          <LuExternalLink size={20} />
        </section>
      </div>
    </BlogPostLayout>
  );
};

export default Blog16;
