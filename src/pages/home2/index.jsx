import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button/Button';
import image from '../../utils/helper';
import './home2.scss';

const Home2 = () => {
  return (
    <div className="home2-wrapper">
      <Header />
      
      <div className="home2-hero">
        <div className="home2-background">
          <img src={image['bg-green.avif']} alt="background" className="bg-image" />
          <img src={image['shade.avif']} alt="shade" className="shade-image" />
        </div>
        
        <div className="home2-container">
          <div className="home2-content">
            <div className="home2-left">
              <div className="home2-badge">
                <span className="badge-text">PROP FIRM</span>
              </div>
              
              <h1 className="home2-title">
                Built for Traders,<br />
                <span className="title-highlight">Backed by Professionals!</span>
              </h1>
              
              <p className="home2-description">
                Master your trading skills on our simulated trading platform, 
                improve your trading on a demo ARC Account with up to $300,000 
                and get a reward of up to 90% of your simulated profits
              </p>
              
              <div className="home2-buttons">
                <Button variant="primary" size="large" className="primary-btn">
                  ARC CHALLENGE
                </Button>
                <Button variant="secondary" size="large" className="secondary-btn">
                  Learn More
                </Button>
              </div>
              
              <div className="home2-stats">
                <div className="stat-item">
                  <div className="stat-number">90%+</div>
                  <div className="stat-label">Profit Split</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">300K+</div>
                  <div className="stat-label">Trading Accounts</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">No Limit</div>
                  <div className="stat-label">Time Restrictions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="home2-glow-effects">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home2;