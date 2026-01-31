import React from 'react';
import './home2.scss';
import image from '../../utils/helper';
import { TradingPlans, Rewards } from '../../components';

const Home2 = () => {
  return (
    <div className="home2-wrapper">
      {/* Header */}
      <header className="home2-header">
        <div className="home2-header__container container">
          <a href="/" className="home2-header__logo">
            ARC<span className="logo-highlight">Funded</span>
          </a>
          
          <nav className="home2-header__nav">
            <a href="/" className="nav-link active">Home</a>
            <a href="/faq" className="nav-link">FAQ</a>
            <a href="/how-it-works" className="nav-link">How it Works</a>
            <a href="/about" className="nav-link">About us</a>
            <a href="/client-area" className="nav-link">Client Area</a>
          </nav>

          <div className="home2-header__actions">
            <div className="language-selector">
              <svg className="globe-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span>EN</span>
              <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <button className="login-btn">Login</button>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="home2-main">
        <img src={image['shade.avif']} alt="Background shade" className="shade-img" />
        
        <div className="home2-sections">
          <div className="upbox"></div>
          <div className="bottombox"></div>
        </div>

        <div className="home2-container">
          <div className="home2-content">
            <div className="home2-left">
              {/* Rating Badge */}
              <div className="rating-badge">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <span className="rating-score">4.9</span>
                <span className="rating-text">Trusted by 10k+ traders</span>
              </div>

              {/* Main Title */}
              <h1 className="home2-title">
                Trade with Confidence, Grow with ARC
              </h1>

              {/* Feature Points */}
              <div className="feature-points">
                <div className="feature-point">
                  <div className="feature-label">Up to</div>
                  <div className="feature-value">$200K</div>
                </div>
                <div className="feature-point">
                  <div className="feature-label">Profit Split</div>
                  <div className="feature-value">90%</div>
                </div>
                <div className="feature-point">
                  <div className="feature-label">Payout</div>
                  <div className="feature-value">Weekly</div>
                </div>
                <div className="feature-point">
                  <div className="feature-label">Support</div>
                  <div className="feature-value">24/7</div>
                </div>
              </div>

              {/* Description */}
              <p className="home2-description">
                Join thousands of successful traders who trust ARC for their trading journey. 
                Experience advanced tools, real-time analytics, and professional support that 
                helps you achieve consistent profitability.
              </p>

              {/* Action Buttons */}
              <div className="home2-actions">
                <button className="primary-action-btn">Start Your Challenge</button>
                <button className="secondary-action-btn">Learn More →</button>
              </div>
            </div>

            <div className="home2-right">
              <div className="animated-chart">
                <div className="chart-container">
                  {[60, 80, 45, 90, 70, 95, 55, 85, 75, 100, 65, 88, 72, 92, 78].map((height, index) => (
                    <div 
                      key={index}
                      className="bar"
                      style={{
                        '--height': `${height}%`,
                        '--delay': `${index * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="chart-image left">
                  <img src={image['graph-green.png']} alt="Trading graph" />
                </div>
                <div className="chart-image center">
                  <img src={image['300k copy.png']} alt="300k profit" />
                </div>
                <div className="chart-image right">
                  <img src={image['image_69.png']} alt="Trading stats" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Traders Say</h2>
          <p className="testimonials-subtitle">
            Real success stories from our trading community
          </p>
        </div>
        
        <div className="testimonials-marquee">
          <div className="testimonials-track">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "ARC's platform helped me achieve consistent profits. The analytics tools are incredible and the support team is always there when I need them!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <div className="author-name">John Davis</div>
                  <div className="author-title">Professional Trader</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "The best trading platform I've used. Fast execution, excellent support team, and the profit sharing model is fantastic!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <div className="author-name">Sarah Miller</div>
                  <div className="author-title">Day Trader</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "ARC transformed my trading strategy. I've seen 300% growth in my portfolio and the weekly payouts are amazing!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MJ</div>
                <div className="author-info">
                  <div className="author-name">Mike Johnson</div>
                  <div className="author-title">Swing Trader</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "Risk management tools are top-notch. I feel secure trading with ARC and the educational resources helped me improve significantly."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">LW</div>
                <div className="author-info">
                  <div className="author-name">Lisa Wang</div>
                  <div className="author-title">Forex Trader</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "Educational resources and mentorship program helped me become profitable. The community support is incredible!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RB</div>
                <div className="author-info">
                  <div className="author-name">Robert Brown</div>
                  <div className="author-title">Options Trader</div>
                </div>
              </div>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "ARC's platform helped me achieve consistent profits. The analytics tools are incredible and the support team is always there when I need them!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <div className="author-name">John Davis</div>
                  <div className="author-title">Professional Trader</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">
                "The best trading platform I've used. Fast execution, excellent support team, and the profit sharing model is fantastic!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <div className="author-name">Sarah Miller</div>
                  <div className="author-title">Day Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <div>
        <Rewards />
      </div>

      {/* Trading Plans Section */}
      <div>
        <TradingPlans />
      </div>
    </div>
  );
};

export default Home2;