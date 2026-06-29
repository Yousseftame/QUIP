import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <p className="site-footer__brand">
          QUIP<span className="site-footer__mark" aria-hidden>
            ®
          </span>
        </p>
      </div>

      <div className="site-footer__bar">
        <div className="site-footer__bar-grid">
          <span className="site-footer__bar-item">©2021 QUIP</span>
          <Link to="/terms" className="site-footer__bar-item site-footer__bar-link">
            Terms and conditions
          </Link>
          <Link to="/privacy" className="site-footer__bar-item site-footer__bar-link">
            Privacy policy
          </Link>
          <span className="site-footer__bar-item site-footer__bar-item--end">
          QUIP by Digital Studio 
          </span>
        </div>
      </div>
    </footer>
  );
}
