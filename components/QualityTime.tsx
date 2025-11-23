import React from 'react';

interface QualityTimeProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const QualityTime: React.FC<QualityTimeProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="quality-time" className="section quality-time" aria-labelledby="quality-time-title">
      <div className="container quality-time__grid">

        {/* Left: text + list + CTA */}
        <div className="quality-time__left">
          <h2 id="quality-time-title" className="quality-time__title font-lufga-black">
            Spend more quality time with friends or family instead of stressing over meal prep.
          </h2>

          <ul className="quality-time__list font-lufga-light" aria-labelledby="quality-time-title">
            <li className="quality-time__item">You will miss out on bonding opportunities.</li>
            <li className="quality-time__item">You wont forge the relationships that count.</li>
            <li className="quality-time__item">You could end up with sub-par meals that impact staff morale.</li>
          </ul>

          <p className="quality-time__cta">
            <button className="btn btn--primary" onClick={onOpenLeadModal}>Get a proposal</button>
          </p>
        </div>

        {/* Right: image */}
        <figure className="quality-time__right" aria-hidden="false">
          <img src="/assets/quality-time.jpg"
               alt="Friends enjoying a relaxed meal together"
               loading="lazy" />
        </figure>
      </div>
    </section>
  );
};

export default QualityTime;