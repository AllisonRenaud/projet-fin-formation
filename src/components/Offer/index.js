import { Button, Table } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Carousel from 'nuka-carousel';

import './offer.scss';

const Offer = () => (
  <section className="offer">
    <div className="offer__header">
      <h2 className="offer__header__title">Titre de l'annonce</h2>
      <h3 className="offer__header__city">Ville</h3>
      <div className="offer__header__pictures">
        <Carousel>
          <img src="https://images.unsplash.com/photo-1604210565264-8917562a63d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="main" />
          <img src="https://images.unsplash.com/photo-1551648746-d158bcd704e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="main" />
          <img src="https://images.unsplash.com/photo-1604210565264-8917562a63d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="main" />
        </Carousel>
      </div>
    </div>
    <div className="offer__main">
      <div className="offer__main__description">
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={1}>Capacité d'accueil</Table.Cell>
              <Table.Cell width={2}>12 personnes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Prix à la semaine</Table.Cell>
              <Table.Cell>450€</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Equipements</Table.Cell>
              <Table.Cell>Une couverture et un réchaud.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Arrivée</Table.Cell>
              <Table.Cell>Heure d'arrivée</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Départ</Table.Cell>
              <Table.Cell>Heure de départ</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Note</Table.Cell>
              <Table.Cell>5 stars</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Points clés / Aux alentours</Table.Cell>
              <Table.Cell>Dépaysement garanti / Rien</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="offer__main__calendar">
        <Calendar />
      </div>
    </div>
    <div className="offer__main__buttons">
      <Button className="offer__main__buttons__contact" color="blue">Contacter le propriétaire</Button>
      <Button className="offer__main__button__book" color="blue">Réserver</Button>
    </div>
  </section>
);

export default Offer;
