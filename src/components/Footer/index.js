import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <header className="footer">
    <nav className="footer__navigation">
      <Link
        className="footer__navigation__link"
        to="/legals"
        exact
      >
        Mentions légales
      </Link>
      <Link
        className="footer__navigation__link"
        to="/faq"
        exact
      >
        FAQ
      </Link>
      <Link
        className="footer__navigation__link"
        to="/copyright"
        exact
      >
        Copyright O'Chalet 2021
      </Link>
      <Link
        className="footer__navigation__link"
        to="/cgv"
        exact
      >
        CGV
      </Link>
      <Link
        className="footer__navigation__link"
        to="/confidential"
        exact
      >
        Politique de confidentialité
      </Link>
    </nav>
  </header>
);

export default Footer;
