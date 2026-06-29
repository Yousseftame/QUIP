import { useLenis } from "lenis/react";
import { useState } from "react";

const SHOW_AFTER = 320;

function UpArrow() {
  return (
    <svg viewBox="0 0 12 12" className="scroll-to-top__icon" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useLenis(({ scroll }) => {
    const next = scroll > SHOW_AFTER;
    setVisible((prev) => (prev === next ? prev : next));
  });

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.15 });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? " scroll-to-top--visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <UpArrow />
    </button>
  );
}
