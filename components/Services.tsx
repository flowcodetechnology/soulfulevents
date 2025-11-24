import React from 'react';
import { ClipboardPen, Sliders, Utensils } from 'lucide-react';

interface ServicesProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenLeadModal }) => {
  // Brand color for icons
  const iconColor = "#2D6254";

  return (
    <section id="services" className="section services">
      <div className="container">
        {/* Intro row: 3 columns (Title | Arrow | Blurb) */}
        <div className="services-intro" role="region" aria-labelledby="services-title">
          <div className="services-intro__left">
            <h2 id="services-title" className="services-title font-lufga-black">
              But You shouldn't have to sacrifice<br/>
              Time &amp; Quality<br/>
              <span className="services-title__accent">For meals that nature your people</span>
            </h2>
          </div>

          <div className="services-intro__arrow" aria-hidden="true">
            {/* Thicker, bolder arrow */}
            <svg width="80" height="24" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              {/* Line */}
              <path d="M0 8H58" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              {/* Arrowhead */}
              <path d="M50 1L60 8L50 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="services-intro__right" aria-hidden="false">
            <p className="services-intro__blurb font-lufga-light" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
              We are flipping the script at Soulful Kitchen, transforming event catering and meal planning into a seamless, 
              joy-filled experience using our signature three part approach.
            </p>
          </div>
        </div>

        {/* Three-column features */}
        <ul className="services-grid" role="list" aria-label="Services we offer">
          {/* CONSULT */}
          <li className="service service--pink" aria-labelledby="svc1-title">
            <div className="service__visual" aria-hidden="true">
              <svg className="service__arc" viewBox="0 0 100 40" width="100%" height="40" aria-hidden="true" focusable="false">
                <path d="M10 30 C30 0, 70 0, 90 30" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>

              <div className="service__icon" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ClipboardPen size={48} color={iconColor} strokeWidth={1.5} />
              </div>
            </div>

            <h3 id="svc1-title" className="service__title font-lufga-black">Consult</h3>
            <p className="service__desc font-lufga-light">We start by understanding your vision:
              the ocassion, preferences and budget. 
              This allows us to craft a plan that fits perfectly, removing the guess work and 
              ensuring every detail aligns with your need.
            </p>
          </li>

          {/* CUSTOMIZE */}
          <li className="service service--mint" aria-labelledby="svc2-title">
            <div className="service__visual" aria-hidden="true">
              <svg className="service__arc" viewBox="0 0 100 40" width="100%" height="40" aria-hidden="true" focusable="false">
                <path d="M10 30 C30 0, 70 0, 90 30" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>

              <div className="service__icon" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Sliders size={48} color={iconColor} strokeWidth={1.5} />
              </div>
            </div>

            <h3 id="svc2-title" className="service__title font-lufga-black">Customize</h3>
            <p className="service__desc font-lufga-light">From curated menus to dietary considerations,
              we personalize every element to reflect your taste and style. Our goal is to balance Quality,Creativity and Cost,
              giving you meals that impress and presentation that elevate your event, ultimately, 
              we make you look good.</p>
          </li>

          {/* CATER */}
          <li className="service service--orange" aria-labelledby="svc3-title">
            <div className="service__visual" aria-hidden="true">
              <svg className="service__arc" viewBox="0 0 100 40" width="100%" height="40" aria-hidden="true" focusable="false">
                <path d="M10 30 C30 0, 70 0, 90 30" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>

              <div className="service__icon" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Utensils size={48} color={iconColor} strokeWidth={1.5} />
              </div>
            </div>

            <h3 id="svc3-title" className="service__title font-lufga-black">Cater</h3>
            <p className="service__desc font-lufga-light">Finally, we deliver with precision and care.
              From timely set up to attentive service, our team ensures your guests enjoy a soulful dining experience while
              you focus on what truly matters, 
              <br/>
              - the Moment.
            </p>
          </li>
        </ul>


        <div className="services-cta" aria-hidden="false">
          <button className="btn btn--primary" onClick={onOpenLeadModal}>Book a call</button>
        </div>
      </div>
    </section>
  );
};

export default Services;