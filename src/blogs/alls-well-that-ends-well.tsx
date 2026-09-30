import {} from "react-icons/lu";
import { BlogPostLayout } from "../components/BlogPostLayout";

const Blog12 = () => {
  return (
    <BlogPostLayout>
      <section className="hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:left] animate-fade-in-delay-1">
        <p>
          After four years of trials and tribulations, navigating a path beyond
          my passion but fueled by purpose, I can finally say: I am an engineer!
          Read my heartfelt reflection on how college shaped not just my skills,
          but my character through people, purpose, and grace.
        </p>
      </section>

      <div className="flow-root tracking-normal hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:left] space-y-6">
        <section className="animate-fade-in-delay-2">
          <figure className="mb-4 lg:mb-2 space-y-4 lg:w-1/2 lg:float-left lg:mr-6">
            <img
              src="/assets/images/all's_well.png"
              alt="All's Well That Ends Well"
              className="w-full aspect-[1/1] rounded-4xl border object-cover"
            />
          </figure>
          <article className="space-y-4">
            <p>
              As I close the chapter of my college journey, I’ve realized that
              growth was never confined to the walls of a laboratory or the
              logic of a codebase. College gave me more than academic knowledge.
              It gave me people, purpose, and a deeper understanding of what it
              means to grow.
            </p>
            <p>
              There’s something profoundly human about the way shared struggles
              can build friendships. Whether it was long thesis nights, quiet
              support during presentations, or spontaneous laughter in between
              classes, the relationships I formed reminded me that success is
              rarely a solo pursuit. I’ll always be grateful for teammates who
              believed in the same goal, classmates who brought levity to the
              hard days, and the friends who became family.
            </p>
            <p>
              College taught me more than what was on the syllabus. Leading
              projects taught me how to organize chaos. Collaborating on
              research taught me how to listen. And even failure (especially
              failure) taught me resilience.
            </p>
          </article>
        </section>

        <section className="space-y-4 animate-fade-in-delay-3">
          <p>
            From building a multi-camera customer tracking system in our thesis
            to designing and developing web applications during my internships,
            I learned that technical growth is only half the story. The other
            half? Self-awareness, teamwork, and humility.
          </p>
        </section>

        <section className="animate-fade-in-delay-4">
          <figure className="mb-4 lg:mb-2 space-y-4 lg:w-1/2 lg:float-right lg:ml-6">
            <img
              src="/assets/images/collage.png"
              alt="All's Well That Ends Well"
              className="w-full aspect-[4/5] rounded-4xl border object-cover"
            />
          </figure>
          <article className="space-y-4">
            <p>
              Awards and milestones were affirming, but they weren’t what
              defined my experience. What stayed with me were the smaller
              things: helping a peer grasp a tough concept, brainstorming UI
              ideas past midnight, or simply choosing to show up even when I was
              exhausted. Growth, I’ve learned, is often quiet. It’s cumulative.
              And it rarely announces itself until you look back.
            </p>
            <p>
              To the mentors who taught and challenged me, my teammates in team
              SUBAY who trusted me, the organizations ICpEP SE - USTP, ICpEP SE
              - RX, SCEA - USTP, GDG on Campus USTP, USTP UDA, and Robogals CDO
              Asia Pacific, that gave me space to lead and learn. To my FAKULTO
              friends who reminded me to laugh and rest, to my parents and
              family who anchored me through it all, and above all, to God, for
              His grace, strength, and perfect timing. Thank you! You’ve taught
              me to be more intentional, more collaborative, and more empathetic
              in life.
            </p>
          </article>
        </section>

        <section className="space-y-4 animate-fade-in-delay-4">
          <p>
            Now, as I move forward, I carry not just technical skills but
            stories of grit, of grace, and of genuine connection. If there’s one
            thing college taught me, it’s that growth is not a sprint but a
            process. And in that process, people matter just as much as the
            product.
          </p>
          <p>
            To anyone navigating their path, whether you're just starting or
            nearly at the finish line, remember that the climb is lighter with
            good people beside you. May we all continue learning, connecting,
            and building something meaningful.
          </p>
        </section>
      </div>
    </BlogPostLayout>
  );
};

export default Blog12;
