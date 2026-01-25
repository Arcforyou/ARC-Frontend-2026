import React, { useState } from 'react';
import Button from '../Button/Button';
import './tradingPlans.scss';

const TradingPlans = () => {
  const [activeTab, setActiveTab] = useState('standard');
  const [activeChallenge, setActiveChallenge] = useState('two-step');
  const [selectedAccount, setSelectedAccount] = useState('15k');

  const tabs = [
    {
      id: 'standard',
      title: 'Standard Account',
      subtitle: 'Raw spreads and low commissions',
      icon: '€'
    },
    {
      id: 'customized',
      title: 'Customized Account',
      subtitle: '50+ Crypto coins to trade',
      icon: '₿'
    },
  ];

  const challengeTypes = [
    {
      id: 'two-step',
      title: 'Two-Phase Challenge',
      features: ['Traditional evaluation', '4% DD, 10% MD']
    },
    {
      id: 'instant-master',
      title: 'Instant Funding',
      features: ['Fastest rewards', 'No Challenge needed']
    }
  ];

  // Two-Phase Challenge data extracted from screenshots
  const twoPhaseChallengeData = {
    '15k': {
      amount: '$15k',
      price: '$79',
      novice: {
        profitTarget: '$1,200 (8%)',
        maxDailyLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: '$750 (5%)',
        maxDailyLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minTradingDays: '5 Days'
      },
      funded: {
        profitTarget: 'unlimited',
        maxDailyLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minTradingDays: '-'
      }
    },
    '25k': {
      amount: '$25k',
      price: '$179',
      novice: {
        profitTarget: '$2,000 (8%)',
        maxDailyLoss: '$1,250 (5%)',
        maxOverallLoss: '$2,500 (10%)',
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: '$1,250 (5%)',
        maxDailyLoss: '$1,250 (5%)',
        maxOverallLoss: '$2,500 (10%)',
        minTradingDays: '5 Days'
      },
      funded: {
        profitTarget: 'unlimited',
        maxDailyLoss: '$1,250 (5%)',
        maxOverallLoss: '$2,500 (10%)',
        minTradingDays: '-'
      }
    },
    '50k': {
      amount: '$50k',
      price: '$299',
      novice: {
        profitTarget: '$4,000 (8%)',
        maxDailyLoss: '$2,500 (5%)',
        maxOverallLoss: '$5,000 (10%)',
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: '$2,500 (5%)',
        maxDailyLoss: '$2,500 (5%)',
        maxOverallLoss: '$5,000 (10%)',
        minTradingDays: '5 Days'
      },
      funded: {
        profitTarget: 'unlimited',
        maxDailyLoss: '$2,500 (5%)',
        maxOverallLoss: '$5,000 (10%)',
        minTradingDays: '-'
      }
    },
    '100k': {
      amount: '$100k',
      price: '$549',
      novice: {
        profitTarget: '$8,000 (8%)',
        maxDailyLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: '$5,000 (5%)',
        maxDailyLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minTradingDays: '5 Days'
      },
      funded: {
        profitTarget: 'unlimited',
        maxDailyLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minTradingDays: '-'
      }
    },
    '200k': {
      amount: '$200k',
      price: '$999',
      novice: {
        profitTarget: '$10,000 (8%)',
        maxDailyLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: '$10,000 (5%)',
        maxDailyLoss: '$5,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minTradingDays: '5 Days'
      },
      funded: {
        profitTarget: 'unlimited',
        maxDailyLoss: '$10,000 (5%)',
        maxOverallLoss: '$10,000 (10%)',
        minTradingDays: '-'
      }
    }
  };

  // Placeholder data for Instant Funding (to be updated later)
  const instantFundingData = {
    '15k': {
      amount: '$15k',
      price: '$150',
      // Will be populated with next screenshots
    }
    // ... other account sizes
  };

  const getCurrentData = () => {
    if (activeChallenge === 'two-step') {
      return twoPhaseChallengeData[selectedAccount];
    } else if (activeChallenge === 'instant-master') {
      return instantFundingData[selectedAccount] || twoPhaseChallengeData[selectedAccount];
    }
    return twoPhaseChallengeData[selectedAccount];
  };

  const currentData = getCurrentData();

  return (
    <section className="trading-plans">
      <div className="container">
        <div className='main-inner'>
          {/* Tabs */}
          <div className="trading-plans__tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`trading-plans__tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="trading-plans__tab-icon">{tab.icon}</span>
                <div className="trading-plans__tab-content">
                  <h3 className="trading-plans__tab-title">{tab.title}</h3>
                  <p className="trading-plans__tab-subtitle">{tab.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          <div className='trading-plans__main-container'>
            {/* Challenge Types */}
            <div className="trading-plans__challenge-types">
              {challengeTypes.map((type) => (
                <div 
                  key={type.id} 
                  className={`trading-plans__challenge-type ${activeChallenge === type.id ? 'active' : ''}`}
                  onClick={() => setActiveChallenge(type.id)}
                >
                  <h4 className="trading-plans__challenge-title">{type.title}</h4>
                  <ul className="trading-plans__challenge-features">
                    {type.features.map((feature, index) => (
                      <li key={index} className="trading-plans__challenge-feature">
                        <span className="checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Account Size Selector */}
            <div className="trading-plans__account-selector">
              {Object.keys(twoPhaseChallengeData).map((accountSize) => (
                <button
                  key={accountSize}
                  className={`trading-plans__account-btn ${selectedAccount === accountSize ? 'active' : ''}`}
                  onClick={() => setSelectedAccount(accountSize)}
                >
                  {twoPhaseChallengeData[accountSize].amount}
                </button>
              ))}
            </div>

            {/* Challenge Stages */}
            <div className="trading-plans__stages">
              {/* Novice Stage */}
              <div className="trading-plans__stage trading-plans__stage--novice">
                <div className="trading-plans__stage-header">
                  <span className="trading-plans__stage-label">Funded Stage</span>
                  <h3 className="trading-plans__stage-title">Novice</h3>
                </div>
                <div className="trading-plans__stage-content">
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Profit Target</span>
                    <span className="trading-plans__stage-value">{currentData.novice.profitTarget}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Daily Loss</span>
                    <span className="trading-plans__stage-value">{currentData.novice.maxDailyLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Overall Loss</span>
                    <span className="trading-plans__stage-value">{currentData.novice.maxOverallLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Minimum Trading Days</span>
                    <span className="trading-plans__stage-value">{currentData.novice.minTradingDays}</span>
                  </div>
                </div>
              </div>

              {/* Expert Stage */}
              <div className="trading-plans__stage trading-plans__stage--expert">
                <div className="trading-plans__stage-header">
                  <span className="trading-plans__stage-label">Funded Stage</span>
                  <h3 className="trading-plans__stage-title">Expert</h3>
                </div>
                <div className="trading-plans__stage-content">
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Profit Target</span>
                    <span className="trading-plans__stage-value">{currentData.expert.profitTarget}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Daily Loss</span>
                    <span className="trading-plans__stage-value">{currentData.expert.maxDailyLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Overall Loss</span>
                    <span className="trading-plans__stage-value">{currentData.expert.maxOverallLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Minimum Trading Days</span>
                    <span className="trading-plans__stage-value">{currentData.expert.minTradingDays}</span>
                  </div>
                </div>
              </div>

              {/* ARC Funded Traders Stage */}
              <div className="trading-plans__stage trading-plans__stage--funded">
                <div className="trading-plans__stage-header">
                  <span className="trading-plans__stage-label">Funded Stage</span>
                  <h3 className="trading-plans__stage-title">ARC Funded Traders</h3>
                </div>
                <div className="trading-plans__stage-content">
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Profit Target</span>
                    <span className="trading-plans__stage-value">{currentData.funded.profitTarget}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Daily Loss</span>
                    <span className="trading-plans__stage-value">{currentData.funded.maxDailyLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Overall Loss</span>
                    <span className="trading-plans__stage-value">{currentData.funded.maxOverallLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Minimum Trading Days</span>
                    <span className="trading-plans__stage-value">{currentData.funded.minTradingDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="trading-plans__pricing-section">
              <h3 className="trading-plans__pricing-title">
                {currentData.price} For {currentData.amount} account
              </h3>
              <Button variant="primary" size="medium" className="trading-plans__cta-button">
                Start Challenge
              </Button>
            </div>

            {/* Bottom CTA */}
            <div className="trading-plans__bottom-cta">
              <div className="trading-plans__cta-content">
                <h3 className="trading-plans__cta-title">Are you a new customer?</h3>
                <p className="trading-plans__cta-subtitle">
                  Get an even bigger 20% discount on your first purchase!
                </p>
              </div>
              <div className="trading-plans__cta-actions">
                <div className="trading-plans__cta-code">
                  <span>Code: </span>
                  <span className="code">NEW20</span>
                  <span className="tooltip-icon">ⓘ</span>
                </div>
                <Button variant="primary" size="medium" className="new-customer-btn">
                  Start Now
                  <span className="button-subtitle">as a new customer</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlans;