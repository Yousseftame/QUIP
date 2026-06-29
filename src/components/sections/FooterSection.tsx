
export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <p className="site-footer__brand">
          QUIP
          <span className="site-footer__mark" aria-hidden>
            ®
          </span>
        </p>
      </div>

      <div className="site-footer__bar">
        <div className="site-footer__bar-grid">
          <span className="site-footer__bar-item">©1990 QUIP</span>
          <a
            href="tel:+201552161814"
            className="site-footer__bar-item site-footer__bar-link"
          >
            +20 155 216 1814
          </a>
          <a
            href="mailto:contact@quipegy.com"
            className="site-footer__bar-item site-footer__bar-link"
          >
            contact@quipegy.com
          </a>
          <span className="site-footer__bar-item site-footer__bar-item--end">
            QUIP by Digital Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
