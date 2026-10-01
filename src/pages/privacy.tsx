import { LuShieldCheck } from "react-icons/lu";
import { WindowBar } from "../components/WindowBar";
import { PRIVACY_UPDATED, privacySections } from "../data/legal";

// The privacy policy, as a plain-text document window.
const PrivacyPage = () => (
  <div className="space-y-6 p-0 lg:p-6">
    <header className="animate-fade-in text-center lg:space-y-3 lg:text-left">
      <h1 className="text-xl font-medium max-lg:sr-only sm:text-2xl">
        Privacy Policy
      </h1>
      <p className="text-xs text-cream/70">Last updated {PRIVACY_UPDATED}</p>
    </header>

    <article className="glass-card overflow-hidden">
      <WindowBar
        icon={<LuShieldCheck size={14} />}
        title="privacy-policy.txt"
      />
      <div className="space-y-6 px-6 py-6 text-left text-sm leading-6">
        {privacySections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="text-base font-semibold">{section.heading}</h2>
            {section.paragraphs?.map((text) => (
              <p key={text} className="text-cream/80">
                {text}
              </p>
            ))}
            {section.list && (
              <ul className="ml-6 list-disc space-y-1 text-cream/80">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  </div>
);

export default PrivacyPage;
