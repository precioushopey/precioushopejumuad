import { FormEvent, useState } from "react";
import { useToast } from "../hooks/use-toast";
import { MdOutlineEmail, MdOutlineSend } from "react-icons/md";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-8">
      <div className="container mx-auto max-w-5xl space-y-4">
        <h2 className="relative -ml-24 sm:-ml-30 font-noto text-3xl sm:text-4xl font-bold text-center text-glow">
          Get In
          <span className="absolute top-1 -ml-3 pinyon-script text-5xl sm:text-6xl">
            Touch
          </span>
        </h2>

        <p className="text-center mb-8 max-w-2xl mx-auto pt-2">
          Got a project in mind or something you’d like to team up on? I’d love
          to hear about it—feel free to reach out anytime!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="place-items-center">
              <img
                src="/assets/images/contact.png"
                alt="Precious Hope T. Jumuad"
                width={250}
                className="opacity-0 animate-fade-in"
              />
            </div>

            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <a
                  href="mailto:jumuad.precious@gmail.com"
                  target="_blank"
                  className="card-hover bg-white rounded-full p-2"
                >
                  <MdOutlineEmail
                    size={20}
                    className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                  />
                </a>
                <div className="place-items-start">
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:jumuad.precious@gmail.com" target="_blank">
                    jumuad.precious@gmail
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/precioushopejumuad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover bg-white rounded-full p-2"
                >
                  <FiLinkedin
                    size={20}
                    className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                  />
                </a>
                <div className="place-items-start">
                  <h4 className="font-medium">LinkedIn</h4>
                  <p>in/precioushopejumuad</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a
                  href="https://www.facebook.com/precioushope.jumuad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover bg-white rounded-full p-2"
                >
                  <FiFacebook
                    size={20}
                    className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                  />
                </a>
                <div className="place-items-start">
                  <h4 className="font-medium">Facebook</h4>
                  <p>precioushope.jumuad</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <a
                  href="https://www.instagram.com/yourprecioushope/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover bg-white rounded-full p-2"
                >
                  <FiInstagram
                    size={20}
                    className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                  />
                </a>
                <div className="place-items-start">
                  <h4 className="font-medium">Instagram</h4>
                  <p>yourprecioushope</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs p-8 card-hover">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Precious Hope Jumuad..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="jumuad.precious@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi! Just wanted to share or talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`white-button w-full flex items-center justify-center gap-2`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <MdOutlineSend
                  size={20}
                  className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
