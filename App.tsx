import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import LeadSection from './components/LeadSection';
import VideoShowcase from './components/VideoShowcase';
import Partners from './components/Partners';
import Gallery from './components/Gallery';
import WhoWeAre from './components/WhoWeAre';
import QualityTime from './components/QualityTime';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';
import LeadModal from './components/LeadModal';

const App: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  
  const handleOpenVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => setIsVideoModalOpen(false);
  
  const handleOpenLeadModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsLeadModalOpen(true);
  };
  const handleCloseLeadModal = () => setIsLeadModalOpen(false);

  return (
    <div>
      <Header onOpenLeadModal={handleOpenLeadModal} />
      
      <main>
        <Hero onOpenVideo={handleOpenVideo} onOpenLeadModal={handleOpenLeadModal} />
        <PainPoints />
        <Services onOpenLeadModal={handleOpenLeadModal} />
        <LeadSection onOpenLeadModal={handleOpenLeadModal} />
        <VideoShowcase onOpenVideo={handleOpenVideo} />
        <Partners />
        <Gallery />
        <Testimonials onOpenLeadModal={handleOpenLeadModal} />
        <WhoWeAre />
        <QualityTime onOpenLeadModal={handleOpenLeadModal} />
        
        <section id="contact" className="section section--contact" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title" className="section-title font-lufga-black">Let’s plan something soulful</h2>
            <p className="font-lufga-light">Email <a href="mailto:info@soulfulkitchen.co.ke">info@soulfulkitchen.co.ke</a> or call <a href="tel:+254700556134">0700 556 134</a>.</p>
          </div>
        </section>
      </main>

      <Footer onOpenLeadModal={handleOpenLeadModal} />

      {/* Video Modal */}
      <Modal isOpen={isVideoModalOpen} onClose={handleCloseVideo}>
         <div className="video-embed">
            <video 
              src="/assets/hero-video.mp4" 
              className="responsive-video"
              controls 
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
         </div>
      </Modal>

      {/* Lead Generation Full Page Popup */}
      <LeadModal isOpen={isLeadModalOpen} onClose={handleCloseLeadModal} />
    </div>
  );
};

export default App;