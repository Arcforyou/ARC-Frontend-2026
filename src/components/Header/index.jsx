import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-primary py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              ARC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-primary-green transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/faq" 
              className="text-white hover:text-primary-green transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-white hover:text-primary-green transition-colors duration-200 font-medium"
            >
              How it Works
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-primary-green transition-colors duration-200 font-medium"
            >
              About us
            </Link>
            <Link 
              to="/client-area" 
              className="text-white hover:text-primary-green transition-colors duration-200 font-medium"
            >
              Client Area
            </Link>
          </nav>

          {/* Language Selector & Search */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="bg-transparent text-white border border-white/20 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-cyan">
              <option value="en" className="bg-dark-card text-white">Select Language</option>
              <option value="es" className="bg-dark-card text-white">Spanish</option>
              <option value="fr" className="bg-dark-card text-white">French</option>
            </select>
            <button className="text-white hover:text-primary-cyan transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-green transition-colors duration-200 focus:outline-none"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-card/50 backdrop-blur-sm rounded-lg">
              <Link 
                to="/" 
                className="block px-3 py-2 text-white hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/faq" 
                className="block px-3 py-2 text-white hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/how-it-works" 
                className="block px-3 py-2 text-white hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-white hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                to="/client-area" 
                className="block px-3 py-2 text-white hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Area
              </Link>
              <div className="flex items-center space-x-4 px-3 py-2">
                <select className="bg-transparent text-white border border-white/20 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-cyan">
                  <option value="en" className="bg-dark-card text-white">Select Language</option>
                  <option value="es" className="bg-dark-card text-white">Spanish</option>
                  <option value="fr" className="bg-dark-card text-white">French</option>
                </select>
                <button className="text-white hover:text-primary-cyan transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;