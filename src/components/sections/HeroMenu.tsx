import { Plus, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type HeroMenuProps = {
  open: boolean;
  onClose: () => void;
};

const NAV_LINKS = [
  { label: "Approach", href: "#approach", expandable: false },
  { label: "Solutions", href: "#solutions", expandable: true },
  { label: "Company", href: "#company", expandable: false },
  { label: "Projects", href: "#projects", expandable: false },
  { label: "Contact", href: "#contact", expandable: false },
];

const SECONDARY_LINKS = [
  { label: "Innovation", href: "#innovation" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contracting", href: "#contracting" },
  { label: "FAQs", href: "#faqs" },
];

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HeroMenu({ open, onClose }: HeroMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="hero-menu-backdrop fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.aside
            className="hero-menu-panel fixed top-0 right-0 z-50 flex h-full w-full max-w-[31rem] flex-col bg-white text-[#0C0B11]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 34 }}
          >
            <div className="hero-menu-header">
              <a href="/" className="hero-menu-logo" onClick={onClose} aria-label="QUIP home">
                <img
                  src="/quip-branding-07.png"
                  alt="QUIP"
                  className="hero-menu-logo-img"
                  width={1368}
                  height={447}
                />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="hero-menu-close"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <nav className="hero-menu-nav flex flex-1 flex-col">
              <ul className="hero-menu-primary">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                  >
                    <a href={link.href} onClick={onClose} className="hero-menu-link">
                      <span>{link.label}</span>
                      {link.expandable && (
                        <Plus size={20} strokeWidth={2.5} className="shrink-0" aria-hidden />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="hero-menu-footer">
                <ul className="hero-menu-secondary">
                  {SECONDARY_LINKS.map((link, i) => (
                    <motion.li
                      key={link.label}
                      custom={i + NAV_LINKS.length}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants}
                    >
                      <a href={link.href} onClick={onClose} className="hero-menu-secondary-link">
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="hero-menu-footer-right">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-menu-secondary-link"
                    onClick={onClose}
                  >
                    LinkedIn
                  </a>
                  <div className="hero-menu-lang" aria-label="Language">
                    <button type="button" className="hero-menu-lang-btn">
                      ES
                    </button>
                    <span className="hero-menu-lang-divider" aria-hidden>
                      |
                    </span>
                    <button type="button" className="hero-menu-lang-btn hero-menu-lang-btn--active">
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
