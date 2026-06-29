import { memo } from "react";

const TICKER_ITEMS = [
  "Network",
  "Security",
  "Cabling",
  "Data Center",
  "Wireless",
  "AV Integration",
];

function TickerSegment({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <div className="work-gallery-ticker__segment" aria-hidden={ariaHidden}>
      {TICKER_ITEMS.map((item, index) => (
        <span key={`${item}-${index}`} className="work-gallery-ticker__group">
          <span
            className={
              index % 2 === 0
                ? "work-gallery-ticker__word work-gallery-ticker__word--fill"
                : "work-gallery-ticker__word work-gallery-ticker__word--accent"
            }
          >
            {item}
          </span>
          <span className="work-gallery-ticker__divider" aria-hidden />
        </span>
      ))}
    </div>
  );
}

function WorkGalleryTicker() {
  return (
    <div className="work-gallery-ticker" aria-hidden>
      <div className="work-gallery-ticker__accent" />

      <div className="work-gallery-ticker__shell">
        <div className="work-gallery-ticker__label-col">
          <span className="work-gallery-ticker__label">Capabilities</span>
        </div>

        <div className="work-gallery-ticker__viewport">
          <div className="work-gallery-ticker__fade work-gallery-ticker__fade--left" />
          <div className="work-gallery-ticker__fade work-gallery-ticker__fade--right" />

          <div className="work-gallery-ticker__track">
            <TickerSegment />
            <TickerSegment aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WorkGalleryTicker);
