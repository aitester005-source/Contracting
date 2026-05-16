import React from 'react';
import Link from 'next/link';
import Button from './Button';
import styles from '../styles/HeroVideo.module.css';

const HeroVideo: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      {/* Background Video Wrapper */}
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
          poster="/images/portfolio/motor-city.jpg"
        >
          {/* 
              DRONE CONSTRUCTION VIDEO:
              A high-quality drone video from Pexels is used as a default.
              You can replace the src below with your local file path:
              /videos/hero-construction.mp4
          */}
          <source src="https://videos.pexels.com/video-files/5849646/5849646-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          
          {/* Fallback for browsers that don't support HTML5 video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for branding and text readability */}
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="container-custom px-4 relative z-10">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Professional Scaffolding Solutions in UAE
          </h1>
          <p className={styles.subtitle}>
            Safe, reliable, and high-quality scaffolding services for construction, industrial, and commercial projects.
          </p>
          
          <div className={styles.buttonGroup}>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className={styles.ctaButton}>
                Request a Quote
              </Button>
            </Link>
            <a 
              href="https://wa.me/971504529978?text=Hello, I would like to request scaffolding services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappPill}
            >
              Chat on WhatsApp
            </a>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className={styles.ctaButton}>
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
