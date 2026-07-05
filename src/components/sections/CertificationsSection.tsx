import { motion } from "framer-motion";
import { CERTIFICATION_GROUPS } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section className="certifications-section" aria-labelledby="certifications-heading">
      <div className="certifications-section__inner">
        <motion.header
          className="certifications-section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="certifications-section__eyebrow">Credentials</p>
          <h2 id="certifications-heading" className="certifications-section__title">
            Certifications &amp; Accreditations
          </h2>
          <p className="certifications-section__subtitle">
            Industry-recognized qualifications across structured cabling, access control,
            and life-safety systems — validating our engineering standards in the field.
          </p>
        </motion.header>

        <ul className="certifications-section__grid">
          {CERTIFICATION_GROUPS.map((group, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.li
                key={group.id}
                className="certifications-section__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article className="certifications-section__card">
                  <div className="certifications-section__card-head">
                    <span className="certifications-section__index" aria-hidden>
                      {number}/
                    </span>
                    <h3 className="certifications-section__provider">{group.provider}</h3>
                  </div>

                  <ul className="certifications-section__list">
                    {group.items.map((item) => (
                      <li key={item} className="certifications-section__list-item">
                        <span className="certifications-section__bullet" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
