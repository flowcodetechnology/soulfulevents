import React from 'react';

interface HeaderProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLeadModal }) => {
  return (
    <header className="site-header" id="top">
      <div className="site-brand">
        <a href="/" aria-label="Soulful Kitchen Home" style={{ display: 'block' }}>
          <img src="/assets/logo.png" alt="Soulful Kitchen logo" className="site-logo" />
        </a>
        <span className="brand-text"></span>
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="nav-link" href="#who-we-are">About Us</a>
        {/* Updated link to point to the Gallery section */}
        <a className="nav-link" href="#gallery">Services</a>
        <a className="nav-link" href="#who-we-are">Who We Are</a>
      </nav>

      <button className="btn btn--outline" onClick={onOpenLeadModal}>Book a call</button>
    </header>
  );
};

export default Header;