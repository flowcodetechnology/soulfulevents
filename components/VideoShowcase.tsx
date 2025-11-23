import React, { useState, useRef } from 'react';

const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
      setIsPlaying(true);
      // Use timeout to ensure element is rendered before playing
      setTimeout(() => {
        if(videoRef.current) {
            videoRef.current.play();
        }
      }, 100);
  };

  return (
    <section id="hosted-video" className="section hosted-video" role="region" aria-labelledby="hosted-video-title">
      <div className="container">
        <div className="hosted-video__wrap">
          {/* If not playing, show the cover and play button */}
          {!isPlaying ? (
            <div 
                className="video-player" 
                tabIndex={0} 
                role="button" 
                aria-label="Play demo video"
                onClick={handlePlay}
                onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
            >
                {/* poster image */}
                <img 
                    className="video-player__poster" 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
                    alt="Demo - Soulful Kitchen event serving" 
                />

                {/* big accessible play button */}
                <button className="video-player__play" aria-label="Play video">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" fill="#fff" opacity="0.95"></circle>
                    <path d="M10 8v8l6-4-6-4z" fill="#152B25"></path>
                </svg>
                </button>
            </div>
          ) : (
            /* Direct Video Player */
            <div className="video-player" style={{ background: '#000' }}>
                <video 
                    ref={videoRef}
                    src="/assets/showcase-video.mp4" 
                    controls 
                    autoPlay
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;