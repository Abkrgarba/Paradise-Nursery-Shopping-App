import React from 'react';
import './AboutUs.css';

function AboutUs({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="landing-badge">🌿 EST. 2024</div>
          <h1 className="landing-title">
            Paradise<br />
            <span className="landing-title-accent">Nursery</span>
          </h1>
          <p className="landing-tagline">
            Where every leaf tells a story.<br />
            Bring nature's finest indoors.
          </p>
          <div className="landing-divider" />
          <p className="landing-description">
            Handpicked tropical wonders, air-purifying champions, and
            resilient succulents — curated for your space and soul.
          </p>
          <button className="get-started-btn" onClick={onGetStarted}>
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <div className="landing-stats">
            <div className="stat">
              <span className="stat-number">18+</span>
              <span className="stat-label">Plant Varieties</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Collections</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Natural</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
