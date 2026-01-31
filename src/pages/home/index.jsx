import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './home.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Animate sections on scroll
    gsap.fromTo('.animate-section', 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
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
        y: 30,
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
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header animate-section">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span>ARC</span>
            </div>
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="nav-buttons">
              <button className="btn-secondary">Login</button>
              <button className="btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero animate-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Trade Smarter, Not Harder</h1>
              <p>Experience the future of trading with ARC's cutting-edge platform. 
                 Advanced tools, real-time analytics, and seamless execution.</p>
              <div className="hero-buttons">
                <button className="btn-primary">Start Trading</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features animate-section">
        <div className="container">
          <h2 className="section-title">Why Choose ARC?</h2>
          <div className="features-grid">
            <div className="feature-card animate-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Execute trades in milliseconds with our advanced infrastructure</p>
            </div>
            <div className="feature-card animate-card">
              <div className="feature-icon">🔒</div>
              <h3>Bank-Level Security</h3>
              <p>Your funds are protected with military-grade encryption</p>
            </div>
            <div className="feature-card animate-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Make informed decisions with real-time market insights</p>
            </div>
            <div className="feature-card animate-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Markets</h3>
              <p>Access markets worldwide from a single platform</p>
            </div>
            <div className="feature-card animate-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Trading</h3>
              <p>Trade on the go with our award-winning mobile app</p>
            </div>
            <div className="feature-card animate-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert Support</h3>
              <p>24/7 support from our team of trading professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats animate-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-card">
              <div className="stat-number">$2.5B+</div>
              <div className="stat-label">Trading Volume</div>
            </div>
            <div className="stat-item animate-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Active Traders</div>
            </div>
            <div className="stat-item animate-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item animate-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta animate-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Trading?</h2>
            <p>Join thousands of traders who trust ARC for their trading needs</p>
            <button className="btn-primary">Get Started Today</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer animate-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ARC</h3>
              <p>The future of trading is here</p>
            </div>
            <div className="footer-section">
              <h4>Platform</h4>
              <ul>
                <li><a href="#">Web Trading</a></li>
                <li><a href="#">Mobile App</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;