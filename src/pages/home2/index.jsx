import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './home2.scss';

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {
  useEffect(() => {
    // Animate sections on scroll
    gsap.fromTo('.animate-section', 
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.animate-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate cards with stagger
    gsap.fromTo('.animate-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.animate-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate testimonial cards
    gsap.fromTo('.testimonial-card',
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="home2-container">
      {/* Header */}
      <header className="header animate-section">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <h1>TradeFund</h1>
            </div>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#challenges">Challenges</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="nav-buttons">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero animate-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1>
                Trade with <span className="highlight">$100K</span> in Capital
              </h1>
              <p>
                Join thousands of successful traders who have proven their skills 
                and earned funded accounts. Start your trading journey today.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">$50M+</span>
                  <span className="stat-label">Funded</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Traders</span>
                </div>
                <div className="stat">
                  <span className="stat-number">90%</span>
                  <span className="stat-label">Profit Split</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="cta-primary">Start Challenge</button>
                <button className="cta-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image">
                <div className="trading-card">
                  <div className="card-header">
                    <span className="account-type">Funded Account</span>
                    <span className="account-balance">$100,000</span>
                  </div>
                  <div className="profit-display">
                    <span className="profit-label">Today's Profit</span>
                    <span className="profit-amount">+$2,450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>What Our Traders Say</h2>
            <p>Real stories from real traders who achieved their goals</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"TradeFund gave me the opportunity to trade with real capital. The process was smooth and the support team is amazing."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/api/placeholder/50/50" alt="John Smith" />
                </div>
                <div className="author-info">
                  <h4>John Smith</h4>
                  <span>Professional Trader</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've been trading for years, but TradeFund's platform and rules are the best I've experienced. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/api/placeholder/50/50" alt="Sarah Johnson" />
                </div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Day Trader</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The instant funding option changed my trading career. I was able to start trading with $50K immediately."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/api/placeholder/50/50" alt="Mike Chen" />
                </div>
                <div className="author-info">
                  <h4>Mike Chen</h4>
                  <span>Forex Trader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Plans Section */}
      <section className="trading-plans animate-section">
        <div className="container">
          <h2 className="section-title">Choose Your Trading Challenge</h2>
          
          {/* Challenge Types */}
          <div className="challenge-types">
            <div className="challenge-card instant animate-card">
              <div className="challenge-header">
                <h3>Instant Funding</h3>
                <span className="badge">Most Popular</span>
              </div>
              <div className="challenge-features">
                <ul>
                  <li>✓ Immediate access to funded account</li>
                  <li>✓ No evaluation period</li>
                  <li>✓ Start trading right away</li>
                  <li>✓ Up to 90% profit split</li>
                </ul>
              </div>
              <button className="cta-button">Get Instant Funding</button>
            </div>
            <div className="challenge-card evaluation animate-card">
              <div className="challenge-header">
                <h3>2-Step Evaluation</h3>
                <span className="badge evaluation-badge">Traditional</span>
              </div>
              <div className="challenge-features">
                <ul>
                  <li>✓ Prove your trading skills</li>
                  <li>✓ Two-phase evaluation</li>
                  <li>✓ Lower entry cost</li>
                  <li>✓ Higher profit targets</li>
                </ul>
              </div>
              <button className="cta-button">Start Evaluation</button>
            </div>
          </div>
          
          {/* Trading Plans Table */}
          <div className="plans-table">
            <div className="account-header starter animate-card">
              <h3>Starter</h3>
              <div className="price">$89</div>
              <div className="account-size">$10,000 Account</div>
            </div>
            <div className="account-header professional animate-card">
              <h3>Professional</h3>
              <div className="price">$189</div>
              <div className="account-size">$25,000 Account</div>
            </div>
            <div className="account-header expert animate-card">
              <h3>Expert</h3>
              <div className="price">$389</div>
              <div className="account-size">$50,000 Account</div>
            </div>
            <div className="account-header master animate-card">
              <h3>Master</h3>
              <div className="price">$689</div>
              <div className="account-size">$100,000 Account</div>
            </div>
            
            <div className="table-row">
              <div className="table-label">Profit Target</div>
              <div className="table-cell animate-card">8%</div>
              <div className="table-cell animate-card">8%</div>
              <div className="table-cell animate-card">8%</div>
              <div className="table-cell animate-card">8%</div>
            </div>
            
            <div className="table-row">
              <div className="table-label">Max Daily Loss</div>
              <div className="table-cell animate-card">5%</div>
              <div className="table-cell animate-card">5%</div>
              <div className="table-cell animate-card">5%</div>
              <div className="table-cell animate-card">5%</div>
            </div>
            
            <div className="table-row">
              <div className="table-label">Max Total Loss</div>
              <div className="table-cell animate-card">10%</div>
              <div className="table-cell animate-card">10%</div>
              <div className="table-cell animate-card">10%</div>
              <div className="table-cell animate-card">10%</div>
            </div>
            
            <div className="table-row">
              <div className="table-label">Profit Split</div>
              <div className="table-cell animate-card">80%</div>
              <div className="table-cell animate-card">80%</div>
              <div className="table-cell animate-card">85%</div>
              <div className="table-cell animate-card">90%</div>
            </div>
            
            <div className="table-row">
              <div className="table-label">Trading Period</div>
              <div className="table-cell animate-card">Unlimited</div>
              <div className="table-cell animate-card">Unlimited</div>
              <div className="table-cell animate-card">Unlimited</div>
              <div className="table-cell animate-card">Unlimited</div>
            </div>
            
            <div className="table-row cta-row">
              <div className="table-label"></div>
              <div className="table-cell animate-card">
                <button className="cta-button">Get Started</button>
              </div>
              <div className="table-cell animate-card">
                <button className="cta-button">Get Started</button>
              </div>
              <div className="table-cell animate-card">
                <button className="cta-button">Get Started</button>
              </div>
              <div className="table-cell animate-card">
                <button className="cta-button">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer animate-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TradeFund</h3>
              <p>Empowering traders worldwide with funded accounts and professional trading opportunities.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#challenges">Challenges</a></li>
                <li><a href="#rules">Trading Rules</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Discord</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TradeFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home2;