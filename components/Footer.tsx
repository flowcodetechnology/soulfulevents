import React from 'react';

interface FooterProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer site-footer--green" role="contentinfo" aria-labelledby="footer-heading">
      <div className="container footer__grid">
        {/* 1. Logo / description */}
        <div className="footer__col footer__brand" aria-labelledby="footer-brand">
          <a href="/" className="footer__logo-link" aria-label="Soulful Kitchen home">
            <img src="/assets/logo.png" alt="Soulful Kitchen" className="footer__logo" />
          </a>
        </div>

        {/* 2. Social */}
        <nav className="footer__col footer__social" aria-labelledby="footer-social">
          <h3 id="footer-social" className="footer__heading font-lufga-black">Follow us</h3>
          <ul className="social-list" role="list">
            <li><a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Soulful Kitchen on Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.34 2 1.86 6.49 1.86 12.07 1.86 17.07 5.94 21 10.81 21v-6.7H8.78v-3.98h2.03V8.36c0-2 1.2-3.1 3-3.1.86 0 1.59.06 1.8.09v2.08h-1.25c-1 0-1.2.5-1.2 1.15v1.54h2.35l-.37 3.98h-1.98V21C18.06 21 22 17.07 22 12.07z"/></svg>
            </a></li>

            <li><a className="social-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Soulful Kitchen on Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm5.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/></svg>
            </a></li>

            <li><a className="social-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Soulful Kitchen on Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.92c-.66.3-1.37.5-2.12.6a3.7 3.7 0 0 0 1.62-2.03 7.34 7.34 0 0 1-2.34.9 3.66 3.66 0 0 0-6.22 3.34 10.39 10.39 0 0 1-7.55-3.83 3.66 3.66 0 0 0 1.13 4.89A3.58 3.58 0 0 1 3 10.6v.05a3.66 3.66 0 0 0 2.94 3.58 3.67 3.67 0 0 1-1.65.06 3.66 3.66 0 0 0 3.42 2.54A7.34 7.34 0 0 1 2 19.54a10.33 10.33 0 0 0 5.6 1.64c6.72 0 10.4-5.57 10.4-10.4v-.47A7.5 7.5 0 0 0 22 5.92z"/></svg>
            </a></li>

            <li><a className="social-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Soulful Kitchen on LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 21H3.67V9.33h3.27V21zM5.3 7.94a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8zM20.33 21h-3.27v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86V21h-3.27V9.33h3.14v1.6h.04c.44-.83 1.5-1.7 3.08-1.7 3.29 0 3.9 2.17 3.9 4.98V21z"/></svg>
            </a></li>
          </ul>
        </nav>

        {/* 3. Links */}
        <nav className="footer__col footer__links" aria-labelledby="footer-links">
          <h3 id="footer-links" className="footer__heading font-lufga-black">Quick links</h3>
          <ul className="footer-links-list" role="list">
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><button className="footer-link" onClick={onOpenLeadModal} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}>Book a call</button></li>
            <li><a href="/privacy" className="footer-link">Privacy</a></li>
          </ul>
        </nav>

        {/* 4. CTA */}
        <div className="footer__col footer__cta" aria-labelledby="footer-cta">
          <h3 id="footer-cta" className="footer__heading font-lufga-black">Ready to get started?</h3>
          <p className="footer__cta-text font-lufga-light">Let’s talk about your next soulful event — we’ll guide you through every step.</p>
          <p className="footer__cta-actions">
            <button className="btn btn--primary" onClick={onOpenLeadModal}>Book a call</button>
          </p>
        </div>
      </div>

      {/* bottom copyright row */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">&copy; <span id="footer-year">{currentYear}</span> Soulful Kitchen. All rights reserved.</p>
          <p className="footer__legal"><a href="mailto:info@soulfulkitchen.co.ke" className="footer-link">info@soulfulkitchen.co.ke</a> &nbsp; | &nbsp; <a href="tel:+254700556134" className="footer-link">0700 556 134</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;