import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import image from '../../utils/helper';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo text-2xl font-bold text-white">
        {/* Desktop Navigation */}
        <nav className="header__nav hidden md:flex items-center space-x-8">
          <Link to="/" className="header__link text-white hover:text-primary-cyan transition-colors">Home</Link>
          <Link to="/faq" className="header__link text-white hover:text-primary-cyan transition-colors">FAQ</Link>
          <Link to="/how-it-works" className="header__link text-white hover:text-primary-cyan transition-colors">How it Works</Link>
          <Link to="/about" className="header__link text-white hover:text-primary-cyan transition-colors">About us</Link>
          <Link to="/client-area" className="header__link text-white hover:text-primary-cyan transition-colors">Client Area</Link>
        </nav>

        {/* Actions */}
        <div className="header__actions flex items-center space-x-4">
          <select className="header__select bg-transparent text-white border border-white/20 rounded px-3 py-1 text-sm">
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          <button className="header__search text-white hover:text-primary-cyan transition-colors p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            className="header__mobile-toggle md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <nav className="header__nav--mobile absolute top-full left-0 right-0 bg-dark-card/95 backdrop-blur-sm p-4 flex flex-col space-y-4 md:hidden">
            <Link to="/" className="header__link text-white hover:text-primary-cyan transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/faq" className="header__link text-white hover:text-primary-cyan transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/how-it-works" className="header__link text-white hover:text-primary-cyan transition-colors" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            <Link to="/about" className="header__link text-white hover:text-primary-cyan transition-colors" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link to="/client-area" className="header__link text-white hover:text-primary-cyan transition-colors" onClick={() => setIsMenuOpen(false)}>Client Area</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;