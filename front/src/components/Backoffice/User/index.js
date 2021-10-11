import { Button, Icon } from 'semantic-ui-react';

import PropTypes from 'prop-types';

import './backoffice-user.scss';

const User = () => {

  return (
    <main className="backoffice-user">
      <h2 className="backoffice-user__title">Mes réservations</h2>
      <div className="container">
        <div className="backoffice-user__reservation">
          <p className="backoffice-user__reservation__date">Date de réservation</p>
          <p className="backoffice-user__reservation__booking-offer">Annonce réservée</p>
          <p className="backoffice-user__reservation__booking-number">N° de réservation</p>
          <Button
            animated
            className="backoffice-user__reservation__button"
            color="brown"
          >
            <Button.Content visible>Un souci ?</Button.Content>
            <Button.Content hidden>
              <Icon name="warning sign" />
            </Button.Content>
          </Button>
        </div>
        <div className="backoffice-user__reservation">
          <p className="backoffice-user__reservation__date">Date de réservation</p>
          <p className="backoffice-user__reservation__booking-offer">Annonce réservée</p>
          <p className="backoffice-user__reservation__booking-number">N° de réservation</p>
          <Button
            animated
            className="backoffice-user__reservation__button"
            color="brown"
          >
            <Button.Content visible>Un souci ?</Button.Content>
            <Button.Content hidden>
              <Icon name="warning sign" />
            </Button.Content>
          </Button>
        </div>
        <div className="backoffice-user__reservation">
          <p className="backoffice-user__reservation__date">Date de réservation</p>
          <p className="backoffice-user__reservation__booking-offer">Annonce réservée</p>
          <p className="backoffice-user__reservation__booking-number">N° de réservation</p>
          <Button
            animated
            className="backoffice-user__reservation__button"
            color="brown"
          >
            <Button.Content visible>Un souci ?</Button.Content>
            <Button.Content hidden>
              <Icon name="warning sign" />
            </Button.Content>
          </Button>
        </div>
      </div>
    </main>
  );
};

User.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default User;
