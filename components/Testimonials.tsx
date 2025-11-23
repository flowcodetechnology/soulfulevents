import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const testimonialsData = [
    {
        text: "Soulful Kitchen took care of every detail — the food, the timing, and our guests kept raving.",
        author: "William, Product Team"
    },
    {
        text: "Absolutely stunning presentation and delicious flavors. They made our corporate retreat memorable.",
        author: "Sarah, Event Coordinator"
    },
    {
        text: "The best catering service we've used. Professional, on time, and incredibly tasty.",
        author: "James, Tech Inc."
    }
];

const Testimonials: React.FC<TestimonialsProps> = ({ onOpenLeadModal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const current = testimonialsData[currentIndex];

  return (
    <section 
        className="section testimonials" 
        aria-label="Testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="testimonial-card">
            <blockquote className="testimonial-text font-lufga-black">
                “{current.text}”
            </blockquote>
            <cite className="font-lufga-light" style={{ display: 'block', marginBottom: '2rem', fontSize: '1.1rem', fontStyle: 'normal' }}>
                — {current.author}
            </cite>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <button onClick={prevTestimonial} className="btn btn--outline" style={{ padding: '0.5rem', borderRadius: '50%', borderColor: '#152B25', color: '#152B25' }} aria-label="Previous testimonial">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextTestimonial} className="btn btn--outline" style={{ padding: '0.5rem', borderRadius: '50%', borderColor: '#152B25', color: '#152B25' }} aria-label="Next testimonial">
                    <ChevronRight size={24} />
                </button>
            </div>

            <button className="btn btn--primary" onClick={onOpenLeadModal}>BOOK A CALL</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;