import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_ITEMS = [
  {
    id: "phone",
    label: "Phone",
    value: "+20 155 216 1814",
    href: "tel:+201552161814",
  },
  {
    id: "email",
    label: "Email",
    value: "contact@quipegy.com",
    href: "mailto:contact@quipegy.com",
  },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="contact-modal__root">
          {/* Backdrop */}
          <motion.div
            className="contact-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={onClose}
          />

          {/* Modal wrapper — handles centering without conflicting transforms */}
          <div className="contact-modal__wrapper">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contact information"
              className="contact-modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left dark panel */}
              <div className="contact-modal__panel-left">
                <span className="contact-modal__brand">QUIP</span>
                <p className="contact-modal__tagline">
                  Three decades of engineering excellence.
                </p>
              </div>

              {/* Right content panel */}
              <div className="contact-modal__panel-right">
                {/* Header */}
                <div className="contact-modal__header">
                  <div>
                    <span className="contact-modal__eyebrow">Get in touch</span>
                    <h2 className="contact-modal__title">Reach out to us</h2>
                  </div>
                  <button
                    className="contact-modal__close"
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Contact items */}
                <div className="contact-modal__items">
                  {CONTACT_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className="contact-modal__item"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="contact-modal__item-label">
                        {item.label}
                      </span>
                      <span className="contact-modal__item-value">
                        {item.value}
                      </span>
                      <span className="contact-modal__item-arrow" aria-hidden>
                        <svg
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          width="10"
                          height="10"
                        >
                          <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
                        </svg>
                      </span>
                    </motion.a>
                  ))}
                </div>

                <p className="contact-modal__note">
                  © Copyright 2021 - 2026 | QUIP by Digital Studio | All Rights
                  Reserved
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
