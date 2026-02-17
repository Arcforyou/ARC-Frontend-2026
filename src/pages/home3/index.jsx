import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home3.scss';
import image from '../../utils/helper';
import PricingSection from './Pricingtabl';

const Home3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePhase, setActivePhase] = useState('one-phase');
  const [activeSubTab, setActiveSubTab] = useState('classic');
  const [activeAccountSize, setActiveAccountSize] = useState('5k');
  const [activePhaseTab, setActivePhaseTab] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  const accountSizes = ['5k', '10k', '25k', '50k', '100k'];

  // Function to handle account size change with animation
  const handleAccountSizeChange = (size, index) => {
    setActiveAccountSize(size);
    
    if (tabRefs.current[index] && tabsRef.current) {
      const tab = tabRefs.current[index];
      const container = tabsRef.current;
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      
      const position = tabRect.left - containerRect.left;
      const width = tabRect.width;
      
      setIndicatorPosition(position);
      setIndicatorWidth(width);
    }
  };

  // Function to get current pricing data based on active selections
  const getCurrentData = () => {
    const pricingData = {
      'one-phase': {
        badge: 'Recommended',
        badgeType: 'recommended',
        title: 'One Phase, 1 step',
        phaseTitle: 'One Phase',
        phases: [
          {
            name: 'Phase 1',
            features: [
              { title: 'Profit Target', value: activeAccountSize === '5k' ? '$500' : activeAccountSize === '10k' ? '$1,000' : activeAccountSize === '25k' ? '$2,500' : activeAccountSize === '50k' ? '$5,000' : '$10,000', description: '10%' },
              { title: 'Daily Loss Limit', value: '3%', description: 'This is calculated based on the balance recorded at the end of the previous day (5PM EST time). If equity goes below this level, it is a breach of the account.' },
              { title: 'Max Trailing Drawdown', value: '6%', description: 'Trailing drawdown - 6% trails your closed trading balance until you reach 6% profits in your account. Once you have achieved 6% of the initial balance in your account, the Max drawdown stops trailing; it LOCKS at your starting balance. The MAX trailing drawdown also locks at initial balance, stops trailing, if a payout gets processed.' },
              { title: 'Refundable Fee', value: '100%' }
            ]
          },
          {
            name: 'Funded',
            features: [
              { title: 'Profit Target', value: 'Unlimited' },
              { title: 'Daily Loss Limit', value: '3%' },
              { title: 'Max Trailing Drawdown', value: '6%' },
              { title: 'Profit Split', value: 'Up to 90%' }
            ]
          }
        ],
        allPlans: {
          minTradingDays: '5 Days',
          maxTradingDays: 'Unlimited',
          performanceSplit: 'up to 90%',
          leverage: 'up to 50:1',
          drawdownType: 'Trailing',
          easAllowed: 'Yes',
          refund: '100%',
          holdOverWeekend: 'Yes',
          tradeNews: 'Yes',
          platform: 'MT4, MT5, DXTrade or TradingView'
        }
      },
      'two-phase': {
        badge: 'For Beginners',
        badgeType: 'beginners',
        title: `Two Phase - ${activeSubTab === 'classic' ? 'Classic' : 'Standard'}, 2 steps`,
        phaseTitle: 'Two Phase',
        phases: [
          {
            name: 'Phase 1',
            features: [
              { title: 'Profit Target', value: activeAccountSize === '5k' ? '$250' : activeAccountSize === '10k' ? '$500' : activeAccountSize === '25k' ? '$1,250' : activeAccountSize === '50k' ? '$2,500' : '$5,000', description: '5%' },
              { title: 'Daily Loss Limit', value: '4%', description: 'This is calculated based on the balance recorded at the end of the previous day (5PM EST time). If equity goes below this level, it is a breach of the account.' },
              { title: 'Max Static Drawdown', value: '10%' },
              { title: 'Consistency Rule', value: 'N/A' }
            ]
          },
          {
            name: 'Phase 2',
            features: [
              { title: 'Profit Target', value: activeAccountSize === '5k' ? '$250' : activeAccountSize === '10k' ? '$500' : activeAccountSize === '25k' ? '$1,250' : activeAccountSize === '50k' ? '$2,500' : '$5,000', description: '5%' },
              { title: 'Daily Loss Limit', value: '4%' },
              { title: 'Max Static Drawdown', value: '10%' },
              { title: 'Consistency Rule', value: 'N/A' }
            ]
          },
          {
            name: 'Funded',
            features: [
              { title: 'Profit Target', value: 'Unlimited' },
              { title: 'Daily Loss Limit', value: '4%' },
              { title: 'Max Static Drawdown', value: '10%' },
              { title: 'Profit Split', value: 'Up to 100%' }
            ]
          }
        ],
        allPlans: {
          minTradingDays: '4 days',
          maxTradingDays: 'Unlimited',
          performanceSplit: 'up to 100%',
          leverage: 'up to 30:1',
          drawdownType: 'Static',
          easAllowed: 'Yes',
          refund: '100%',
          holdOverWeekend: 'Yes',
          tradeNews: 'Yes',
          platform: 'MT4, MT5, DXTrade or TradingView',
          drawdownLockUponPayout: 'No',
          payoutOnDemand: 'No',
          payoutFrequency: '14 or 30 Days'
        }
      },
      'instant-funding': {
        badge: 'Most popular',
        badgeType: 'popular',
        title: `Instant Funding - ${activeSubTab === 'standard' ? 'Standard' : 'Lite'}, 0 steps`,
        phaseTitle: 'Instant Funding',
        phases: [
          {
            name: 'Funded',
            features: [
              { title: 'Profit Target', value: '-' },
              { title: 'Daily Loss Limit', value: '8%', description: 'This is calculated based on the balance recorded at the end of the previous day (5PM EST time). If equity goes below this level, it is a breach of the account.' },
              { title: 'Max Trailing Drawdown', value: '8%', description: 'Trailing drawdown - 8% trails your closed trading balance until you reach 8% profits in your account. Once you have achieved 8% of the initial balance in your account, the MAX drawdown stops trailing; it LOCKS at your starting balance. The MAX trailing drawdown also locks at initial balance, stops trailing, if a payout gets processed.' }
            ]
          }
        ],
        allPlans: {
          minTradingDays: 'N/A',
          maxTradingDays: 'N/A',
          performanceSplit: 'Up to 90%',
          leverage: 'Up to 50:1',
          drawdownType: 'Trailing',
          easAllowed: 'No',
          refund: 'No',
          holdOverWeekend: 'No',
          tradeNews: 'No',
          platform: 'MT5, DXTrade or TradingView'
        }
      }
    };

    const currentPlan = pricingData[activePhase];
    
    // Calculate pricing based on account size
    const getPricing = () => {
      const basePrices = {
        'one-phase': { '5k': 46, '10k': 89, '25k': 155, '50k': 289, '100k': 549 },
        'two-phase': { '5k': 46, '10k': 89, '25k': 155, '50k': 289, '100k': 549 },
        'instant-funding': { '5k': 53, '10k': 89, '25k': 701, '50k': 1299, '100k': 2499 }
      };
      
      const originalPrices = {
        'one-phase': { '5k': 59, '10k': 119, '25k': 199, '50k': 379, '100k': 719 },
        'two-phase': { '5k': 59, '10k': 119, '25k': 199, '50k': 379, '100k': 719 },
        'instant-funding': { '5k': 69, '10k': 119, '25k': 899, '50k': 1699, '100k': 3299 }
      };
      
      return {
        price: basePrices[activePhase][activeAccountSize],
        originalPrice: originalPrices[activePhase][activeAccountSize]
      };
    };

    const pricing = getPricing();
    
    return {
      ...currentPlan,
      price: pricing.price,
      originalPrice: pricing.originalPrice
    };
  };
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
            <span className="home3-title-highlight"> ARC</span> Built for <span className="home3-title-highlight">Traders</span><br />
              <span style={{fontSize:'60px'}}>Backed by Professionals!</span>
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

      <PricingSection/>
    </div>
  );
};

export default Home3;