import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="pain-points" className="section pain" aria-labelledby="pain-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 id="pain-title" className="section-title font-lufga-black">Planning an Event can be overwhelming</h2>
            <p className="font-lufga-light" style={{ color: '#FE8731', fontSize: '1.25rem', fontWeight: 500 }}>
                Juggling caterers only adds another layer of stress
            </p>
        </div>

        <ul className="pain__grid" role="list">
          <li className="pain__item">
            <div className="pain__icon" aria-hidden="true">
              <ArrowUpRight size={32} color="#FE8731" strokeWidth={2.5} />
            </div>
            <div className="pain__copy">
              <strong>On Time <br/>Delivery</strong>
            </div>
          </li>

          <li className="pain__item">
            <div className="pain__icon" aria-hidden="true">
              <ArrowUpRight size={32} color="#FE8731" strokeWidth={2.5} />
            </div>
            <div className="pain__copy">
              <strong>Unpredictable <br/> Food Standard</strong>
            </div>
          </li>

          <li className="pain__item">
            <div className="pain__icon" aria-hidden="true">
              <ArrowUpRight size={32} color="#FE8731" strokeWidth={2.5} />
            </div>
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