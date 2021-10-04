/* eslint-disable camelcase */
// import { PropTypes } from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import './backoffice-admin.scss';

const Admin = () => {
  const role = localStorage.getItem('role');
  if (role === 'user') {
    <Redirect to="/account/user" />;
  }

  const firstname = useSelector((state) => (state.user.firstname));
  const lastname = useSelector((state) => (state.user.lastname));

  const offers = useSelector((state) => (state.offers.offers));

  return (
    <main className="backoffice-admin">
      <h2 className="backoffice-admin__name">{firstname} {lastname}</h2>
      <h3 className="backoffice-admin__role">Administrateur</h3>
      <div className="backoffice-admin__create-offer">
        <Link to="/account/new-offer">
          <Button color="blue" className="backoffice-admin__create-offer__button">Créer une annonce</Button>
        </Link>
      </div>
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
        {
          offers.map((offer) => (
            <div className="backoffice-admin__card">
              <img src={offer.main_picture} alt="mountain" className="backoffice-admin__card__image" />
              <div className="backoffice-admin__card__details">
                <h2 className="backoffice-admin__card__name">{offer.title}</h2>
                <p className="backoffice-admin__card__city">{offer.city}</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
};

// Admin.propTypes = {
//   role: PropTypes.string.isRequired,
// };

export default Admin;
