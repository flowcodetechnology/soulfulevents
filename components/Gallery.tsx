import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
  description: string;
  longText: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Catering Services",
    image: "/assets/gallery-1.jpg", // Ensure this image is portrait in your assets
    description: "Weddings, Corporate & Private Events",
    longText: "We turn events into experiences. Whether it's a grand wedding, a corporate gala, or an intimate private dinner, our team handles every detail with precision. We curate bespoke menus that match the tone of your occasion, ensuring your guests are not just fed, but truly delighted."
  },
  {
    id: 2,
    title: "Staff Meals",
    image: "/assets/IMG-20230523-WA0012.jpg", // Ensure this image is portrait
    description: "Nutritious Daily Office Lunches",
    longText: "Fuel your team's productivity with meals that taste like home. Our corporate meal plans are designed to be nutritious, varied, and comforting. We deliver hot, fresh lunches directly to your office, helping you build a company culture centered around sharing good food."
  },
  {
    id: 3,
    title: "Take Away Services",
    image: "/assets/Soulful Kitchen-38.jpg", // Ensure this image is portrait
    description: "Soulful Flavors On The Go",
    longText: "Craving the Soulful Kitchen taste but short on time? Our take-away service brings our signature dishes to you in convenient, eco-friendly packaging. Perfect for quick lunches, dinners at home, or picnics. Experience restaurant quality wherever you are."
  }
];

const Gallery: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title" className="section-title font-lufga-black" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Our Services
        </h2>

        <div className="gallery-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="gallery-card"
              onClick={() => setSelectedService(service)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${service.title}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="gallery-image"
                loading="lazy"
              />
              
              {/* Top Text Overlay with Blur */}
              <div className="gallery-overlay-top">
                <h3 className="gallery-card-title font-lufga-black">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="service-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close details"
            >
              <X size={24} />
            </button>
            
            <div className="service-modal-layout">
              <div className="service-modal-image">
                <img src={selectedService.image} alt={selectedService.title} />
              </div>
              <div className="service-modal-text">
                <h3 className="font-lufga-black" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2D6254' }}>
                  {selectedService.title}
                </h3>
                <h4 className="font-lufga-light" style={{ fontSize: '1.2rem', color: '#FE8731', marginBottom: '1.5rem' }}>
                  {selectedService.description}
                </h4>
                <p className="font-lufga-light" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
                  {selectedService.longText}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a href="#lead-section" className="btn btn--primary" onClick={() => setSelectedService(null)}>
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;