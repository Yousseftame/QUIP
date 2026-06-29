import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import HeroMenu from "./HeroMenu";
import HeroNav from "./HeroNav";
import HeroShape from "./HeroShape";
import HeroShapeGrid from "./HeroShapeGrid";
import { ContactModal } from "@/components/ui/ContactModal";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { useSplashDone } from "@/components/splash/splash-context";

const HERO_TITLE_LINES = ["Next-Gen", "Engineering"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const splashDone = useSplashDone();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show the floating nav after scrolling down 80vh
    if (latest > (typeof window !== "undefined" ? window.innerHeight * 0.8 : 800)) {
      setShowFloatingNav(true);
    } else {
      setShowFloatingNav(false);
    }
  });

  return (
    <section className="hero-screen bg-[#FF5949] text-[#0C0B11]">
      <div className="hero-wrp h-full">
        <div className="hero-layout h-full">
          <div className="hero-left">
            <div className="hero-left-inner">
              <div className="hero-left-top">
                <div ref={logoRef} className="hero-brand">
                  <Link to="/" aria-label="QUIP home">
                    <img
                      src="/quip-branding-07.png"
                      alt="QUIP"
                      className="hero-brand-logo"
                      width={1368}
                      height={447}
                    />
                  </Link>
                </div>

                <h1 className="hero-title">
                  {HERO_TITLE_LINES.map((line, index) => (
                    <DiaTextReveal
                      key={line}
                      text={line}
                      textColor="#0c0b11"
                      colors={["#0c0b11"]}
                      className="hero-title__line"
                      duration={1.15}
                      delay={index * 0.12}
                      startOnView={false}
                      play={splashDone}
                      once
                    />
                  ))}
                </h1>
              </div>

              <div className="hero-services">
                <motion.div
                  className="hero-services__line"
                  initial={{ width: 0 }}
                  animate={splashDone ? { width: "85%" } : { width: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
                <ul className="hero-services__list">
                  {[
                    "ICT infrastructure",
                    "Software",
                    "Finishing & Construction",
                  ].map((service, index) => (
                    <li key={service} className="hero-services__item">
                      <motion.span
                        className="hero-services__bullet"
                        aria-hidden
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          splashDone
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.15,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                      <DiaTextReveal
                        text={service}
                        textColor="#0c0b11"
                        colors={["#0c0b11"]}
                        className="hero-services__text"
                        duration={1}
                        delay={0.6 + index * 0.15}
                        startOnView={false}
                        play={splashDone}
                        once
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <p className="hero-claim">
                <span className="hero-claim__line">
                  Innovation and precision for the
                </span>
                <span className="hero-claim__line">
                  future of integrated solutions.
                </span>
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-main">
              <HeroNav 
                onMenuOpen={() => setMenuOpen(true)} 
                onContactOpen={() => setContactModalOpen(true)} 
              />

              <div className="hero-tags">
                <div className="hero-tags-cell">
                  <span className="hero-tag-name">SYSTEM</span>
                </div>
                <div className="hero-tags-cell">
                  <span className="hero-tag-data">EST. 1990</span>
                </div>
              </div>

              <div className="hero-shape-area">
                <div className="hero-shape-frame">
                  <HeroShapeGrid columns={5} rows={5} />
                  <HeroShape logoRef={logoRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroMenu 
        open={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onContactOpen={() => setContactModalOpen(true)}
      />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      {/* Floating Menu Button */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.button
            type="button"
            className="fixed top-8 right-8 z-[35] flex items-center justify-center w-12 h-12 bg-[#0c0b11] text-[#f5f3ee] rounded-full shadow-lg border border-white/10 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
