import React from 'react';

const Partners: React.FC = () => {
  const partnerNames = [
    "Zoho",
    "Grundfos",
    "Sybyl",
    "BBC Africa",
    "Ilina Program",
    "Food 4 Education",
    "Hayat",
    "Nairobi Chapel Syokimau",
    "Saint Gobain",
    "Simplify IT"
  ];

  // Expects images named partner-1.png, partner-2.png, etc. in /assets/
  const logos = partnerNames.map((_, idx) => 
    `/assets/partner-${idx + 1}.png`
  );

  return (
    <section id="partners" className="partners partners--orange" aria-labelledby="partners-title">
      <div className="container">
        <h2 id="partners-title" className="partners__title">
          Our services are trusted by these Partners
        </h2>

        <div className="partners__marquee" role="region" aria-label="Partner logos">
          <div className="marquee__track" tabIndex={0} aria-live="off" aria-hidden="false">
            {/* Original Group */}
            <div className="marquee__group">
              {logos.map((src, idx) => (
                <img key={`l1-${idx}`} src={src} alt={`${partnerNames[idx]} logo`} className="marquee__logo" onError={(e) => {
                    // Fallback to text if image missing for development
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', `<span class="partner-fallback">${partnerNames[idx]}</span>`);
                }} />
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="marquee__group" aria-hidden="true">
              {logos.map((src, idx) => (
                <img key={`l2-${idx}`} src={src} alt="" className="marquee__logo" />
              ))}
            </div>
            
             {/* Triplicate for safety on wide screens */}
             <div className="marquee__group" aria-hidden="true">
              {logos.map((src, idx) => (
                <img key={`l3-${idx}`} src={src} alt="" className="marquee__logo" />
              ))}
            </div>
          </div>
        </div>

        <div className="partners__cta">
          <a className="btn btn--outline" href="mailto:info@soulfulkitchen.co.ke" style={{ borderColor: '#152B25', color: '#152B25' }}>EMAIL US TO LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};

export default Partners;