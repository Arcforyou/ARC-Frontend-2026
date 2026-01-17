import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import image from '../../utils/helper';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo"><img src={image['logo.png']} alt='logo' className='w-25'/></Link>
        {/* Desktop Navigation */}
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/faq" className="header__link">FAQ</Link>
          <Link to="/how-it-works" className="header__link">How it Works</Link>
          <Link to="/about" className="header__link">About us</Link>
          <Link to="/client-area" className="header__link">Client Area</Link>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <select className="header__select">
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          <button className="header__search">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            className="header__mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="header__nav header__nav--mobile active">
            <Link to="/" className="header__link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/faq" className="header__link" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/how-it-works" className="header__link" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            <Link to="/about" className="header__link" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link to="/client-area" className="header__link" onClick={() => setIsMenuOpen(false)}>Client Area</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;