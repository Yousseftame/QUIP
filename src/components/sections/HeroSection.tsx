import { useRef, useState } from "react";
import HeroMenu from "./HeroMenu";
import HeroNav from "./HeroNav";
import HeroShape from "./HeroShape";
import HeroShapeGrid from "./HeroShapeGrid";
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  return (
    <section className="hero-screen bg-[#FF5949] text-[#0C0B11]">
      <div className="hero-wrp h-full">
        <div className="hero-layout h-full">
          <div className="hero-left">
            <div className="hero-left-inner">
              <div ref={logoRef} className="hero-brand">
                <a href="/" aria-label="QUIP home">
                  <img
                    src="/quip-branding-07.png"
                    alt="QUIP"
                    className="hero-brand-logo"
                    width={1368}
                    height={447}
                  />
                </a>
              </div>

              <h1 className="hero-title">
                Next-Gen
                <br />
                Engineering
              </h1>

              <p className="hero-claim">
                Innovation and precision for the future of general contracting.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-main">
              <HeroNav onMenuOpen={() => setMenuOpen(true)} />

              <div className="hero-tags">
                <div className="hero-tags-cell">
                  <span className="hero-tag-name">SYSTEM</span>
                </div>
                <div className="hero-tags-cell">
                  <span className="hero-tag-data">EST. 2026</span>
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

      <HeroMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
