import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import chalet from '../../assets/images/logo-ochalet.png';
import './header.scss';

const options = [
  {
    key: 1, text: 'Mon profil', as: Link, to: '/profile',
  },
  {
    key: 2, text: 'Mes réservations', as: Link, to: '/account/user',
  },
  {
    key: 3, text: 'Déconnexion', as: Link, to: '/signout',
  },
];

const Header = () => {
  const logged = useSelector((state) => state.user.logged);

  return (
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
        {!logged && (
        <NavLink
          className="header__navigation__link"
          activeClassName="header__navigation__link--active"
          to="/signin"
          exact
        >
          Connexion
        </NavLink>
        )}
        {!logged && (
        <NavLink
          className="header__navigation__link"
          activeClassName="header__navigation__link--active"
          to="/signup"
          exact
        >
          Inscription
        </NavLink>
        )}
        {logged && (
          <Dropdown
            className="header__navigation__link"
            text="Mon compte"
            options={options}
            simple
            item
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
