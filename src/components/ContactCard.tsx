import { ContactForm } from "./ContactForm";

// The "Send a Message" form as a card in the right-hand column, styled like the other panel cards.
export const ContactCard = () => (
  <section aria-label="Send a message" className="glass-card space-y-2 p-4">
    <ContactForm heading="h2" variant="card" />
  </section>
);
