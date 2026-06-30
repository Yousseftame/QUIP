import { motion } from "framer-motion";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import type { PartnerLogo } from "@/data/client-logos";

type ClientLogosSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  logos: PartnerLogo[];
};

export default function ClientLogosSection({
  id,
  eyebrow,
  title,
  description,
  logos,
}: ClientLogosSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section className="client-logos-section" aria-labelledby={headingId}>
      <div className="client-logos-section__inner">
        <motion.header
          className="client-logos-section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="client-logos-section__eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="client-logos-section__title">
            {title}
          </h2>
          <p className="client-logos-section__subtitle">{description}</p>
        </motion.header>

        <ul className="client-logos-section__grid">
          {logos.map((logo, index) => (
            <motion.li
              key={logo.src}
              className="client-logos-section__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.025, 0.6),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="client-logos-section__card">
                <div className="client-logos-section__logo-frame">
                  <ProgressiveImage
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logos-section__logo"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
