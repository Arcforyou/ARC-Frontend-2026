import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.scss';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'About us', path: '/about' },
    { name: 'Client Area', path: '/client-area' },
  ];

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__content">
          <Link to="/" className="navbar__logo">
            <img src="/logo.png" alt="ARC" />
          </Link>

          <div className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="navbar__link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar__actions">
            <div className="navbar__language">
              <select className="navbar__select">
                <option>Select Language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
            <button className="navbar__search" aria-label="Search">
              <SearchIcon />
            </button>
            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
