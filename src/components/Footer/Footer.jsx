import Container from '../Container/Container';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__logo">
            <img src="/logo.png" alt="ARC" />
            <p className="footer__tagline">Built for Traders, Backed by Professionals</p>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} ARC. All rights reserved.
            </p>
            <div className="footer__links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
