import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import './offers.scss';
import Alpes1 from '../../assets/images/Alpes1.jpeg';
import Alpes2 from '../../assets/images/Alpes2.jpeg';
import MassifCentral from '../../assets/images/MassifCentral.jpeg';
import Jura from '../../assets/images/Jura.jpeg';
import Pyrenees from '../../assets/images/Pyrenees.jpeg';
import Vosges from '../../assets/images/Vosges.jpeg';

const Offers = () => (
  <section className="offers">

    <div className="main__card">
      <img src={Alpes1} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Alpes du Nord</h2>
    </div>
    <div className="main__card">
      <img src={Alpes2} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Alpes du Sud</h2>
    </div>
    <div className="main__card">
      <img src={Jura} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Jura</h2>
    </div>
    <div className="main__card">
      <img src={MassifCentral} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Massif Central</h2>
    </div>
    <div className="main__card">
      <img src={Pyrenees} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Pyrénées</h2>
    </div>
    <div className="main__card">
      <img src={Vosges} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Vosges</h2>
    </div>


    {/* <h1 className="offers__mountain">Alpes du Nord</h1>
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
    </div> */}
  </section>
);

export default Offers;
