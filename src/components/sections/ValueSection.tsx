import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextType from "@/components/TextType";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

const HEADING_LINES = [
  "Three service lines that guarantee",
  "quality, accountability, and results",
  "you can measure.",
];

const VALUE_ITEMS = [
  {
    id: "ict-infrastructure",
    title: "ICT Infrastructure",
    body: "Structured cabling, fiber optics and secure data-center build-outs; enterprise networks, low-current and integrated security systems: access control, CCTV, fire alarm and intrusion detection.",
    to: "/projects/ict",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Network server room with structured cabling",
  },
  {
    id: "finishing-construction",
    title: "Finishing & Construction",
    body: "Civil works, MEP coordination and premium fit-out; interior finishing and facilities management delivered to hotel-grade standards.",
    to: "/projects/finishing",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Premium interior construction and fit-out",
  },
  {
    id: "software-ai",
    title: "Software & AI Solutions",
    body: "LLMs, AI agents, NLP and predictive analytics; custom platforms, business automation, and cross-platform mobile apps.",
    to: "/projects/software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Software and AI development workspace",
  },
] as const;

function LearnMoreArrow() {
  return (
    <svg viewBox="0 0 12 12" className="value-accordion__cta-icon" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function AccordionToggle({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="value-accordion__toggle" aria-hidden>
      <span className="value-accordion__toggle-line value-accordion__toggle-line--h" />
      <span
        className={`value-accordion__toggle-line value-accordion__toggle-line--v${
          isOpen ? " value-accordion__toggle-line--hidden" : ""
        }`}
      />
    </span>
  );
}

function AccordionPanel({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const measure = () => {
      setHeight(isOpen ? content.scrollHeight : 0);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(content);

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <motion.div
      className="value-accordion__panel-wrap"
      initial={false}
      animate={{ height }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    >
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}

function ValueAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof VALUE_ITEMS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={`value-accordion__item${isOpen ? " value-accordion__item--open" : ""}`}>
      <button
        type="button"
        className="value-accordion__trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="value-accordion__title">
          <TextType
            text={item.title}
            as="span"
            loop={false}
            showCursor={false}
            startOnVisible
            typingSpeed={52}
            initialDelay={index * 280}
          />
        </span>
        <AccordionToggle isOpen={isOpen} />
      </button>

      <AccordionPanel isOpen={isOpen}>
        <motion.div
          className="value-accordion__panel"
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{
            duration: 0.4,
            delay: isOpen ? 0.08 : 0,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="value-accordion__panel-copy">
            <p className="value-accordion__body">{item.body}</p>
            <Link to={item.to} className="value-accordion__cta">
              <span className="value-accordion__cta-label">Learn more</span>
              <span className="value-accordion__cta-icon-wrap">
                <LearnMoreArrow />
              </span>
            </Link>
          </div>

          <div className="value-accordion__panel-media">
            <img
              src={item.image}
              alt={item.imageAlt}
              className="value-accordion__image"
              loading="lazy"
            />
          </div>
        </motion.div>
      </AccordionPanel>
    </article>
  );
}

export default function ValueSection() {
  const [activeId, setActiveId] = useState<string>(VALUE_ITEMS[0].id);

  return (
    <section className="value-section" id="value">
      <div className="value-section__grid">
        <div className="value-section__left">
          <div className="value-section__head">
            <span className="value-section__label">What we offer</span>
            <span className="value-section__marker" aria-hidden />
          </div>

          <div className="value-section__heading-wrap">
            <h2 className="value-section__heading">
              {HEADING_LINES.map((line, index) => (
                <DiaTextReveal
                  key={line}
                  text={line}
                  textColor="#0c0b11"
                  colors={["#0c0b11"]}
                  className="value-section__heading-line"
                  duration={1.1}
                  delay={0.1 + index * 0.14}
                  startOnView
                  once
                />
              ))}
            </h2>
          </div>
        </div>

        <div className="value-section__right">
          <div className="value-accordion">
            {VALUE_ITEMS.map((item, index) => (
              <ValueAccordionItem
                key={item.id}
                item={item}
                index={index}
                isOpen={activeId === item.id}
                onToggle={() => setActiveId(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
