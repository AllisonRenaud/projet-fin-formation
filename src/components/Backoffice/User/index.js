import { Button } from 'semantic-ui-react';

import './backoffice-user.scss';

const User = () => (
  <main className="backoffice-user">
    <h2 className="backoffice-user__title">Texte d'accueil</h2>
    <div className="backoffice-user__reservation">
      <p className="backoffice-user__reservation__date">Date de réservation</p>
      <p className="backoffice-user__reservation__booking-offer">Annonce réservée</p>
      <p className="backoffice-user__reservation__booking-number">N° de réservation</p>
      <Button className="backoffice-user__reservation__button" color="blue">Gérer ma réservation</Button>
    </div>
    <div className="backoffice-user__reservation">
      <p className="backoffice-user__reservation__date">Date de réservation</p>
      <p className="backoffice-user__reservation__booking-offer">Annonce réservée</p>
      <p className="backoffice-user__reservation__booking-number">N° de réservation</p>
      <Button className="backoffice-user__reservation__button" color="blue">Gérer ma réservation</Button>
    </div>
    <div className="backoffice-user__reservation">
      <p className="backoffice-user__reservation__date">Date de réservation</p>
      <p className="backoffice-user__reservation__booking-offer">Annonce réservée</p>
      <p className="backoffice-user__reservation__booking-number">N° de réservation</p>
      <Button className="backoffice-user__reservation__button" color="blue">Gérer ma réservation</Button>
    </div>
  </main>
);

export default User;
