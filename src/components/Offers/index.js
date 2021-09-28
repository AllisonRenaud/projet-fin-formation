import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import './offers.scss';
import Alpes1 from '../../assets/images/Alpes1.jpeg';

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
        <Link to="/offer/1" className="offers__card__link">
          <Button
            animated
            className="offers__card__button"
            color="brown"
          >
            <Button.Content visible>Voir plus</Button.Content>
            <Button.Content hidden>
              <Icon name='eye' />
            </Button.Content>
          </Button>
        </Link>
      </div>
    </div>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Link to="/offer/1" className="offers__card__link">
          <Button
            animated
            className="offers__card__button"
            color="brown"
          >
            <Button.Content visible>Voir plus</Button.Content>
            <Button.Content hidden>
              <Icon name='eye' />
            </Button.Content>
          </Button>
        </Link>
      </div>
    </div>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Link to="/offer/1" className="offers__card__link">
          <Button
            animated
            className="offers__card__button"
            color="brown"
          >
            <Button.Content visible>Voir plus</Button.Content>
            <Button.Content hidden>
              <Icon name='eye' />
            </Button.Content>
          </Button>
        </Link>
      </div>
    </div>
    <div className="offers__card">
      <img src={Alpes1} alt="mountain" className="offers__card__image" />
      <div className="offers__card__description">
        <h2 className="offers__card__title">Titre</h2>
        <p className="offers__card__city">Ville</p>
        <p className="offers__card__capacity">Capacité d'accueil</p>
        <p className="offers__card__price">Prix par semaine</p>
        <Link to="/offer/1" className="offers__card__link">
          <Button
            animated
            className="offers__card__button"
            color="brown"
          >
            <Button.Content visible>Voir plus</Button.Content>
            <Button.Content hidden>
              <Icon name='eye' />
            </Button.Content>
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default Offers;
