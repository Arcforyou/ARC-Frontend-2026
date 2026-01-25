import React from 'react';
import image from '../../utils/helper';
import Button from '../../components/Button/Button';
import TradingPlans from '../../components/TradingPlans/TradingPlans';
import './home.scss';
const Home = () => {
  return (
    <div className="home-main-wrapped ">
    <div className="hero-wrapped" >
      {/* <img src={image['bg.png']} alt='' /> */}
      <div className='first-gradient'></div>
      <div className='clip-image'>
        <img src={image['clip.svg']} alt='clip-img'/>
      </div>

      <div className='home-container'>
        <div className='main-content'>
          <div className='first-label'>ARC</div>
          <h1 className='title'>Built for Traders, <br />Backed by Professionals!</h1>
          <p>Master your trading skills on our simulated trading platform,
            improve your trading on a demo ARC Account with up to $300,000 and get a reward of up to 90% of your simulated profits</p>
          <Button variant="primary" size="large" className="hero-btn">
            ARC CHALLENGE
          </Button>
        </div>
      </div>
    </div>
        <div className='bottom-section'>
          <TradingPlans />
        </div>
      </div>
  );
};

export default Home;