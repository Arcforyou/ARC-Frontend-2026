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
      icon: '📈'
    }
  ];

  const challengeTypes = [
    {
      id: 'one-step',
      title: 'One-Step',
      badge: 'Popular',
      features: ['Fastest evaluation', 'Only 9% profit target']
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
      originalPrice: null,
      price: '$42',
      strikePrice: '$49',
      badge: 'TRADE15',
      highlight: false
    },
    {
      amount: '$15K',
      originalPrice: null,
      price: '$84',
      strikePrice: '$99',
      badge: 'TRADE15',
      highlight: false
    },
    {
      amount: '$25K',
      originalPrice: null,
      price: '$152',
      strikePrice: '$179',
      badge: 'TRADE15',
      highlight: false
    },
    {
      amount: '$50K',
      originalPrice: null,
      price: '$212',
      strikePrice: '$249',
      badge: 'TRADE15',
      highlight: false
    },
    {
      amount: '$100K',
      originalPrice: null,
      price: '$375',
      strikePrice: '$469',
      badge: '100KBOGO',
      highlight: true,
      offer: '100K BOGO OFFER'
    }
  ];

  const features = [
    { icon: '🤖', title: 'AI Coach', subtitle: 'Your trading buddy' },
    { icon: '🎯', title: 'Profit Target', value: '9%' },
    { icon: '📉', title: 'Max Drawdown', subtitle: 'Trailing', value: '6%' },
    { icon: '📊', title: 'Daily Drawdown', value: '3%' },
    { icon: '🎁', title: 'Rewards', value: 'Bi-Weekly' },
    { icon: '💰', title: 'Profit Split', value: '80%' },
    { icon: '⏰', title: 'Time Limit', value: 'Unlimited' },
    { icon: '💳', title: 'One-Time Fee' }
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
            <div key={type.id} className="trading-plans__challenge-type">
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

        {/* Plans Grid */}
        <div className="trading-plans__grid">
          {/* Features Column */}
          <div className="trading-plans__features">
            {features.map((feature, index) => (
              <div key={index} className="trading-plans__feature">
                <div className="trading-plans__feature-icon">{feature.icon}</div>
                <div className="trading-plans__feature-content">
                  <span className="trading-plans__feature-title">{feature.title}</span>
                  {feature.subtitle && (
                    <span className="trading-plans__feature-subtitle">{feature.subtitle}</span>
                  )}
                </div>
                {feature.value && (
                  <div className="trading-plans__feature-value">{feature.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* Plans Columns */}
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`trading-plans__plan ${plan.highlight ? 'highlight' : ''}`}
            >
              {plan.offer && (
                <div className="trading-plans__offer">{plan.offer}</div>
              )}
              
              <div className="trading-plans__plan-header">
                <h3 className="trading-plans__plan-amount">{plan.amount}</h3>
                <p className="trading-plans__plan-label">Virtual Capital</p>
              </div>

              <div className="trading-plans__plan-included">
                <span className="included-icon">💰</span>
                <span>Included</span>
              </div>

              {/* Feature Values */}
              <div className="trading-plans__plan-features">
                <div className="trading-plans__plan-feature">9%</div>
                <div className="trading-plans__plan-feature">6%</div>
                <div className="trading-plans__plan-feature">3%</div>
                <div className="trading-plans__plan-feature">Bi-Weekly</div>
                <div className="trading-plans__plan-feature">80%</div>
                <div className="trading-plans__plan-feature">Unlimited</div>
              </div>

              <div className="trading-plans__plan-pricing">
                <div className="trading-plans__plan-price">
                  <span className="current-price">{plan.price}</span>
                  <span className="strike-price">{plan.strikePrice}</span>
                </div>
                <div className="trading-plans__plan-badge">{plan.badge}</div>
              </div>

              <Button variant="primary" size="medium" className="trading-plans__plan-button">
                Start Now
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="trading-plans__cta">
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
            </div>
            <Button variant="primary" size="medium">
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