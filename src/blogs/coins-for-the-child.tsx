import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Blog10 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header className="space-y-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-x-2">
            <h1 className="font-noto text-3xl sm:text-4xl font-bold text-glow">
              Coins for
            </h1>
            <h2 className="pinyon-script text-4xl sm:text-5xl font-bold text-glow">
              the Child
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
              <time dateTime="2025-08-02">August 2, 2025</time>
            </p>
          </div>
        </div>
        <section className="animate-fade-in-delay-1">
          <p>
            <em>“Coins for the Child”</em> is a nostalgic reflection on my
            father’s childhood labor and the healing joy he finds in continuing
            that simple work as an adult. The coins he earns today bring the
            same joy to the child within him, reminding him, and us, that some
            treasures are timeless. This piece was written for{" "}
            <b>
              The Trailblazer Publication’s Reflections Folio 2025, themed “A
              Toy’s Story”
            </b>
            , which celebrates healing the inner child through memory and
            meaning.
          </p>
        </section>
      </header>

      <main className="bg-[#462317]/80 rounded-4xl backdrop-blur-xs border shadow-xs tracking-normal leading-7 p-8 space-y-6">
        <section className="flex flex-col lg:flex-row gap-6 font-noto animate-fade-in-delay-4">
          <figure className="w-full lg:w-3/5 space-y-4 text-center">
            <img
              src="/assets/images/poem.jpg"
              alt="Coins for the Child"
              className="w-full aspect-[1/1] rounded-4xl border object-cover"
            />
          </figure>
          <article className="w-full lg:w-2/5 space-y-4">
            <p>
              <div>We scaled the winding mountain’s spine,</div>
              <div>Past trees where morning stars still shine.</div>
              <div>A Sunday trip our hearts all knew,</div>
              <div>With church bells ringing soft and true.</div>
            </p>
            <p>
              <div>The road would twist, the sun would rise,</div>
              <div>In stories shared beneath open skies.</div>
              <div>My father's voice, both calm and deep,</div>
              <div>Spoke truths he'd buried long and deep.</div>
            </p>
            <p>
              <div>I asked him why, what made him stay,</div>
              <div>Though profit slipped from day to day?</div>
              <div>His vegetable stall, so modest, small,</div>
              <div>Yet still, he stood there through it all.</div>
            </p>
            <p>
              <div>
                He smiled and said, <cite>“When I was young,</cite>
              </div>
              <cite>
                <div>With calloused hands and songs unsung,</div>
                <div>I planted trees with dreams to spare,</div>
                <div>So fruit might buy what the school won’t share.</div>
              </cite>
            </p>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row justify-center gap-x-24 font-noto animate-fade-in-delay-4">
          <article className="space-y-4">
            <p>
              <cite>
                <div>At dawn I’d lift a woven sack,</div>
                <div>On thin, small shoulders, down the track</div>
                <div>Two kilometers to the town,</div>
                <div>To sell before the sun beat down.</div>
              </cite>
            </p>
            <p>
              <cite>
                <div>Each coin I earned, though barely much,</div>
                <div>It was golden in my youthful clutch.</div>
                <div>I’d hurry home with pride anew,</div>
                <div>To give my siblings something too.”</div>
              </cite>
            </p>
            <p>
              <div>He paused, then with a gleaming eye,</div>
              <div>He spoke of wealth one cannot buy,</div>
              <cite>
                <div>“This stall I tend is barely grand,</div>
                <div>But every coin that hits my hand,</div>
              </cite>
            </p>
            <p>
              <cite>
                <div>It speaks to him, the boy I was,</div>
                <div>Who found his worth in what he does.</div>
                <div>And though I wear a tie today,</div>
                <div>That child still guides me on my way.</div>
              </cite>
            </p>
            <p>
              <cite>
                <div>I still plant trees, still till the land,</div>
                <div>Still gather fruit with weathered hands.</div>
                <div>Not for the gain, nor any prize,</div>
                <div>But for the light it brings to his eyes.</div>
              </cite>
            </p>
            <p>
              <cite>
                <div>Each guava sold, each root I weigh,</div>
                <div>Takes me back to that old clay.</div>
              </cite>
            </p>
          </article>
          <article className="space-y-4">
            <p>
              <cite>
                <div>I see the child I used to be,</div>
                <div>Still running through the canopy.”</div>
              </cite>
            </p>
            <p>
              <div>So there he stands, at break of light,</div>
              <div>Amid the greens, the dust, the bite</div>
              <div>Of morning air and honest trade,</div>
              <div>Where past and present softly braid.</div>
            </p>
            <p>
              <div>His joy is not in stacks or scale,</div>
              <div>But in the echo of that trail:</div>
              <div>The rustling trees, the barefoot run,</div>
              <div>The weight of work beneath the sun.</div>
            </p>
            <p>
              <div>And as he heals, so too do I,</div>
              <div>Beneath the same provincial sky.</div>
              <div>His coins are more than his earnings stored.</div>
              <div>They mend the child he once adored.</div>
            </p>
            <p>
              <div>For every toy, each fading thread,</div>
              <div>Each whispered tale our elders said</div>
              <div>Becomes a bridge from then to now,</div>
              <div>A kiss upon a furrowed brow.</div>
            </p>
            <p>
              <div>So may we all, with heart unmasked,</div>
              <div>Recall the joy in what we've tasked.</div>
              <div>And in each humble, tender part,</div>
              <div>Find toys still beating in the heart..</div>
            </p>
          </article>
        </section>
      </main>

      <footer className="flex justify-center pt-2">
        <Link
          to="/blog"
          target="_top"
          className="w-fit flex items-center gap-x-2 white-button"
        >
          <MdOutlineKeyboardArrowLeft size={20} />
          Back to Blog
        </Link>
      </footer>
    </div>
  );
};

export default Blog10;
