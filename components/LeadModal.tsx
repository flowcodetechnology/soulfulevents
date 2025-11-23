import React, { useEffect } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="leadModalTitle"
      aria-hidden={!isOpen}
      style={{ display: 'flex', zIndex: 210, padding: 0 }}
    >
      {/* Background overlay (mostly hidden by full screen modal but kept for structure) */}
      <div className="modal__overlay" onClick={onClose} style={{ background: 'rgba(0,0,0,0.85)' }}></div>
      
      {/* Full screen dialog with Dark Green Background */}
      <div className="modal__dialog" style={{ width: '100%', height: '100%', maxWidth: 'none', maxHeight: 'none', borderRadius: '0', display: 'flex', background: '#2D6254' }}>
        <button 
            className="modal__close" 
            type="button" 
            aria-label="Close modal" 
            onClick={onClose}
            style={{ top: '2rem', right: '2rem', zIndex: 10, fontSize: '2.5rem', color: '#fff' }}
        >&times;</button>
        
        <div className="lead-popup-content" style={{ width: '100%', height: '100%', display: 'flex' }}>
            {/* Left Column: Image with blending edge */}
            <div className="lead-popup-image" style={{ flex: 1, height: '100%', position: 'relative' }}>
                <img 
                    src="/assets/lead-modal.jpg" 
                    alt="Catering presentation" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Right Column: Form with Dark Green Background and White Text */}
            <div className="lead-popup-form-wrapper" style={{ flex: 1, height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', backgroundColor: '#2D6254' }}>
                <div style={{ maxWidth: '600px', margin: 'auto', width: '100%' }}>
                    <h2 id="leadModalTitle" className="lead-card__title font-lufga-black" style={{ marginBottom: '0.5rem', color: '#fff', lineHeight: 1.1 }}>
                        Book a call today!
                    </h2>
                    <p className="lead-card__intro font-lufga-light" style={{ marginBottom: '2rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)' }}>
                        Create moments worth remembering.<br />
                        It all begins with a conversation.
                    </p>

                    <form id="popupLeadForm" className="lead-form" method="post" noValidate>
                        <div className="form-row">
                            <label htmlFor="popup-name" className="form-label" style={{ color: '#fff' }}>Full Name</label>
                            <input id="popup-name" name="name" className="form-input" type="text" style={{ background: '#fff', color: '#333', border: 'none' }} />
                        </div>

                        <div className="form-row">
                            <label htmlFor="popup-phone" className="form-label" style={{ color: '#fff' }}>Phone Number</label>
                            <input id="popup-phone" name="phone" className="form-input" type="tel" style={{ background: '#fff', color: '#333', border: 'none' }} />
                        </div>

                        <div className="form-row">
                            <label htmlFor="popup-email" className="form-label" style={{ color: '#fff' }}>Email Address</label>
                            <input id="popup-email" name="email" className="form-input" type="email" style={{ background: '#fff', color: '#333', border: 'none' }} />
                        </div>

                        <div className="form-row">
                            <label htmlFor="popup-location" className="form-label" style={{ color: '#fff' }}>Event Location</label>
                            <input id="popup-location" name="location" className="form-input" type="text" style={{ background: '#fff', color: '#333', border: 'none' }} />
                        </div>

                        <div className="form-row">
                            <label htmlFor="popup-referral" className="form-label" style={{ color: '#fff' }}>How did you hear about Soulful Kitchen?</label>
                            <select id="popup-referral" name="referral" className="form-input" style={{ background: '#fff', color: '#333', border: 'none' }}>
                                <option value="">Select an option</option>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">TikTok</option>
                                <option value="friend">Friend Referral</option>
                                <option value="google">Google</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <label htmlFor="popup-notes" className="form-label" style={{ marginBottom: '0.25rem', color: '#fff' }}>Tell us a bit about your upcoming event:</label>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                                (e.g., occasion, date, number of guests, theme, dietary preferences, or special requests)
                            </p>
                            <textarea id="popup-notes" name="notes" className="form-input" rows={4} style={{ background: '#fff', color: '#333', border: 'none' }}></textarea>
                        </div>

                        <div className="form-row" style={{ marginTop: '1.5rem' }}>
                            <button type="submit" className="btn btn--primary btn--full" style={{ fontSize: '1.1rem', padding: '1rem' }}>Get a proposal</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;