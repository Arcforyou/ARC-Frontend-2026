import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home3.scss';
import image from '../../utils/helper';

const Home3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animatedTexts = [
    "90% Profit Split",
    "300K+ Trading Accounts",
    "Accounts Fully Customizable",
    "No Time Limit In Challenge Phase"
  ];

  return (
    <div className="home3-wrapper">
      {/* Background Video */}
      <div className="home3-video-background">
        <video autoPlay muted loop playsInline>
          <source src="/src/assets/images/crypto-bg.mp4" type="video/mp4" />
          <source src="/src/assets/images/crypto-bg.webm" type="video/webm" />
        </video>
        <div className="home3-video-overlay"></div>
      </div>

      {/* Header */}
      <header className={`home3-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="home3-header__container container">
          {/* Logo */}
          <Link to="/" className="home3-header__logo">
            <img src={image['logo.png']} alt="ARC Logo" className='w-24' />
          </Link>

          {/* Desktop Navigation */}
          <nav className="home3-header__nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/home2" className="nav-link">Home 2</Link>
            <Link to="/home3" className="nav-link active">Home 3</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/how-it-works" className="nav-link">How it Works</Link>
            <Link to="/about" className="nav-link">About us</Link>
            <Link to="/client-area" className="nav-link">Client Area</Link>
          </nav>

          {/* Actions */}
          <div className="home3-header__actions">
            <div className="language-selector">
              <svg className="globe-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1 8h14M8 1a7 7 0 0 1 5.29 2.71A7 7 0 0 1 8 15a7 7 0 0 1-5.29-2.71A7 7 0 0 1 8 1z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>EN</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <button className="login-btn">Log In</button>
            <button className="get-started-btn">Enter App</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="home3-main">
        <div className="container">
          <div className="home3-content">
            {/* Main Heading */}
            <h1 className="home3-title">
              Built for <span className="home3-title-highlight">Traders</span><br />
              Backed by Professionals!
            </h1>
            <div className='para'>
              Master your trading skills on our simulated trading platform,
              improve your trading on a demo ARC Account with up to $300,000 and get a reward of up to 90% of your simulated profits
            </div>
            {/* CTA Button */}
            <div className='cta'>
              <button className="home3-cta-button">
                ARC CHALLENGE
              </button>
              <button className="home3-cta-button bordered">
                Go To Dashboard
              </button>
            </div>
            {/* Animated Text Section */}
            <div className="home3-animated-text">
              <div className="home3-text-slider">
                {animatedTexts.map((text, index) => (
                  <div
                    key={index}
                    className="home3-slide-text"
                    style={{ animationDelay: `${index * 3}s` }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Floating Elements */}
        <div className="home3-floating-elements">
          {/* Crypto Icons */}
          <div className="crypto-icon crypto-icon-1">₿</div>
          <div className="crypto-icon crypto-icon-2">Ξ</div>
          <div className="crypto-icon crypto-icon-3">◊</div>
          <div className="crypto-icon crypto-icon-4">⚡</div>
          <div className="crypto-icon crypto-icon-5">▲</div>
          <div className="crypto-icon crypto-icon-6">$</div>
        </div>
      </main>
    </div>
  );
};

export default Home3;