import { useState } from "react";
import { Plus, Minus, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

type HeroMenuProps = {
  open: boolean;
  onClose: () => void;
  onContactOpen: () => void;
};

const NAV_LINKS = [
  { id: "about", label: "About Us", href: "/about" },
  { 
    id: "projects",
    label: "Projects", 
    expandable: true,
    subLinks: [
      { id: "ict", label: "ICT infrastructure", href: "/projects/ict" },
      { id: "software", label: "Software", href: "/projects/software" },
      { id: "finishing", label: "Finishing & Construction", href: "/projects/finishing" }
    ]
  },
  { id: "contact", label: "Contact Us", isContact: true },
];

const SECONDARY_LINKS = [
  { label: "Innovation" },
  { label: "Engineering" },
  { label: "Contracting" },
  { label: "FAQs" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quip-innovation-and-general-contracting/about/" },
  { label: "Instagram", href: "https://www.instagram.com/quipinnovations/" },
  { label: "Facebook", href: "https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&asset_id=215128338865830" },
];

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HeroMenu({ open, onClose, onContactOpen }: HeroMenuProps) {
  const [projectsExpanded, setProjectsExpanded] = useState(false);

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
              <Link to="/" className="hero-menu-logo" onClick={onClose} aria-label="QUIP home">
                <img
                  src="/quip-branding-07.png"
                  alt="QUIP"
                  className="hero-menu-logo-img"
                  width={1368}
                  height={447}
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="hero-menu-close"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <nav className="hero-menu-nav flex flex-1 flex-col overflow-y-auto">
              <ul className="hero-menu-primary">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                  >
                    {link.isContact ? (
                      <button 
                        className="hero-menu-link w-full text-left" 
                        onClick={() => {
                          onClose();
                          onContactOpen();
                        }}
                      >
                        <span>{link.label}</span>
                      </button>
                    ) : link.expandable ? (
                      <div className="flex flex-col">
                        <button 
                          className="hero-menu-link w-full text-left flex justify-between items-center" 
                          onClick={() => setProjectsExpanded(!projectsExpanded)}
                        >
                          <span>{link.label}</span>
                          {projectsExpanded ? (
                            <Minus size={20} strokeWidth={2.5} className="shrink-0" aria-hidden />
                          ) : (
                            <Plus size={20} strokeWidth={2.5} className="shrink-0" aria-hidden />
                          )}
                        </button>
                        <AnimatePresence>
                          {projectsExpanded && (
                            <motion.ul 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 mt-2 flex flex-col gap-3"
                            >
                              {link.subLinks?.map((sub) => (
                                <li key={sub.id}>
                                  <Link 
                                    to={sub.href} 
                                    className="text-[1.125rem] text-[#0C0B11]/70 hover:text-[#FF5949] transition-colors"
                                    onClick={onClose}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : "href" in link && link.href ? (
                      <Link to={link.href} onClick={onClose} className="hero-menu-link">
                        <span>{link.label}</span>
                      </Link>
                    ) : null}
                  </motion.li>
                ))}
              </ul>

              <div className="hero-menu-footer mt-auto">
                <ul className="hero-menu-secondary">
                  {SECONDARY_LINKS.map((link, i) => (
                    <motion.li
                      key={link.label}
                      custom={i + NAV_LINKS.length}
                      initial="hidden"
                      animate="visible"
                      variants={linkVariants}
                    >
                      <span className="hero-menu-secondary-link cursor-default opacity-50">
                        {link.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="hero-menu-footer-right flex flex-col items-end gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-menu-secondary-link text-right"
                      onClick={onClose}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
