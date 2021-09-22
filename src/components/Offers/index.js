import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import './offers.scss';
import Alpes1 from '../../assets/images/Alpes-nord.svg';

const Offers = () => (
  <section className="offers">
    <h1 className="offers__mountain">Alpes du Nord</h1>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Button color="blue"><Link to="/offer/:1" className="offers__card__button">Voir plus</Link></Button>
      </div>
    </div>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Button color="blue"><Link to="/offer/:1" className="offers__card__button">Voir plus</Link></Button>
      </div>
    </div>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Button color="blue"><Link to="/offer/:1" className="offers__card__button">Voir plus</Link></Button>
      </div>
    </div>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Button color="blue"><Link to="/offer/:1" className="offers__card__button">Voir plus</Link></Button>
      </div>
    </div>
  </section>
);

export default Offers;
