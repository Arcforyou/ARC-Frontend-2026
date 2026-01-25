import React, { useState } from 'react';
import Button from '../Button/Button';
import './tradingPlans.scss';

const TradingPlans = () => {
  const [activeMainTab, setActiveMainTab] = useState('forex');
  const [activeChallengeType, setActiveChallengeType] = useState('one-step');

  // Main tabs data
  const mainTabs = [
    {
      id: 'forex',
      title: 'Forex',
      subtitle: 'Raw spreads and low commissions',
      icon: '€'
    },
    {
      id: 'crypto',
      title: 'Crypto',
      subtitle: '50+ Crypto coins to trade',
      icon: '₿'
    }
  ];

  // Challenge types for Forex
  const forexChallengeTypes = {
    'one-step': {
      title: 'One-Step',
      features: ['Fastest evaluation', 'Only 9% profit target'],
      badge: 'Popular',
      badgeColor: 'yellow'
    },
    'two-step': {
      title: 'Two-Step',
      features: ['Traditional evaluation', '4% DD, 10% MD'],
      badge: null
    },
    'three-step': {
      title: 'Three-Step',
      features: ['Cheapest evaluation', 'Lowest profit targets'],
      badge: null
    },
    'instant-master': {
      title: 'Instant Master',
      features: ['Fastest rewards', 'No Challenge needed'],
      badge: null
    },
    'instant-master-pro': {
      title: 'Instant Master PRO',
      features: ['Just one rule', 'No consistency & DD'],
      badge: 'Labs',
      badgeColor: 'red'
    }
  };

  // Data for One-Step Challenge (from first screenshot)
  const oneStepData = {
    '6k': {
      amount: '$6K',
      aiCoach: 'Included',
      profitTarget: '9%',
      maxDrawdown: '6%',
      dailyDrawdown: '3%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$42',
      strikePrice: '$49',
      code: 'TRADE15'
    },
    '15k': {
      amount: '$15K',
      aiCoach: 'Included',
      profitTarget: '9%',
      maxDrawdown: '6%',
      dailyDrawdown: '3%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$84',
      strikePrice: '$99',
      code: 'TRADE15'
    },
    '25k': {
      amount: '$25K',
      aiCoach: 'Included',
      profitTarget: '9%',
      maxDrawdown: '6%',
      dailyDrawdown: '3%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$152',
      strikePrice: '$179',
      code: 'TRADE15'
    },
    '50k': {
      amount: '$50K',
      aiCoach: 'Included',
      profitTarget: '9%',
      maxDrawdown: '6%',
      dailyDrawdown: '3%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$212',
      strikePrice: '$249',
      code: 'TRADE15'
    },
    '100k': {
      amount: '$100K',
      aiCoach: 'Included',
      profitTarget: '9%',
      maxDrawdown: '6%',
      dailyDrawdown: '3%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$375',
      strikePrice: '$469',
      code: '100KBOGO',
      highlight: true
    }
  };

  // Data for Two-Step Challenge (from second screenshot)
  const twoStepData = {
    '6k': {
      amount: '$6K',
      aiCoach: 'Included',
      profitTargetPhase1: '8%',
      profitTargetPhase2: '5%',
      maxDrawdown: '8%',
      dailyDrawdown: '4%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$57',
      strikePrice: '$67',
      code: 'TRADE15'
    },
    '15k': {
      amount: '$15K',
      aiCoach: 'Included',
      profitTargetPhase1: '8%',
      profitTargetPhase2: '5%',
      maxDrawdown: '8%',
      dailyDrawdown: '4%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$99',
      strikePrice: '$117',
      code: 'TRADE15'
    },
    '25k': {
      amount: '$25K',
      aiCoach: 'Included',
      profitTargetPhase1: '8%',
      profitTargetPhase2: '5%',
      maxDrawdown: '8%',
      dailyDrawdown: '4%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$174',
      strikePrice: '$205',
      code: 'TRADE15'
    },
    '50k': {
      amount: '$50K',
      aiCoach: 'Included',
      profitTargetPhase1: '8%',
      profitTargetPhase2: '5%',
      maxDrawdown: '8%',
      dailyDrawdown: '4%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$271',
      strikePrice: '$319',
      code: 'TRADE15'
    },
    '100k': {
      amount: '$100K',
      aiCoach: 'Included',
      profitTargetPhase1: '8%',
      profitTargetPhase2: '5%',
      maxDrawdown: '8%',
      dailyDrawdown: '4%',
      rewards: 'Bi-Weekly',
      profitSplit: '80%',
      timeLimit: 'Unlimited',
      price: '$455',
      strikePrice: '$569',
      code: '100KBOGO',
      highlight: true
    }
  };

  // Dummy data for other challenge types
  const dummyData = {
    '6k': {
      amount: '$6K',
      aiCoach: 'Included',
      profitTarget: '7%',
      maxDrawdown: '5%',
      dailyDrawdown: '2%',
      rewards: 'Weekly',
      profitSplit: '85%',
      timeLimit: 'Unlimited',
      price: '$35',
      strikePrice: '$42',
      code: 'TRADE15'
    },
    '15k': {
      amount: '$15K',
      aiCoach: 'Included',
      profitTarget: '7%',
      maxDrawdown: '5%',
      dailyDrawdown: '2%',
      rewards: 'Weekly',
      profitSplit: '85%',
      timeLimit: 'Unlimited',
      price: '$75',
      strikePrice: '$89',
      code: 'TRADE15'
    },
    '25k': {
      amount: '$25K',
      aiCoach: 'Included',
      profitTarget: '7%',
      maxDrawdown: '5%',
      dailyDrawdown: '2%',
      rewards: 'Weekly',
      profitSplit: '85%',
      timeLimit: 'Unlimited',
      price: '$135',
      strikePrice: '$159',
      code: 'TRADE15'
    },
    '50k': {
      amount: '$50K',
      aiCoach: 'Included',
      profitTarget: '7%',
      maxDrawdown: '5%',
      dailyDrawdown: '2%',
      rewards: 'Weekly',
      profitSplit: '85%',
      timeLimit: 'Unlimited',
      price: '$195',
      strikePrice: '$229',
      code: 'TRADE15'
    },
    '100k': {
      amount: '$100K',
      aiCoach: 'Included',
      profitTarget: '7%',
      maxDrawdown: '5%',
      dailyDrawdown: '2%',
      rewards: 'Weekly',
      profitSplit: '85%',
      timeLimit: 'Unlimited',
      price: '$325',
      strikePrice: '$399',
      code: '100KBOGO',
      highlight: true
    }
  };

  // Get current data based on active challenge type
  const getCurrentData = () => {
    if (activeMainTab === 'crypto') {
      return {}; // Empty for crypto as requested
    }
    
    switch (activeChallengeType) {
      case 'one-step':
        return oneStepData;
      case 'two-step':
        return twoStepData;
      default:
        return dummyData;
    }
  };

  const currentData = getCurrentData();
  const accountSizes = Object.keys(currentData);

  return (
    <section className="trading-plans-new">
      <div className="container">
        {/* Main Tabs */}
        <div className="trading-plans-new__main-tabs">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              className={`trading-plans-new__main-tab ${activeMainTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveMainTab(tab.id)}
            >
              <span className="trading-plans-new__main-tab-icon">{tab.icon}</span>
              <div className="trading-plans-new__main-tab-content">
                <h3 className="trading-plans-new__main-tab-title">{tab.title}</h3>
                <p className="trading-plans-new__main-tab-subtitle">{tab.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Challenge Types */}
        {activeMainTab === 'forex' && (
          <div className="trading-plans-new__challenge-types">
            {Object.entries(forexChallengeTypes).map(([key, challenge]) => (
              <div
                key={key}
                className={`trading-plans-new__challenge-type ${activeChallengeType === key ? 'active' : ''}`}
                onClick={() => setActiveChallengeType(key)}
              >
                {challenge.badge && (
                  <div className={`trading-plans-new__challenge-badge ${challenge.badgeColor}`}>
                    {challenge.badge}
                  </div>
                )}
                <h4 className="trading-plans-new__challenge-title">{challenge.title}</h4>
                <ul className="trading-plans-new__challenge-features">
                  {challenge.features.map((feature, index) => (
                    <li key={index} className="trading-plans-new__challenge-feature">
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Crypto Empty State */}
        {activeMainTab === 'crypto' && (
          <div className="trading-plans-new__empty-state">
            <p>Crypto trading plans coming soon...</p>
          </div>
        )}

        {/* Vertical Table */}
        {activeMainTab === 'forex' && accountSizes.length > 0 && (
          <div className="trading-plans-new__table">
            {/* Account Size Headers */}
            <div className="trading-plans-new__account-headers">
              <div className="trading-plans-new__feature-column"></div>
              {accountSizes.map((size) => (
                <div 
                  key={size} 
                  className={`trading-plans-new__account-header ${currentData[size].highlight ? 'highlight' : ''}`}
                >
                  {currentData[size].highlight && (
                    <div className="trading-plans-new__bogo-badge">100K BOGO OFFER</div>
                  )}
                  <h3 className="trading-plans-new__account-amount">{currentData[size].amount}</h3>
                  <p className="trading-plans-new__account-label">Virtual Capital</p>
                </div>
              ))}
            </div>

            {/* AI Coach Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">🤖</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">AI Coach</span>
                  <span className="trading-plans-new__feature-subtitle">Your trading buddy</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <div className="trading-plans-new__included-badge">⚡ Included</div>
                </div>
              ))}
            </div>

            {/* Profit Target Row(s) */}
            {activeChallengeType === 'two-step' ? (
              <>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon">🎯</span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Target</span>
                      <span className="trading-plans-new__feature-subtitle">Phase 1</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].profitTargetPhase1}</span>
                    </div>
                  ))}
                </div>
                <div className="trading-plans-new__table-row">
                  <div className="trading-plans-new__feature-cell">
                    <span className="trading-plans-new__feature-icon">🎯</span>
                    <div className="trading-plans-new__feature-text">
                      <span className="trading-plans-new__feature-title">Profit Target</span>
                      <span className="trading-plans-new__feature-subtitle">Phase 2</span>
                    </div>
                  </div>
                  {accountSizes.map((size) => (
                    <div key={size} className="trading-plans-new__value-cell">
                      <span className="trading-plans-new__value-text">{currentData[size].profitTargetPhase2}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="trading-plans-new__table-row">
                <div className="trading-plans-new__feature-cell">
                  <span className="trading-plans-new__feature-icon">🎯</span>
                  <div className="trading-plans-new__feature-text">
                    <span className="trading-plans-new__feature-title">Profit Target</span>
                  </div>
                </div>
                {accountSizes.map((size) => (
                  <div key={size} className="trading-plans-new__value-cell">
                    <span className="trading-plans-new__value-text">{currentData[size].profitTarget}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Max Drawdown Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">📉</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">Max Drawdown</span>
                  <span className="trading-plans-new__feature-subtitle">Trailing</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <span className="trading-plans-new__value-text">{currentData[size].maxDrawdown}</span>
                </div>
              ))}
            </div>

            {/* Daily Drawdown Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">⚡</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">Daily Drawdown</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <span className="trading-plans-new__value-text">{currentData[size].dailyDrawdown}</span>
                </div>
              ))}
            </div>

            {/* Rewards Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">💰</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">Rewards</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <span className="trading-plans-new__value-text">{currentData[size].rewards}</span>
                </div>
              ))}
            </div>

            {/* Profit Split Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">💹</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">Profit Split</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <span className="trading-plans-new__value-text">{currentData[size].profitSplit}</span>
                </div>
              ))}
            </div>

            {/* Time Limit Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">⏰</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">Time Limit</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <span className="trading-plans-new__value-text">{currentData[size].timeLimit}</span>
                </div>
              ))}
            </div>

            {/* One-Time Fee Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell">
                <span className="trading-plans-new__feature-icon">💳</span>
                <div className="trading-plans-new__feature-text">
                  <span className="trading-plans-new__feature-title">One-Time Fee</span>
                </div>
              </div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <div className="trading-plans-new__pricing">
                    <span className="trading-plans-new__current-price">{currentData[size].price}</span>
                    <span className="trading-plans-new__strike-price">{currentData[size].strikePrice}</span>
                  </div>
                  <div className="trading-plans-new__discount-code">{currentData[size].code}</div>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="trading-plans-new__table-row">
              <div className="trading-plans-new__feature-cell"></div>
              {accountSizes.map((size) => (
                <div key={size} className="trading-plans-new__value-cell">
                  <button 
                    className={`trading-plans-new__cta-button ${currentData[size].highlight ? 'highlight' : ''}`}
                  >
                    Start Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TradingPlans;