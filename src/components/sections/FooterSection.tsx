import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "ICT Infrastructure", to: "/projects/ict" },
  { label: "Software", to: "/projects/software" },
  { label: "Finishing & Construction", to: "/projects/finishing" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/quip-innovation-and-general-contracting/about/",
  },
  { label: "Instagram", href: "https://www.instagram.com/quipinnovations/" },
  {
    label: "Facebook",
    href: "https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&asset_id=215128338865830",
  },
];

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="site-footer__accent" aria-hidden />

      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo-link" aria-label="QUIP home">
              <img
                src="/quip-branding-07.png"
                alt="QUIP"
                className="site-footer__logo"
                width={1368}
                height={447}
              />
            </Link>
            <p className="site-footer__tagline">
              Innovation, engineering, and contracting — delivered with one standard of
              excellence across ICT, software, and construction.
            </p>
          </div>

          <nav className="site-footer__col" aria-label="Footer navigation">
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="site-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Contact</h2>
            <ul className="site-footer__links">
              <li>
                <a href="tel:+201552161814" className="site-footer__link">
                  +20 155 216 1814
                </a>
              </li>
              <li>
                <a href="mailto:contact@quipegy.com" className="site-footer__link">
                  contact@quipegy.com
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Follow</h2>
            <ul className="site-footer__links">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link site-footer__link--external"
                  >
                    {link.label}
                    <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">© 1990 QUIP. All rights reserved.</p>
          <p className="site-footer__credit">QUIP by Digital Studio</p>
        </div>
      </div>
    </footer>
  );
}
