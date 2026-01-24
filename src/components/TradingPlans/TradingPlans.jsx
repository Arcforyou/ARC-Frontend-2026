import React, { useState } from 'react';
import Button from '../Button/Button';
import './tradingPlans.scss';

const TradingPlans = () => {
  const [activeTab, setActiveTab] = useState('forex');
  const [activeChallenge, setActiveChallenge] = useState('one-step');
  const [selectedMobileAccount, setSelectedMobileAccount] = useState('6k');

  const tabs = [
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
    },
    {
      id: 'futures',
      title: 'Futures',
      subtitle: 'Professional Futures trading platform',
      icon: '🚀'
    }
  ];

  const challengeTypes = [
    {
      id: 'one-step',
      title: 'One-Step',
      badge: 'Popular',
      features: ['Fastest evaluation', 'Only 9% profit target'],
      isActive: true
    },
    {
      id: 'two-step',
      title: 'Two-Step',
      features: ['Traditional evaluation', '4% DD, 10% MD']
    },
    {
      id: 'three-step',
      title: 'Three-Step',
      features: ['Cheapest evaluation', 'Lowest profit targets']
    },
    {
      id: 'instant-master',
      title: 'Instant Master',
      features: ['Fastest rewards', 'No Challenge needed']
    },
    {
      id: 'instant-master-pro',
      title: 'Instant Master PRO',
      badge: 'Labs',
      features: ['Just one rule', 'No consistency & DD']
    }
  ];

  const plans = [
    {
      amount: '$6K',
      price: '$42',
      strikePrice: '$49',
      badge: 'TRADE15'
    },
    {
      amount: '$15K',
      price: '$84',
      strikePrice: '$99',
      badge: 'TRADE15'
    },
    {
      amount: '$25K',
      price: '$152',
      strikePrice: '$179',
      badge: 'TRADE15'
    },
    {
      amount: '$50K',
      price: '$212',
      strikePrice: '$249',
      badge: 'TRADE15'
    },
    {
      amount: '$100K',
      price: '$375',
      strikePrice: '$469',
      badge: '100KBOGO',
      highlight: true,
      offer: '100K BOGO OFFER'
    }
  ];

  const features = [
    { 
      icon: '🤖', 
      title: 'AI Coach', 
      subtitle: 'Your trading buddy',
      values: ['💰 Included', '💰 Included', '💰 Included', '💰 Included', '💰 Included']
    },
    { 
      icon: '🎯', 
      title: 'Profit Target',
      values: ['9%', '9%', '9%', '9%', '9%']
    },
    { 
      icon: '📉', 
      title: 'Max Drawdown', 
      subtitle: 'Trailing',
      values: ['6%', '6%', '6%', '6%', '6%']
    },
    { 
      icon: '⚡', 
      title: 'Daily Drawdown',
      values: ['3%', '3%', '3%', '3%', '3%']
    },
    { 
      icon: '🎁', 
      title: 'Rewards',
      values: ['Bi-Weekly', 'Bi-Weekly', 'Bi-Weekly', 'Bi-Weekly', 'Bi-Weekly']
    },
    { 
      icon: '💰', 
      title: 'Profit Split',
      values: ['80%', '80%', '80%', '80%', '80%']
    },
    { 
      icon: '⏰', 
      title: 'Time Limit',
      values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited']
    },
    { 
      icon: '💳', 
      title: 'One-Time Fee',
      values: [
        { price: '$42', strike: '$49', badge: 'TRADE15' },
        { price: '$84', strike: '$99', badge: 'TRADE15' },
        { price: '$152', strike: '$179', badge: 'TRADE15' },
        { price: '$212', strike: '$249', badge: 'TRADE15' },
        { price: '$375', strike: '$469', badge: '100KBOGO' }
      ]
    }
  ];

  const mobileAccountData = {
    '6k': {
      amount: '$6K',
      price: '$42',
      strikePrice: '$49',
      badge: 'TRADE15',
      features: [
        { icon: '🤖', title: 'AI Coach', subtitle: 'Your trading buddy', value: '💰 Included', isIncluded: true },
        { icon: '🎯', title: 'Profit Target', value: '9%' },
        { icon: '📉', title: 'Max Drawdown', subtitle: 'Trailing', value: '6%' },
        { icon: '⚡', title: 'Daily Drawdown', value: '3%' },
        { icon: '🎁', title: 'Rewards', value: 'Bi-Weekly' },
        { icon: '💰', title: 'Profit Split', value: '80%' },
        { icon: '⏰', title: 'Time Limit', value: 'Unlimited' }
      ]
    },
    '15k': {
      amount: '$15K',
      price: '$84',
      strikePrice: '$99',
      badge: 'TRADE15',
      features: [
        { icon: '🤖', title: 'AI Coach', subtitle: 'Your trading buddy', value: '💰 Included', isIncluded: true },
        { icon: '🎯', title: 'Profit Target', value: '9%' },
        { icon: '📉', title: 'Max Drawdown', subtitle: 'Trailing', value: '6%' },
        { icon: '⚡', title: 'Daily Drawdown', value: '3%' },
        { icon: '🎁', title: 'Rewards', value: 'Bi-Weekly' },
        { icon: '💰', title: 'Profit Split', value: '80%' },
        { icon: '⏰', title: 'Time Limit', value: 'Unlimited' }
      ]
    },
    '25k': {
      amount: '$25K',
      price: '$152',
      strikePrice: '$179',
      badge: 'TRADE15',
      features: [
        { icon: '🤖', title: 'AI Coach', subtitle: 'Your trading buddy', value: '💰 Included', isIncluded: true },
        { icon: '🎯', title: 'Profit Target', value: '9%' },
        { icon: '📉', title: 'Max Drawdown', subtitle: 'Trailing', value: '6%' },
        { icon: '⚡', title: 'Daily Drawdown', value: '3%' },
        { icon: '🎁', title: 'Rewards', value: 'Bi-Weekly' },
        { icon: '💰', title: 'Profit Split', value: '80%' },
        { icon: '⏰', title: 'Time Limit', value: 'Unlimited' }
      ]
    },
    '50k': {
      amount: '$50K',
      price: '$212',
      strikePrice: '$249',
      badge: 'TRADE15',
      features: [
        { icon: '🤖', title: 'AI Coach', subtitle: 'Your trading buddy', value: '💰 Included', isIncluded: true },
        { icon: '🎯', title: 'Profit Target', value: '9%' },
        { icon: '📉', title: 'Max Drawdown', subtitle: 'Trailing', value: '6%' },
        { icon: '⚡', title: 'Daily Drawdown', value: '3%' },
        { icon: '🎁', title: 'Rewards', value: 'Bi-Weekly' },
        { icon: '💰', title: 'Profit Split', value: '80%' },
        { icon: '⏰', title: 'Time Limit', value: 'Unlimited' }
      ]
    },
    '100k': {
      amount: '$100K',
      price: '$375',
      strikePrice: '$469',
      badge: '100KBOGO',
      highlight: true,
      features: [
        { icon: '🤖', title: 'AI Coach', subtitle: 'Your trading buddy', value: '💰 Included', isIncluded: true },
        { icon: '🎯', title: 'Profit Target', value: '9%' },
        { icon: '📉', title: 'Max Drawdown', subtitle: 'Trailing', value: '6%' },
        { icon: '⚡', title: 'Daily Drawdown', value: '3%' },
        { icon: '🎁', title: 'Rewards', value: 'Bi-Weekly' },
        { icon: '💰', title: 'Profit Split', value: '80%' },
        { icon: '⏰', title: 'Time Limit', value: 'Unlimited' }
      ]
    }
  };

  const currentMobileAccount = mobileAccountData[selectedMobileAccount];

  return (
    <section className="trading-plans">
      <div className="container">
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

        {/* Challenge Types */}
        <div className="trading-plans__challenge-types">
          {challengeTypes.map((type) => (
            <div 
              key={type.id} 
              className={`trading-plans__challenge-type ${type.isActive ? 'active' : ''}`}
              onClick={() => setActiveChallenge(type.id)}
            >
              {type.badge && (
                <span className={`trading-plans__badge ${type.badge.toLowerCase()}`}>
                  {type.badge}
                </span>
              )}
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

        {/* Main Pricing Table */}
        <div className="trading-plans__table-container">
          <div className="trading-plans__table">
          {/* Plan Headers */}
          <div className="trading-plans__table-header">
            <div className="trading-plans__feature-header"></div>
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`trading-plans__plan-header ${plan.highlight ? 'highlight' : ''}`}
              >
                {plan.offer && (
                  <div className="trading-plans__plan-offer">{plan.offer}</div>
                )}
                <h3 className="trading-plans__plan-amount">{plan.amount}</h3>
                <p className="trading-plans__plan-label">
                  Virtual Capital 
                  <span className="tooltip-icon">ⓘ</span>
                </p>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature, featureIndex) => (
            <div key={featureIndex} className="trading-plans__table-row">
              <div className="trading-plans__feature-cell">
                <span className="trading-plans__feature-icon">{feature.icon}</span>
                <div className="trading-plans__feature-text">
                  <span className="trading-plans__feature-title">{feature.title}</span>
                  {feature.subtitle && (
                    <span className="trading-plans__feature-subtitle">{feature.subtitle}</span>
                  )}
                </div>
                <span className="trading-plans__feature-tooltip">ⓘ</span>
              </div>
              
              {feature.values.map((value, valueIndex) => (
                <div 
                  key={valueIndex} 
                  className={`trading-plans__value-cell ${plans[valueIndex]?.highlight ? 'highlight' : ''}`}
                >
                  {typeof value === 'object' ? (
                    <div className="trading-plans__pricing-cell">
                      <div className="trading-plans__plan-pricing">
                        <span className="current-price">{value.price}</span>
                        <span className="strike-price">{value.strike}</span>
                      </div>
                      <div className="trading-plans__plan-badge">{value.badge}</div>
                    </div>
                  ) : value.includes('Included') ? (
                    <span className="included-badge">{value}</span>
                  ) : (
                    <span className="value-text">{value}</span>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* CTA Buttons Row */}
          <div className="trading-plans__table-row cta-row">
            <div className="trading-plans__feature-cell"></div>
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`trading-plans__value-cell ${plan.highlight ? 'highlight' : ''}`}
              >
                <Button variant="primary" size="medium" className="trading-plans__plan-button">
                  Start Now
                </Button>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="trading-plans__mobile-view">
          {/* Mobile Account Selector */}
          <div className="trading-plans__mobile-account-selector">
            <button
              className={`trading-plans__mobile-account-btn ${selectedMobileAccount === '6k' ? 'active' : ''}`}
              onClick={() => setSelectedMobileAccount('6k')}
            >
              $6K
            </button>
            <button
              className={`trading-plans__mobile-account-btn ${selectedMobileAccount === '15k' ? 'active' : ''}`}
              onClick={() => setSelectedMobileAccount('15k')}
            >
              $15K
            </button>
            <button
              className={`trading-plans__mobile-account-btn ${selectedMobileAccount === '25k' ? 'active' : ''}`}
              onClick={() => setSelectedMobileAccount('25k')}
            >
              $25K
            </button>
            <button
              className={`trading-plans__mobile-account-btn ${selectedMobileAccount === '50k' ? 'active' : ''}`}
              onClick={() => setSelectedMobileAccount('50k')}
            >
              $50K
            </button>
            <button
              className={`trading-plans__mobile-account-btn ${selectedMobileAccount === '100k' ? 'active' : ''}`}
              onClick={() => setSelectedMobileAccount('100k')}
            >
              $100K
            </button>
          </div>

          {/* Mobile Card */}
          <div className={`trading-plans__mobile-card ${currentMobileAccount.highlight ? 'highlight' : ''}`}>
            {/* Card Header */}
            <div className="trading-plans__mobile-card-header">
              <h3 className="trading-plans__mobile-card-amount">{currentMobileAccount.amount}</h3>
              <p className="trading-plans__mobile-card-label">
                Virtual Capital 
                <span className="tooltip-icon">ⓘ</span>
              </p>
            </div>

            {/* Features */}
            <div className="trading-plans__mobile-features">
              {currentMobileAccount.features.map((feature, index) => (
                <div key={index} className="trading-plans__mobile-feature">
                  <div className="trading-plans__mobile-feature-left">
                    <span className="trading-plans__mobile-feature-icon">{feature.icon}</span>
                    <div className="trading-plans__mobile-feature-text">
                      <span className="trading-plans__mobile-feature-title">{feature.title}</span>
                      {feature.subtitle && (
                        <span className="trading-plans__mobile-feature-subtitle">{feature.subtitle}</span>
                      )}
                    </div>
                  </div>
                  <div className={`trading-plans__mobile-feature-value ${feature.isIncluded ? 'included-badge' : ''}`}>
                    {feature.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="trading-plans__mobile-pricing">
              <div className="trading-plans__mobile-price">{currentMobileAccount.price}</div>
              <div className="trading-plans__mobile-strike-price">{currentMobileAccount.strikePrice}</div>
              <div className="trading-plans__mobile-discount-badge">{currentMobileAccount.badge}</div>
            </div>

            {/* CTA Button */}
            <button className="trading-plans__mobile-cta-button">
              Start Now
            </button>
          </div>
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
    </section>
  );
};

export default TradingPlans;