import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from '../styles/FacebookFeed.module.css';

declare global {
  interface Window {
    FB: any;
  }
}

interface FacebookFeedProps {
  pageUrl?: string;
  title?: string;
}

const FacebookFeed: React.FC<FacebookFeedProps> = ({
  pageUrl = "https://www.facebook.com/profile.php?id=61572363516894",
  title = "Follow Us on Facebook"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Re-parse XFBML when component mounts or updates
    if (window.FB) {
      try {
        window.FB.XFBML.parse();
        setIsLoading(false);
      } catch (err) {
        console.error("FB parse error:", err);
      }
    }
    
    // Safety timeout to hide spinner if script fails to load or parse
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleFbLoad = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    setIsLoading(false);
  };

  return (
    <div id="facebook-feed" className="overflow-hidden">
      <div className={styles.feedContainer}>
        <div className={styles.feedWrapper}>
            
            {/* Loading Spinner */}
            {isLoading && (
              <div className={styles.loadingOverlay}>
                <div className={styles.spinnerOuter}>
                  <div className={styles.spinnerInner}></div>
                </div>
                <p className={styles.loadingText}>
                  Connecting to Facebook...
                </p>
              </div>
            )}

            {/* Error Message */}
            {hasError ? (
              <div className={styles.errorContainer}>
                <div className={styles.errorIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className={styles.errorTitle}>Oops! Couldn't load feed</h4>
                <p className={styles.errorText}>There was an issue connecting to Facebook. This might be due to privacy settings or a connection problem.</p>
                <a 
                  href={pageUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                >
                  Visit our Facebook Page
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className={styles.fbPageWrapper}>
                <div 
                  className="fb-page" 
                  data-href={pageUrl}
                  data-tabs="timeline" 
                  data-width="500" 
                  data-height="1000" 
                  data-small-header="false" 
                  data-adapt-container-width="false" 
                  data-hide-cover="false" 
                  data-show-facepile="true"
                  data-lazy="true"
                >
                  <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
                    <a href={pageUrl}>Hedefy Scaffolding on Facebook</a>
                  </blockquote>
                </div>
              </div>
            )}
            
            {/* Professional Decorative Elements */}
            <div className={styles.decorationTop}></div>
            <div className={styles.decorationBottom}></div>
          </div>
        </div>

      <Script 
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" 
        strategy="afterInteractive"
        onLoad={handleFbLoad}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default FacebookFeed;
