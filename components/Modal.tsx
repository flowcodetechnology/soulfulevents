import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal" 
      id="videoModal" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="videoModalTitle" 
      aria-hidden={!isOpen ? "true" : "false"}
      onClick={handleBackdropClick}
    >
      <div className="modal__overlay" data-modal-close></div>
      <div className="modal__dialog" role="document">
        <button className="modal__close" type="button" aria-label="Close video" onClick={onClose} data-modal-close>&times;</button>
        <h2 id="videoModalTitle" className="modal__title">Soulful Kitchen in action</h2>
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;