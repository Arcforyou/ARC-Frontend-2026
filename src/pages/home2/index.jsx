import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.animate-section',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate cards with stagger
    gsap.fromTo('.animate-card', 
      { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.animate-card',
          start: "top 80%",
          toggleActions: "play none none reverse"
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
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="home2-container">
      {/* Hero Section */}
      <section className="hero-section animate-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Trade with <span className="highlight">Confidence</span>
            </h1>
            <p className="hero-description">
              Join thousands of successful traders who trust ARC for their trading journey. 
              Experience advanced tools, real-time analytics, and professional support.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Start Trading Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="animated-chart">
              <div className="chart-container">
                <div className="chart-bars">
                  {[...Array(15)].map((_, index) => (
                    <div 
                      key={index} 
                      className="chart-bar" 
                      style={{
                        height: `${100 - (index * 4)}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section animate-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Traders Say</h2>
          <p className="testimonials-subtitle">
            Real success stories from our trading community
          </p>
        </div>
        
        <div className="testimonials-marquee">
          <div className="marquee-content">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "ARC's platform helped me achieve consistent profits. The analytics tools are incredible!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <h4>John Davis</h4>
                  <span>Professional Trader</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "The best trading platform I've used. Fast execution and excellent support team."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <h4>Sarah Miller</h4>
                  <span>Day Trader</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "ARC transformed my trading strategy. I've seen 300% growth in my portfolio."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MJ</div>
                <div className="author-info">
                  <h4>Mike Johnson</h4>
                  <span>Swing Trader</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "Risk management tools are top-notch. I feel secure trading with ARC."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">LW</div>
                <div className="author-info">
                  <h4>Lisa Wang</h4>
                  <span>Forex Trader</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "Educational resources and mentorship program helped me become profitable."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RB</div>
                <div className="author-info">
                  <h4>Robert Brown</h4>
                  <span>Options Trader</span>
                </div>
              </div>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "ARC's platform helped me achieve consistent profits. The analytics tools are incredible!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <h4>John Davis</h4>
                  <span>Professional Trader</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "The best trading platform I've used. Fast execution and excellent support team."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <h4>Sarah Miller</h4>
                  <span>Day Trader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section animate-section">
        <div className="features-grid">
          <div className="feature-card animate-card">
            <div className="feature-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>Real-time market data and comprehensive trading analytics</p>
          </div>
          <div className="feature-card animate-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Trading</h3>
            <p>Bank-level security with encrypted transactions</p>
          </div>
          <div className="feature-card animate-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Execution</h3>
            <p>Lightning-fast order execution with minimal slippage</p>
          </div>
          <div className="feature-card animate-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Trading</h3>
            <p>Trade anywhere with our mobile-optimized platform</p>
          </div>
        </div>
      </section>

      {/* Trading Plans Section */}
      <section className="trading-plans animate-section">
        <h2 className="section-title">Choose Your Trading Plan</h2>
        <div className="plans-table">
          <div className="table-header">
            <div className="account-type animate-card">
              <h3>Account Type</h3>
            </div>
            <div className="account-type animate-card">
              <h3>Starter</h3>
              <span className="price">$100</span>
            </div>
            <div className="account-type animate-card">
              <h3>Professional</h3>
              <span className="price">$500</span>
            </div>
            <div className="account-type animate-card">
              <h3>Expert</h3>
              <span className="price">$1000</span>
            </div>
          </div>
          
          <div className="table-row">
            <div className="feature-name animate-card">Maximum Drawdown</div>
            <div className="feature-value animate-card">5%</div>
            <div className="feature-value animate-card">8%</div>
            <div className="feature-value animate-card">10%</div>
          </div>
          
          <div className="table-row">
            <div className="feature-name animate-card">Profit Target</div>
            <div className="feature-value animate-card">8%</div>
            <div className="feature-value animate-card">10%</div>
            <div className="feature-value animate-card">12%</div>
          </div>
          
          <div className="table-row">
            <div className="feature-name animate-card">Trading Period</div>
            <div className="feature-value animate-card">30 days</div>
            <div className="feature-value animate-card">45 days</div>
            <div className="feature-value animate-card">60 days</div>
          </div>
          
          <div className="table-row">
            <div className="feature-name animate-card">Leverage</div>
            <div className="feature-value animate-card">1:30</div>
            <div className="feature-value animate-card">1:50</div>
            <div className="feature-value animate-card">1:100</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;