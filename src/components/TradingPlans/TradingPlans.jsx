import React, { useState } from 'react';
import Button from '../Button/Button';
import './tradingPlans.scss';

const TradingPlans = () => {
  const [activeTab, setActiveTab] = useState('forex');

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
      tooltip: true
    },
    { 
      icon: '🎯', 
      title: 'Profit Target',
      tooltip: true
    },
    { 
      icon: '📉', 
      title: 'Max Drawdown', 
      subtitle: 'Trailing',
      tooltip: true
    },
    { 
      icon: '⚡', 
      title: 'Daily Drawdown',
      tooltip: true
    },
    { 
      icon: '🎁', 
      title: 'Rewards',
      tooltip: true
    },
    { 
      icon: '💰', 
      title: 'Profit Split',
      tooltip: true
    },
    { 
      icon: '⏰', 
      title: 'Time Limit',
      tooltip: true
    },
    { 
      icon: '💳', 
      title: 'One-Time Fee'
    }
  ];

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
        <div className="trading-plans__table">
          {/* Features Column */}
          <div className="trading-plans__features-column">
            {features.map((feature, index) => (
              <div key={index} className="trading-plans__feature-row">
                <div className="trading-plans__feature-content">
                  <span className="trading-plans__feature-icon">{feature.icon}</span>
                  <div className="trading-plans__feature-text">
                    <span className="trading-plans__feature-title">{feature.title}</span>
                    {feature.subtitle && (
                      <span className="trading-plans__feature-subtitle">{feature.subtitle}</span>
                    )}
                  </div>
                  {feature.tooltip && (
                    <span className="trading-plans__feature-tooltip">ⓘ</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Plans Columns */}
          <div className="trading-plans__plans-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`trading-plans__plan-column ${plan.highlight ? 'highlight' : ''}`}
              >
                {plan.offer && (
                  <div className="trading-plans__plan-offer">{plan.offer}</div>
                )}
                
                {/* Plan Header */}
                <div className="trading-plans__plan-header">
                  <h3 className="trading-plans__plan-amount">{plan.amount}</h3>
                  <p className="trading-plans__plan-label">
                    Virtual Capital 
                    <span className="tooltip-icon">ⓘ</span>
                  </p>
                </div>

                {/* Feature Values */}
                <div className="trading-plans__plan-values">
                  <div className="trading-plans__plan-value">
                    <span className="included-badge">💰 Included</span>
                  </div>
                  <div className="trading-plans__plan-value">9%</div>
                  <div className="trading-plans__plan-value">6%</div>
                  <div className="trading-plans__plan-value">3%</div>
                  <div className="trading-plans__plan-value">Bi-Weekly</div>
                  <div className="trading-plans__plan-value">80%</div>
                  <div className="trading-plans__plan-value">Unlimited</div>
                  <div className="trading-plans__plan-value pricing-cell">
                    <div className="trading-plans__plan-pricing">
                      <span className="current-price">{plan.price}</span>
                      <span className="strike-price">{plan.strikePrice}</span>
                    </div>
                    <div className="trading-plans__plan-badge">{plan.badge}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="trading-plans__plan-cta">
                  <Button variant="primary" size="medium" className="trading-plans__plan-button">
                    Start Now
                  </Button>
                </div>
              </div>
            ))}
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