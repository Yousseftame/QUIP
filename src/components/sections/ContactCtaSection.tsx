import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import bgImage from "@/assets/frame_0001.webp";

const INTRO_COPY =
  "Tell us about your project and we will advise you on the fit, scope, and options of the Enerblock System®, as well as how to integrate it into your project and the most suitable level of industrialized components based on your design objectives, technical and regulatory requirements, and timelines.";

const TITLE_LINES = [
  "Build with an",
  "industrialized",
  "and digital system",
];

function ContactArrow() {
  return (
    <svg viewBox="0 0 12 12" className="contact-cta-section__btn-icon-svg" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

export default function ContactCtaSection() {
  return (
    <section className="contact-cta-section" id="contact">
      <img src={bgImage} alt="" className="contact-cta-section__bg" loading="lazy" />
      <div className="contact-cta-section__shade" aria-hidden />

      <div className="contact-cta-section__line-x" aria-hidden />
      <div className="contact-cta-section__line-y" aria-hidden />

      <div className="contact-cta-section__layout">
        <p className="contact-cta-section__intro">{INTRO_COPY}</p>

        <div className="contact-cta-section__footer">
          <h2 className="contact-cta-section__title">
            {TITLE_LINES.map((line, index) => (
              <DiaTextReveal
                key={line}
                text={line}
                textColor="#ffffff"
                colors={["#ffffff"]}
                className="contact-cta-section__title-line"
                duration={1.1}
                delay={0.1 + index * 0.14}
                startOnView
                once
              />
            ))}
          </h2>

          <a href="#contact" className="contact-cta-section__btn">
            <span className="contact-cta-section__btn-label">Contact</span>
            <span className="contact-cta-section__btn-icon">
              <ContactArrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
