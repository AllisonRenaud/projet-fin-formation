import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import chalet from '../../assets/images/chalet.svg';
import './header.scss';

const Header = () => {
  const logged = useSelector((state) => state.user.logged);
  const username = useSelector((state) => state.user.firstname);

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
        <NavLink
          className="header__navigation__link"
          activeClassName="header__navigation__link--active"
          to="/account/profile"
          exact
        >
          <div className="header__navigation__avatar">
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar /> */}
            <span>Bonjour {username}</span>
          </div>
        </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
