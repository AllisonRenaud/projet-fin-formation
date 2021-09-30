import { Button, Icon } from 'semantic-ui-react';

import './backoffice-admin.scss';
import Chalet from '../../../assets/images/chalet2.jpeg';

const Admin = () => (
  <main className="backoffice-admin">
    <h2 className="backoffice-admin__name">Prénom Nom</h2>
    <h3 className="backoffice-admin__role">Administrateur</h3>
    <div className="backoffice-admin__notifications">
      <div className="backoffice-admin__notifications__message">
        <p className="backoffice-admin__notifications__message__new">Vous avez 3 nouveaux message(s)</p>
        <Button
          animated
          className="backoffice-admin__notifications__message__button"
          color="brown"
        >
          <Button.Content visible>Voir les messages</Button.Content>
          <Button.Content hidden>
            <Icon name="envelope" />
          </Button.Content>
        </Button>
      </div>
      <div className="backoffice-admin__notifications__reservation">
        <p className="backoffice-admin__notifications__reservation__new">Vous avez 2 nouvelle(s) reservation(s)</p>
        <Button
          animated
          className="backoffice-admin__notifications__reservation__button"
          color="brown"
        >
          <Button.Content visible>Voir les demandes</Button.Content>
          <Button.Content hidden>
            <Icon name="question" />
          </Button.Content>
        </Button>
      </div>
    </div>
    <div className="backoffice-admin__card-list">
      <div className="backoffice-admin__card">
        <img src={Chalet} alt="mountain" className="backoffice-admin__card__image" />
        <div className="backoffice-admin__card__details">
          <h2 className="backoffice-admin__card__name">Nom de l'annonce</h2>
          <p className="backoffice-admin__card__city">Ville</p>
        </div>
      </div>
      <div className="backoffice-admin__card">
        <img src={Chalet} alt="mountain" className="backoffice-admin__card__image" />
        <div className="backoffice-admin__card__details">
          <h2 className="backoffice-admin__card__name">Nom de l'annonce</h2>
          <p className="backoffice-admin__card__city">Ville</p>
        </div>
      </div>
      <div className="backoffice-admin__card">
        <img src={Chalet} alt="mountain" className="backoffice-admin__card__image" />
        <div className="backoffice-admin__card__details">
          <h2 className="backoffice-admin__card__name">Nom de l'annonce</h2>
          <p className="backoffice-admin__card__city">Ville</p>
        </div>
      </div>
      <div className="backoffice-admin__card">
        <img src={Chalet} alt="mountain" className="backoffice-admin__card__image" />
        <div className="backoffice-admin__card__details">
          <h2 className="backoffice-admin__card__name">Nom de l'annonce</h2>
          <p className="backoffice-admin__card__city">Ville</p>
        </div>
      </div>
      <div className="backoffice-admin__card">
        <img src={Chalet} alt="mountain" className="backoffice-admin__card__image" />
        <div className="backoffice-admin__card__details">
          <h2 className="backoffice-admin__card__name">Nom de l'annonce</h2>
          <p className="backoffice-admin__card__city">Ville</p>
        </div>
      </div>
      <div className="backoffice-admin__card">
        <img src={Chalet} alt="mountain" className="backoffice-admin__card__image" />
        <div className="backoffice-admin__card__details">
          <h2 className="backoffice-admin__card__name">Nom de l'annonce</h2>
          <p className="backoffice-admin__card__city">Ville</p>
        </div>
      </div>
    </div>
  </main>
);

export default Admin;
