import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="two-column-images" className="two-up-section" aria-labelledby="two-up-title">
      <div className="container">
        <h2 id="two-up-title" className="section-title font-lufga-black">Services in Detail</h2>

        <div className="two-up-grid" role="group" aria-label="Gallery of event images">
          {/* Left column: large image */}
          <figure className="two-up__left" aria-hidden="false">
            <img src="/assets/gallery-1.jpg"
                 alt="Guests gathered around a long table enjoying a Soulful Kitchen event"
                 loading="lazy" />
          </figure>

          {/* Right column: two stacked images */}
          <div className="two-up__right" aria-hidden="false">
            <figure className="two-up__right-row two-up__right-row--top">
              <img src="/assets/gallery-2.jpg"
                   alt="Close-up of a beautifully plated dish at an event"
                   loading="lazy" />
            </figure>

            <figure className="two-up__right-row two-up__right-row--bottom">
              <img src="/assets/gallery-3.jpg"
                   alt="Service staff arranging a buffet table for guests"
                   loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;