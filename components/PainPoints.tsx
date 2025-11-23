import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section id="pain-points" className="section pain" aria-labelledby="pain-title">
      <div className="container">
        <ul className="pain__grid" role="list">
          <li className="pain__item">
            <span className="pain__dot" aria-hidden="true"></span>
            <div className="pain__copy">
              <strong>On Time <br/>Delivery</strong>
            </div>
          </li>

          <li className="pain__item">
            <span className="pain__dot" aria-hidden="true"></span>
            <div className="pain__copy">
              <strong>Unpredictable <br/> Food Standard</strong>
            </div>
          </li>

          <li className="pain__item">
            <span className="pain__dot" aria-hidden="true"></span>
            <div className="pain__copy">
              <strong>Budget <br/> Overruns </strong>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PainPoints;