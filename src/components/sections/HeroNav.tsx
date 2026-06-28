import { useState } from "react";
import { motion } from "framer-motion";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="hero-nav-menu-plus"
      fill="none"
      aria-hidden
    >
      <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ContactArrow() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="hero-nav-contact-arrow h-3 w-3 shrink-0"
      aria-hidden
    >
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

type HeroNavProps = {
  onMenuOpen: () => void;
};

export default function HeroNav({ onMenuOpen }: HeroNavProps) {
  const [menuHovered, setMenuHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  return (
    <div className="hero-nav">
      <div className="hero-nav-actions">
        <motion.button
          type="button"
          onClick={onMenuOpen}
          className="hero-nav-menu"
          onHoverStart={() => setMenuHovered(true)}
          onHoverEnd={() => setMenuHovered(false)}
        >
          <span className="hero-nav-menu-label">
            <TextRoll useParentHover center animate={menuHovered ? "hovered" : "initial"}>
              Menu
            </TextRoll>
          </span>
          <span className="hero-nav-menu-icon">
            <MenuIcon />
          </span>
        </motion.button>

        <motion.a
          href="#contact"
          className="hero-nav-contact"
          onHoverStart={() => setContactHovered(true)}
          onHoverEnd={() => setContactHovered(false)}
        >
          <span className="hero-nav-contact-label">
            <TextRoll useParentHover center animate={contactHovered ? "hovered" : "initial"}>
              Contact
            </TextRoll>
          </span>
          <span className="hero-nav-contact-icon">
            <ContactArrow />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
