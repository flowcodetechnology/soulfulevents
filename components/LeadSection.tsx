import React from 'react';

interface LeadSectionProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const LeadSection: React.FC<LeadSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="lead-section" className="lead-split-section" aria-labelledby="lead-section-title">
      {/* Left Column: Image with Overlay Text */}
      <div className="lead-split-image">
        <img src="/assets/logo.png" alt="Soulful Kitchen" className="lead-overlay-logo" />
        <div className="lead-overlay-content">
             <h2 id="lead-section-title" className="section-title font-lufga-black" style={{ color: '#fff', marginBottom: '1rem', lineHeight: '1.1' }}>
              Let’s help you turn your next event into an experience worth remembering.
            </h2>
            <p className="font-lufga-light" style={{ fontSize: '1.15rem', opacity: 0.95, lineHeight: '1.6' }}>
                From intimate dinners to corporate lunches and grand celebrations, our team ensures every detail is seamless, soulful, and unforgettable.
            </p>
        </div>
      </div>
      
      {/* Right Column: Form */}
      <div className="lead-split-content">
         <div className="lead-text-block" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title font-lufga-black" style={{ color: '#fff', fontSize: '2rem', marginBottom: '0.5rem' }}>
              Book a call today!
            </h2>
             <p className="font-lufga-light" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.5' }}>
              Create moments worth remembering.<br />
              It all begins with a conversation.
            </p>
         </div>
          
         <form className="lead-form" noValidate>
            <div className="form-row">
                <label htmlFor="lead-name" className="form-label">Full Name</label>
                <input id="lead-name" name="name" className="form-input" type="text" required placeholder="Your Name" />
            </div>

            <div className="form-row">
                <label htmlFor="lead-phone" className="form-label">Phone Number</label>
                <input id="lead-phone" name="phone" className="form-input" type="tel" required placeholder="Your Phone Number" />
            </div>
            
            <div className="form-row">
                <label htmlFor="lead-email" className="form-label">Email Address</label>
                <input id="lead-email" name="email" className="form-input" type="email" required placeholder="Your Email Address" />
            </div>

            <div className="form-row">
                <label htmlFor="lead-location" className="form-label">Event Location</label>
                <input id="lead-location" name="location" className="form-input" type="text" required placeholder="City or Venue" />
            </div>

             <div className="form-row">
                <label htmlFor="lead-referral" className="form-label">How did you hear about Soulful Kitchen?</label>
                <select id="lead-referral" name="referral" className="form-input">
                    <option value="">Choose the option</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="friend">Friend Referral</option>
                    <option value="google">Google</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-row">
                <label htmlFor="lead-notes" className="form-label" style={{ marginBottom: '0.25rem' }}>Tell us a bit about your upcoming event:</label>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                    (e.g., occasion, date, number of guests, theme, dietary preferences, or special requests)
                </p>
                <textarea 
                    id="lead-notes" 
                    name="notes" 
                    className="form-input" 
                    rows={4} 
                ></textarea>
            </div>

            <div className="form-row" style={{ marginBottom: 0 }}>
                <button type="submit" className="btn btn--primary btn--full">Get a proposal</button>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', textAlign: 'center' }}>We’ll reply within 24 hours — no spam, ever.</p>
            </div>
        </form>
      </div>
    </section>
  );
};

export default LeadSection;