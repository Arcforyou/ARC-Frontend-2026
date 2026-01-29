import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home2.scss';

const Home2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home2-wrapper">
      {/* Header */}
      <header className={`home2-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="home2-header__container">
          {/* Logo */}
          <Link to="/" className="home2-header__logo">
            for<span className="logo-highlight">traders</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="home2-header__nav">
            <div className="nav-item dropdown">
              <span className="nav-link">Challenges</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Link to="/rewards" className="nav-link">Rewards</Link>
            <div className="nav-item dropdown">
              <span className="nav-link">Academy</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Link to="/tournaments" className="nav-link">Tournaments</Link>
            <div className="nav-item dropdown">
              <span className="nav-link">About</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </nav>

          {/* Actions */}
          <div className="home2-header__actions">
            <div className="language-selector">
              <svg className="globe-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1 8h14M8 1a7 7 0 0 1 5.29 2.71A7 7 0 0 1 8 15a7 7 0 0 1-5.29-2.71A7 7 0 0 1 8 1z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>EN</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <button className="login-btn">Log In</button>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="home2-main">
        <div className="home2-container">
          <div className="home2-content">
            {/* Left Side Content */}
            <div className="home2-left">
              {/* Rating Badge */}
              <div className="rating-badge">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <span className="rating-score">4.8</span>
                <span className="rating-text">Prop Firm Match</span>
              </div>

              {/* Main Heading */}
              <h1 className="home2-title">
                Our Challenge.<br />
                Your Rules.
              </h1>

              {/* Feature Points */}
              <div className="feature-points">
                <div className="feature-point">
                  <div className="feature-label">No</div>
                  <div className="feature-value">Deposits</div>
                </div>
                <div className="feature-point">
                  <div className="feature-label">No personal</div>
                  <div className="feature-value">capital at risk</div>
                </div>
                <div className="feature-point">
                  <div className="feature-label">48 Hours</div>
                  <div className="feature-value">Reward Guarantee</div>
                </div>
                <div className="feature-point">
                  <div className="feature-label">Raw Spreads,</div>
                  <div className="feature-value">Low Commissions</div>
                </div>
              </div>

              {/* Description */}
              <p className="home2-description">
                Learn to trade Forex, Crypto, and Futures on our simulated 
                trading platform — and get rewarded with real cash for your 
                skills.
              </p>

              {/* Action Buttons */}
              <div className="home2-actions">
                <button className="primary-action-btn">Get Started</button>
                <button className="secondary-action-btn">How it works?</button>
              </div>
            </div>

            {/* Right Side - Video Placeholder (Not implemented as requested) */}
            <div className="home2-right">
              {/* Video section intentionally left empty as per requirements */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home2;