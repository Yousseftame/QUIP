import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import quipBranding01 from "@/assets/quip-branding-01.png";
import HeroMenu from "@/components/sections/HeroMenu";
import { ContactModal } from "@/components/ui/ContactModal";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import { PARTNER_SECTIONS } from "@/data/client-logos";
import FooterSection from "@/components/sections/FooterSection";

const STORY_HEADING = ["30 years of accountable", "engineering."];

const STORY_LEAD =
  "Quip began in 1990 in light current, networks, and security systems. Today it stands as one of the Middle East's leading multidisciplinary firms — a specialist in general contracting, communications, and information technology.";

const STORY_EXPAND =
  "Expanding into premium finishing and general contracting, and now delivering purpose-built software platforms and AI-powered transformation across government, energy, banking, technology, automotive, pharmaceutical, and real estate.";

const PILLARS = [
  {
    title: "Engineering Accountability",
    body:
      "We deliver on what we commit to. Every scope, every timeline, every client relationship.",
  },
  {
    title: "Client-Centric",
    body:
      "We collaborate closely across design and development, making your goals and aspirations our mission.",
  },
  {
    title: "Integrated Delivery",
    body:
      "Three disciplines, one partner. We solve problems others can't because we don't hand off between firms.",
  },
  {
    title: "AI-Powered Transformation",
    body:
      "We help businesses scale and automate their operations through intelligent, tailored digital solutions.",
  },
];

export default function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="bg-[#0C0B11] text-[#f5f3ee] min-h-screen font-sans">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 w-full z-30 px-8 py-6 flex justify-between items-center">
        <Link to="/" aria-label="QUIP home">
          <img
            src="/quip-branding-07.png"
            alt="QUIP"
            className="h-7 md:h-10 w-auto brightness-0 invert"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 text-[#f5f3ee] hover:opacity-70 transition-opacity cursor-pointer"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-24 md:pt-0 md:min-h-screen flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-8 overflow-hidden">
        {/* Full-bleed image with heavy dark overlay */}
        <div className="absolute inset-0">
          <img
            src={quipBranding01}
            alt="QUIP"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B11] via-[#0C0B11]/70 to-transparent" />
        </div>

        {/* Subtle year tag — bottom left corner only */}
        <span
          className="absolute bottom-24 left-8 text-[10px] uppercase tracking-[0.3em] text-white/20 select-none pointer-events-none font-semibold"
          aria-hidden
        >
          Est. 1990
        </span>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Year tag */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8 border border-[#FF5949]/40 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5949] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#FF5949] font-semibold">Est. 1990 · Middle East</span>
          </motion.div>

          <h1 className="about-hero-title font-heading mb-6 md:mb-8">
            <DiaTextReveal
              text="Driving"
              textColor="#f5f3ee"
              colors={["#f5f3ee"]}
              className="about-hero-title__line"
              duration={1.2}
              delay={0.1}
              startOnView
              once
            />
            <DiaTextReveal
              text="Innovation"
              textColor="#FF5949"
              colors={["#FF5949"]}
              className="about-hero-title__line"
              duration={1.2}
              delay={0.3}
              startOnView
              once
            />
            <DiaTextReveal
              text="Across Borders"
              textColor="#f5f3ee"
              colors={["#f5f3ee"]}
              className="about-hero-title__line"
              duration={1.2}
              delay={0.5}
              startOnView
              once
            />
          </h1>

          <motion.p
            className="text-base md:text-lg text-white/50 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            From ICT infrastructure and intelligent software to finishing and
            general contracting — QUIP unifies three disciplines under one
            accountable partner across the Middle East for over 30 years.
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 right-8 flex flex-col items-center gap-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#f5f3ee]" />
          <span className="text-[10px] uppercase tracking-widest rotate-90 origin-center translate-y-4">Scroll</span>
        </motion.div>
      </section>

      {/* ── Story Section ── */}
      <section className="relative bg-[#0C0B11] overflow-hidden">

        <div className="max-w-7xl mx-auto px-8 pt-28 pb-0 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">

          {/* Left: Sticky image column */}
          <div className="relative lg:pr-16 pb-20">
            <motion.div
              className="sticky top-28"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {/* Main image — fully visible, no crop */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1a1060] flex items-center justify-center p-6">
                <img
                  src={quipBranding01}
                  alt="QUIP Branding"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Floating badge — dark purple matching the image bg */}
              <motion.div
                className="absolute -bottom-6 -right-4 bg-[#1a1060] text-white rounded-2xl px-6 py-4 shadow-2xl border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-black font-heading leading-none">30+</div>
                <div className="text-xs uppercase tracking-widest font-semibold mt-1 opacity-60">Yrs of Excellence</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px bg-white/10 mx-8" />

          {/* Right: Content column */}
          <div className="lg:pl-16 pb-28 flex flex-col justify-center gap-16">

            {/* Est. block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                {STORY_HEADING[0]}{" "}
                <span className="text-[#FF5949]">{STORY_HEADING[1]}</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                {STORY_LEAD}
              </p>
            </motion.div>

            {/* Mid block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="border-l-2 border-[#FF5949] pl-6"
            >
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                {STORY_EXPAND}
              </p>
            </motion.div>

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">What We Do</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PILLARS.map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-white/8 hover:border-[#FF5949]/40 hover:bg-[#FF5949]/5 transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF5949] shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/55 group-hover:text-white/70 transition-colors leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CertificationsSection />

      {PARTNER_SECTIONS.map((section) => (
        <ClientLogosSection key={section.id} {...section} />
      ))}

      <section className="bg-[#f5f3ee] py-16 overflow-hidden relative">
        {/* Scrolling ticker */}
        <div className="absolute inset-0 flex items-center opacity-[0.06] pointer-events-none select-none overflow-hidden">
          <div className="about-marquee-track whitespace-nowrap text-[10rem] font-black font-heading text-[#0C0B11] leading-none tracking-tighter">
            <span>QUIP · INNOVATION · CONTRACTING · ENGINEERING ·&nbsp;</span>
            <span>QUIP · INNOVATION · CONTRACTING · ENGINEERING ·&nbsp;</span>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <p className="text-[#0C0B11] text-2xl md:text-4xl font-heading font-bold max-w-3xl leading-tight">
            One company. One standard of excellence. Across ICT, Software & Construction.
          </p>
        </div>
      </section>

      <FooterSection />

      {/* ── Menu & Modals ── */}
      <HeroMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onContactOpen={() => {
          setMenuOpen(false);
          setContactModalOpen(true);
        }}
      />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      {/* No floating button — fixed header handles nav on this page */}
    </div>
  );
}
