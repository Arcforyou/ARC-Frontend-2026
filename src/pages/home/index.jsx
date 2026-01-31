import React, { useEffect, useRef } from 'react';
import image from '../../utils/helper';
import Button from '../../components/Button/Button';
import TradingPlans from '../../components/TradingPlans/TradingPlans';
import { Footer, Rewards } from '../../components';
import './home.scss';
import gsap from "gsap";
import SplitType from "split-type"
import Header from '../../components/Header';

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: "chars", // words | lines | chars
    });

    gsap.from(split.chars, {
      x: -100,
      opacity: 0,
      stagger: 0.04,
      duration: 0.7,
      ease: "power3.out",
    });

    return () => split.revert(); // cleanup (important for React)
  }, []);
  return (
    <>
      <Header />
      <div className="home-main-wrapped">
        <div className="hero-wrapped" >
          {/* <img src={image['bg.png']} alt='' /> */}
          <div className='first-gradient'></div>
          <div className='clip-image'>
            <img src={image['clip.svg']} alt='clip-img' />
          </div>
          <div className='home-container'>
            <div className='main-content'>
              <div className='first-label'>ARC</div>
              <h1 className='title' ref={textRef}>Built for Traders, <br />Backed by Professionals!</h1>
              <p>Master your trading skills on our simulated trading platform,
                improve your trading on a demo ARC Account with up to $300,000 and get a reward of up to 90% of your simulated profits</p>
              <Button variant="primary" size="large" className="hero-btn">
                ARC CHALLENGE
              </Button>

              {/* Feature Cards Section */}
            </div>
            <div className="feature-cards-section">
              <div className="feature-card" style={{ animationDelay: '0.2s' }}>
                <div className="feature-card-content">
                  <div className="feature-card-text">
                    <h3 className="feature-card-title">90%+</h3>
                    <h4 className="feature-card-subtitle">Profit Split</h4>
                  </div>
                  <div className="feature-card-visual">
                    <div className="chart-container">
                      {/* <div className="donut-chart">
                      <svg viewBox="0 0 42 42" className="donut">
                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="3"/>
                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="90 10" strokeDashoffset="25"/>
                      </svg>
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00D4FF"/>
                          <stop offset="100%" stopColor="#B8FF3C"/>
                        </linearGradient>
                      </defs>
                    </div> */}
                      <div className="bar-chart">
                        <div className="bar" style={{ height: '60%' }}></div>
                        <div className="bar" style={{ height: '80%' }}></div>
                        <div className="bar" style={{ height: '40%' }}></div>
                        <div className="bar" style={{ height: '90%' }}></div>
                        <div className="bar" style={{ height: '70%' }}></div>
                      </div>
                    </div>
                    {/* <div className="trading-chart">
                    <div className="chart-line">
                      <svg viewBox="0 0 200 80" className="line-chart">
                        <path d="M10,60 Q50,20 90,40 T170,20" stroke="url(#gradient2)" strokeWidth="2" fill="none"/>
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00D4FF"/>
                            <stop offset="100%" stopColor="#B8FF3C"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="chart-bars">
                      <div className="mini-bar" style={{ height: '30%' }}></div>
                      <div className="mini-bar" style={{ height: '60%' }}></div>
                      <div className="mini-bar" style={{ height: '45%' }}></div>
                      <div className="mini-bar" style={{ height: '80%' }}></div>
                      <div className="mini-bar" style={{ height: '55%' }}></div>
                      <div className="mini-bar" style={{ height: '90%' }}></div>
                      <div className="mini-bar" style={{ height: '70%' }}></div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>

              <div className="feature-card" style={{ animationDelay: '0.4s' }}>
                <div className="feature-card-content">
                  <div className="feature-card-text">
                    <h3 className="feature-card-title">300K+</h3>
                    <h4 className="feature-card-subtitle">Trading Accounts</h4>
                  </div>
                  {/* <div className="feature-card-visual">
                  <div className="chart-container">
                    <div className="donut-chart">
                      <svg viewBox="0 0 42 42" className="donut">
                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="3"/>
                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="url(#gradient3)" strokeWidth="3" strokeDasharray="75 25" strokeDashoffset="25"/>
                      </svg>
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6f42c1"/>
                          <stop offset="100%" stopColor="#00D4FF"/>
                        </linearGradient>
                      </defs>
                    </div>
                    <div className="bar-chart">
                      <div className="bar" style={{ height: '70%' }}></div>
                      <div className="bar" style={{ height: '50%' }}></div>
                      <div className="bar" style={{ height: '85%' }}></div>
                      <div className="bar" style={{ height: '65%' }}></div>
                      <div className="bar" style={{ height: '90%' }}></div>
                    </div>
                  </div>
                  <div className="trading-chart">
                    <div className="chart-line">
                      <svg viewBox="0 0 200 80" className="line-chart">
                        <path d="M10,50 Q50,30 90,35 T170,25" stroke="url(#gradient4)" strokeWidth="2" fill="none"/>
                        <defs>
                          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6f42c1"/>
                            <stop offset="100%" stopColor="#00D4FF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="chart-bars">
                      <div className="mini-bar" style={{ height: '40%' }}></div>
                      <div className="mini-bar" style={{ height: '70%' }}></div>
                      <div className="mini-bar" style={{ height: '55%' }}></div>
                      <div className="mini-bar" style={{ height: '85%' }}></div>
                      <div className="mini-bar" style={{ height: '65%' }}></div>
                      <div className="mini-bar" style={{ height: '95%' }}></div>
                      <div className="mini-bar" style={{ height: '75%' }}></div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>

              <div className="feature-card" style={{ animationDelay: '0.6s' }}>
                <div className="feature-card-content">
                  <div className="feature-card-text">
                    <h3 className="feature-card-title">Fully Customizable</h3>
                    <h4 className="feature-card-subtitle">Accounts</h4>
                  </div>
                  {/* <div className="feature-card-visual">
                  <div className="chart-container">
                    <div className="settings-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="url(#gradient5)" strokeWidth="2"/>
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="url(#gradient5)" strokeWidth="2"/>
                        <defs>
                          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00D4FF"/>
                            <stop offset="100%" stopColor="#6f42c1"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="controls-panel">
                    <div className="control-row">
                      <div className="control-bar">
                        <div className="control-track"></div>
                        <div className="control-thumb" style={{ left: '60%' }}></div>
                      </div>
                      <div className="control-toggle active"></div>
                    </div>
                    <div className="control-row">
                      <div className="control-bar">
                        <div className="control-track"></div>
                        <div className="control-thumb" style={{ left: '40%' }}></div>
                      </div>
                      <div className="control-toggle"></div>
                    </div>
                    <div className="control-row">
                      <div className="control-bar">
                        <div className="control-track"></div>
                        <div className="control-thumb" style={{ left: '80%' }}></div>
                      </div>
                      <div className="control-toggle active"></div>
                    </div>
                    <div className="control-row">
                      <div className="control-bar">
                        <div className="control-track"></div>
                        <div className="control-thumb" style={{ left: '30%' }}></div>
                      </div>
                      <div className="control-toggle active"></div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>

              <div className="feature-card" style={{ animationDelay: '0.8s' }}>
                <div className="feature-card-content">
                  <div className="feature-card-text">
                    <h3 className="feature-card-title">No time limit</h3>
                    <h4 className="feature-card-subtitle">in challenge phase</h4>
                  </div>
                  {/* <div className="feature-card-visual">
                  <div className="time-visual">
                    <div className="calendar-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="url(#gradient6)" strokeWidth="2"/>
                        <line x1="16" y1="2" x2="16" y2="6" stroke="url(#gradient6)" strokeWidth="2"/>
                        <line x1="8" y1="2" x2="8" y2="6" stroke="url(#gradient6)" strokeWidth="2"/>
                        <line x1="3" y1="10" x2="21" y2="10" stroke="url(#gradient6)" strokeWidth="2"/>
                        <circle cx="12" cy="16" r="2" fill="url(#gradient6)"/>
                        <defs>
                          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#B8FF3C"/>
                            <stop offset="100%" stopColor="#00D4FF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="clock-container">
                      <div className="clock-face">
                        <svg viewBox="0 0 100 100" className="clock">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient7)" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                          <line x1="50" y1="50" x2="50" y2="25" stroke="url(#gradient7)" strokeWidth="3" strokeLinecap="round"/>
                          <line x1="50" y1="50" x2="65" y2="35" stroke="url(#gradient7)" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="50" cy="50" r="3" fill="url(#gradient7)"/>
                          <defs>
                            <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#00D4FF"/>
                              <stop offset="100%" stopColor="#B8FF3C"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-section'>
          <Rewards />
          <TradingPlans />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;