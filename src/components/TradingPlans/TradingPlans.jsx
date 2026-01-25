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

  // Two-Phase Challenge data - values extracted from screenshots
  const twoPhaseChallengeData = {
    '6k': { amount: '$6K', price: '$42', strikePrice: '$49', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '15k': { amount: '$15K', price: '$84', strikePrice: '$99', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '25k': { amount: '$25K', price: '$152', strikePrice: '$179', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '50k': { amount: '$50K', price: '$212', strikePrice: '$249', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '100k': { amount: '$100K', price: '$375', strikePrice: '$469', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' }
  };

  // Instant Funding data (to be updated with next screenshots)
  const instantFundingData = {
    '6k': { amount: '$6K', price: '$42', strikePrice: '$49', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '15k': { amount: '$15K', price: '$84', strikePrice: '$99', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '25k': { amount: '$25K', price: '$152', strikePrice: '$179', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '50k': { amount: '$50K', price: '$212', strikePrice: '$249', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' },
    '100k': { amount: '$100K', price: '$375', strikePrice: '$469', profitTarget: '9%', maxDrawdown: '6%', dailyDrawdown: '3%', rewards: 'Bi-Weekly', profitSplit: '80%', timeLimit: 'Unlimited' }
  };

  const getCurrentData = () => {
    if (activeChallenge === 'two-step') {
      return twoPhaseChallengeData;
    } else if (activeChallenge === 'instant-master') {
      return instantFundingData;
    }
    return twoPhaseChallengeData;
  };

  // Define stage data for the challenge stages
  const stageData = {
    novice: {
      profitTarget: '8%',
      maxDailyLoss: '5%',
      maxOverallLoss: '10%',
      minTradingDays: '5 Days'
    },
    expert: {
      profitTarget: '5%',
      maxDailyLoss: '5%',
      maxOverallLoss: '10%',
      minTradingDays: '5 Days'
    },
    funded: {
      profitTarget: 'unlimited',
      maxDailyLoss: '5%',
      maxOverallLoss: '10%',
      minTradingDays: '5 Days'
    }
  };

  // Get selected account details
  const selectedAccountDetails = getCurrentData()[selectedAccount];

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
              {Object.keys(getCurrentData()).map((accountSize) => (
                <button
                  key={accountSize}
                  className={`trading-plans__account-btn ${selectedAccount === accountSize ? 'active' : ''}`}
                  onClick={() => setSelectedAccount(accountSize)}
                >
                  {getCurrentData()[accountSize].amount}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="trading-plans__table">
              {/* Header Row */}
              <div className="trading-plans__table-row trading-plans__table-header">
                <div className="trading-plans__feature-cell"></div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <div className="trading-plans__plan-amount">{getCurrentData()[accountSize].amount}</div>
                    <div className="trading-plans__plan-label">Virtual Capital</div>
                  </div>
                ))}
              </div>

              {/* AI Coach Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">🤖</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">AI Coach</span>
                    <span className="trading-plans__feature-subtitle">Your trading buddy</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <div className="included-badge">💰 Included</div>
                  </div>
                ))}
              </div>

              {/* Profit Target Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">🎯</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">Profit Target</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <span className="value-text">{getCurrentData()[accountSize].profitTarget}</span>
                  </div>
                ))}
              </div>

              {/* Max Drawdown Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">📉</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">Max Drawdown</span>
                    <span className="trading-plans__feature-subtitle">Trailing</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <span className="value-text">{getCurrentData()[accountSize].maxDrawdown}</span>
                  </div>
                ))}
              </div>

              {/* Daily Drawdown Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">⚡</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">Daily Drawdown</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <span className="value-text">{getCurrentData()[accountSize].dailyDrawdown}</span>
                  </div>
                ))}
              </div>

              {/* Rewards Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">💰</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">Rewards</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <span className="value-text">{getCurrentData()[accountSize].rewards}</span>
                  </div>
                ))}
              </div>

              {/* Profit Split Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">💹</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">Profit Split</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <span className="value-text">{getCurrentData()[accountSize].profitSplit}</span>
                  </div>
                ))}
              </div>

              {/* Time Limit Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">⏰</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">Time Limit</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <span className="value-text">{getCurrentData()[accountSize].timeLimit}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell">
                  <span className="trading-plans__feature-icon">💳</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">One-Time Fee</span>
                  </div>
                </div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <div className="trading-plans__pricing-cell">
                      <div className="trading-plans__plan-pricing">
                        <span className="current-price">{getCurrentData()[accountSize].price}</span>
                        <span className="strike-price">{getCurrentData()[accountSize].strikePrice}</span>
                      </div>
                      <div className="trading-plans__plan-badge">
                        {accountSize === '100k' ? '100KBOGO' : 'TRADE15'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="trading-plans__table-row">
                <div className="trading-plans__feature-cell"></div>
                {Object.keys(getCurrentData()).map((accountSize) => (
                  <div key={accountSize} className="trading-plans__value-cell">
                    <button className="trading-plans__plan-button">
                      Start Now
                    </button>
                  </div>
                ))}
              </div>
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
                    <span className="trading-plans__stage-value">{stageData.novice.profitTarget}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Daily Loss</span>
                    <span className="trading-plans__stage-value">{stageData.novice.maxDailyLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Overall Loss</span>
                    <span className="trading-plans__stage-value">{stageData.novice.maxOverallLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Minimum Trading Days</span>
                    <span className="trading-plans__stage-value">{stageData.novice.minTradingDays}</span>
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
                    <span className="trading-plans__stage-value">{stageData.expert.profitTarget}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Daily Loss</span>
                    <span className="trading-plans__stage-value">{stageData.expert.maxDailyLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Overall Loss</span>
                    <span className="trading-plans__stage-value">{stageData.expert.maxOverallLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Minimum Trading Days</span>
                    <span className="trading-plans__stage-value">{stageData.expert.minTradingDays}</span>
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
                    <span className="trading-plans__stage-value">{stageData.funded.profitTarget}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Daily Loss</span>
                    <span className="trading-plans__stage-value">{stageData.funded.maxDailyLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Maximum Overall Loss</span>
                    <span className="trading-plans__stage-value">{stageData.funded.maxOverallLoss}</span>
                  </div>
                  <div className="trading-plans__stage-row">
                    <span className="trading-plans__stage-feature">Minimum Trading Days</span>
                    <span className="trading-plans__stage-value">{stageData.funded.minTradingDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="trading-plans__pricing-section">
              <h3 className="trading-plans__pricing-title">
                {selectedAccountDetails.price} For {selectedAccountDetails.amount} account
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