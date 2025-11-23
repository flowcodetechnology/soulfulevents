import React from 'react';

interface HeroProps {
  onOpenVideo: () => void;
  onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenVideo, onOpenLeadModal }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <div className="hero-video-wrapper">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            {/* Replace with your video file in public/assets/ */}
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay" aria-hidden="true"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="hero-content" style={{ gridColumn: '1 / -1' }}>
        <p className="hero-kicker font-lufga-light">Moments &amp; More</p>

        <h1 id="hero-title" className="hero-title font-lufga-black">Meals That Bring People Together</h1>

        <p className="hero-subhead font-lufga-light">Focus on real connections or growing your business while we handle your catering needs.</p>
       
        <div className="hero-cta">
          <button className="btn btn--primary" onClick={onOpenLeadModal}>Book a call</button>

          <button
            className="btn btn--outline js-open-video"
            type="button"
            onClick={onOpenVideo}
            aria-controls="videoModal"
            aria-expanded="false"
          >
            Watch video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;