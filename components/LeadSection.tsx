import React, { useState } from 'react';

interface LeadSectionProps {
    onOpenLeadModal: (e?: React.MouseEvent) => void;
}

const LeadSection: React.FC<LeadSectionProps> = ({ onOpenLeadModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    referral: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
        const response = await fetch('/mail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.sent) {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', location: '', referral: '', notes: '' });
        } else {
            setStatus('error');
        }
    } catch (error) {
        console.error('Submission error:', error);
        setStatus('error');
    }
  };

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
          
         {status === 'success' ? (
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                <h3 className="font-lufga-black" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent!</h3>
                <p className="font-lufga-light">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button 
                    onClick={() => setStatus('idle')} 
                    className="btn btn--outline" 
                    style={{ marginTop: '1.5rem', borderColor: '#fff', color: '#fff' }}
                >
                    Send another message
                </button>
            </div>
         ) : (
            <form className="lead-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="lead-name" className="form-label">Full Name</label>
                    <input 
                        id="lead-name" 
                        name="name" 
                        className="form-input" 
                        type="text" 
                        required 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="lead-phone" className="form-label">Phone Number</label>
                    <input 
                        id="lead-phone" 
                        name="phone" 
                        className="form-input" 
                        type="tel" 
                        required 
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-row">
                    <label htmlFor="lead-email" className="form-label">Email Address</label>
                    <input 
                        id="lead-email" 
                        name="email" 
                        className="form-input" 
                        type="email" 
                        required 
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="lead-location" className="form-label">Event Location</label>
                    <input 
                        id="lead-location" 
                        name="location" 
                        className="form-input" 
                        type="text" 
                        required 
                        placeholder="City or Venue"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="lead-referral" className="form-label">How did you hear about Soulful Kitchen?</label>
                    <select 
                        id="lead-referral" 
                        name="referral" 
                        className="form-input"
                        value={formData.referral}
                        onChange={handleChange}
                    >
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
                        value={formData.notes}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {status === 'error' && (
                    <p style={{ color: '#ff8a80', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        Something went wrong. Please check your connection or try again later.
                    </p>
                )}

                <div className="form-row" style={{ marginBottom: 0 }}>
                    <button 
                        type="submit" 
                        className="btn btn--primary btn--full"
                        disabled={status === 'submitting'}
                        style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Get a proposal'}
                    </button>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', textAlign: 'center' }}>We’ll reply within 24 hours — no spam, ever.</p>
                </div>
            </form>
         )}
      </div>
    </section>
  );
};

export default LeadSection;