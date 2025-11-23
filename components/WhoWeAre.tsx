import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="who" role="region" aria-labelledby="who-title">
      <div className="who__bg" aria-hidden="true"></div>

      <div className="container who__content">
        <h2 id="who-title" className="who__title font-lufga-black">Who we are</h2>

        <div className="who__text">
          <p className="font-lufga-light">
            Soulful Kitchen was born from a simple idea, that food is more than nourishment; it’s connection, comfort, and celebration.
          </p>

          <p className="font-lufga-light">
            As a cloud kitchen, we bring this philosophy to life through event catering, corporate meal plans, 
            and takeout experiences that are vibrant, seamless, and joy filled. From curated lunches that keep teams 
            inspired to unforgettable celebrations shared around the table, every dish we craft tells a story — 
            one of care, creativity, and soulful moments made together.
          </p>

          <p className="who__tag font-lufga-black">
            It's about Moments &amp; More
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;