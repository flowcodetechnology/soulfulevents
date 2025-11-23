import React from 'react';

const Partners: React.FC = () => {
  // Using Clearbit Logo API to fetch logos dynamically based on domain names.
  // Replaced text-based fallback with local asset path for uniformity.
  const partners = [
    { name: "Zoho", logo: "https://logo.clearbit.com/zoho.com" },
    { name: "Grundfos", logo: "https://logo.clearbit.com/grundfos.com" },
    { name: "Sybyl", logo: "https://logo.clearbit.com/sybyl.com" },
    { name: "BBC", logo: "https://logo.clearbit.com/bbc.com" },
    { name: "Saint Gobain", logo: "https://logo.clearbit.com/saint-gobain.com" },
    { name: "Food 4 Education", logo: "https://logo.clearbit.com/food4education.org" },
    { name: "Hayat", logo: "https://logo.clearbit.com/hayat.com" },
    { name: "Nairobi Chapel", logo: "https://logo.clearbit.com/nairobichapel.org" },
    { name: "Simplify IT", logo: "https://logo.clearbit.com/simplifyit.com" },
    { name: "Ilina Program", logo: "/assets/ilina-program.png" }
  ];

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
              {partners.map((partner, idx) => (
                <img 
                  key={`l1-${idx}`} 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="marquee__logo"
                  onError={(e) => {
                    // Hide if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="marquee__group" aria-hidden="true">
              {partners.map((partner, idx) => (
                <img 
                  key={`l2-${idx}`} 
                  src={partner.logo} 
                  alt="" 
                  className="marquee__logo"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
            
             {/* Triplicate for safety on wide screens */}
             <div className="marquee__group" aria-hidden="true">
              {partners.map((partner, idx) => (
                <img 
                  key={`l3-${idx}`} 
                  src={partner.logo} 
                  alt="" 
                  className="marquee__logo" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
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