import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import redSectionVideo from "@/assets/redsection.mp4";

const HEADING_LINES = [
  "Innovation & General\u00A0Contracting —",
  "unifying ICT infrastructure, software systems, finishing, construction,",
  "and MEP coordination for the Middle East's leading\u00A0enterprises.",
];

const BODY_COPY =
  "Quip connects ICT infrastructure, software systems, and construction execution within a single, accountable framework. By unifying design, procurement, and delivery under one team, we eliminate gaps between disciplines — reducing risk, controlling costs, and ensuring every project closes exactly as planned.";

export default function RedSection() {
  return (
    <section className="red-section">
      <div className="red-section__grid">
        <div className="red-section__content">
          <h2 className="red-section__heading">
            {HEADING_LINES.map((line, index) => (
              <DiaTextReveal
                key={line}
                text={line}
                textColor="#FF5949"
                colors={["#FF5949"]}
                className="red-section__heading-line"
                duration={1.15}
                delay={0.12 + index * 0.16}
                startOnView
                once
              />
            ))}
          </h2>

          <p className="red-section__body">{BODY_COPY}</p>
        </div>

        <div className="red-section__media">
          <video
            className="red-section__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={redSectionVideo}
          />
        </div>
      </div>
    </section>
  );
}
