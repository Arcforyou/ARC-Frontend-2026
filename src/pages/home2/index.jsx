import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home2.scss';
import image from '../../utils/helper';

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
      <header className={`home2-header container   ${isScrolled ? 'scrolled' : ''}`}>
        <div className="home2-header__container ">
          {/* Logo */}
          <Link to="/" className="home2-header__logo">
            <img src={image['logo.png']} alt="ARC Logo" className='w-24'/>
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
        <img src={image['shade.avif']} alt='img' className='shade-img'/>
        <div className="container">
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
                Built for Traders,<br />
                Backed by Professionals!.
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
                Master your trading skills on our simulated trading platform,
              improve your trading on a demo ARC Account with up to $300,000 and get a reward of up to 90% of your simulated profits.
              </p>

              {/* Action Buttons */}
              <div className="home2-actions">
                <button className="primary-action-btn"> ARC CHALLENGE</button>
                <button className="secondary-action-btn">How it works?</button>
              </div>
            </div>

            {/* Right Side - Video Placeholder (Not implemented as requested) */}
            <div className="home2-right">
              <img src={image['graph-green.png']} alt='img' className='w-full' />
              {/* Video section intentionally left empty as per requirements */}
            </div>
          </div>
        </div>
        {/* <img src={image['bg-green.avif']} alt='img' className='shade-img'/> */}

      </main>
    </div>
  );
};

export default Home2;