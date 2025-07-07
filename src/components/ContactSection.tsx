import { FormEvent, useState } from "react";
import { useToast } from "../hooks/use-toast";
import { MdOutlineEmail, MdOutlineSend } from "react-icons/md";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

type ContactItem = {
  label: string;
  href: string;
  display: string;
  Icon: React.ElementType;
  isEmail?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    href: "mailto:jumuad.precious@gmail.com",
    display: "jumuad.precious@gmail",
    Icon: MdOutlineEmail,
    isEmail: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/precioushopejumuad/",
    display: "in/precioushopejumuad",
    Icon: FiLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/precioushope.jumuad",
    display: "precioushope.jumuad",
    Icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourprecioushope/",
    display: "yourprecioushope",
    Icon: FiInstagram,
  },
];

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
    <section
      id="contact"
      className="container mx-auto max-w-5xl space-y-4 py-20 px-8"
    >
      <div className="flex justify-center font-bold text-glow">
        <h2 className="font-noto text-3xl sm:text-4xl">Get In</h2>
        <h2 className="pinyon-script text-5xl sm:text-6xl -ml-2 sm:-ml-3">
          Touch
        </h2>
      </div>

      <p className="text-center max-w-2xl mx-auto">
        Got a project in mind or something you’d like to team up on? I’d love to
        hear about it—feel free to reach out anytime!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="place-items-center">
            <img
              src="/assets/images/contact.png"
              alt="Precious Hope T. Jumuad"
              width={250}
            />
          </div>

          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-12">
            {contactItems.map(({ label, href, display, Icon, isEmail }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:text-glow hover:scale-105 transition-transform duration-300"
              >
                <div className="card-hover bg-white rounded-full p-2">
                  <Icon
                    size={20}
                    className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                  />
                </div>

                <div className="place-items-start">
                  <h4 className="font-medium">{label}</h4>
                  {isEmail ? (
                    <a href={href} target="_blank" className="hover:underline">
                      {display}
                    </a>
                  ) : (
                    <p>{display}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover p-8 space-y-4 mt-0 sm:mt-4">
          <h3 className="text-2xl font-semibold">Send a Message</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium">
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

            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium">
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

            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
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
              className={`white-button w-full flex items-center justify-center text-base gap-x-2`}
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
    </section>
  );
};
