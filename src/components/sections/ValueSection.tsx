import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import TextType from "@/components/TextType";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import valueImage1 from "@/assets/1.avif";
import valueImage2 from "@/assets/2.avif";
import valueImage3 from "@/assets/3.avif";

const HEADING_LINES = [
  "System guarantees that ensure control,",
  "traceability and reliable on-site execution",
];

const VALUE_ITEMS = [
  {
    id: "digitalization",
    title: "Digitalization",
    body: "We connect design, engineering and production in a continuous flow. Traceability and process control from origin to assembly.",
    href: "#digitalization",
    image: valueImage1,
    imageAlt: "QR code label on metal profile",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    body: "Sustainability integrated into the method: fewer resources, less waste and cleaner execution thanks to industrialization and reduced rework on site. Impact controlled from design and manufacturing.",
    href: "#sustainability",
    image: valueImage2,
    imageAlt: "Side view of a residential building",
  },
  {
    id: "certification",
    title: "Certification",
    body: "Certified solutions to reduce technical uncertainty and facilitate regulatory compliance. Documented guarantees that provide confidence to developers, technical teams and regulatory bodies.",
    href: "#certification",
    image: valueImage3,
    imageAlt: "Woman using a tablet with a stylus",
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
            <a href={item.href} className="value-accordion__cta">
              <span className="value-accordion__cta-label">Learn more</span>
              <span className="value-accordion__cta-icon-wrap">
                <LearnMoreArrow />
              </span>
            </a>
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
            <span className="value-section__label">Value</span>
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
