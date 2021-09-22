import { NavLink } from 'react-router-dom';

import chalet from '../../assets/chalet.svg';
import './header.scss';

const Header = () => (
  <header className="header">
    <img src={chalet} alt="logo O'Chalet" className="header__logo" />
    <nav className="header__navigation">
      <NavLink
        className="header__navigation__link"
        activeClassName="header__navigation__link--active"
        to="/"
        exact
      >
        Accueil
      </NavLink>
      <NavLink
        className="header__navigation__link"
        activeClassName="header__navigation__link--active"
        to="/offers"
        exact
      >
        Annonces
      </NavLink>
      <NavLink
        className="header__navigation__link"
        activeClassName="header__navigation__link--active"
        to="/signin"
        exact
      >
        Connexion
      </NavLink>
      <NavLink
        className="header__navigation__link"
        activeClassName="header__navigation__link--active"
        to="/signup"
        exact
      >
        Inscription
      </NavLink>
    </nav>
  </header>
);

export default Header;
