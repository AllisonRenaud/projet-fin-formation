import { Button } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Carousel from 'nuka-carousel';

import './offer.scss';
import { findOffer } from '../../selectors/offers';

const Offer = ({ match }) => {
  const { id } = match.params;

  const offer = useSelector(
    (state) => findOffer(state.offers.offers, id),
  );

  return (
    <section className="offer">
      <div className="offer__header">
        <h2 className="offer__header__title">{offer.title}</h2>
        <h3 className="offer__header__city">{offer.city_name}</h3>
        <div className="offer__header__pictures">
          <Carousel>
            <img src={offer.main_picture} alt="main" />
            <img src={offer.galery_picture_1} alt="galery" />
            <img src={offer.galery_picture_2} alt="galery" />
            <img src={offer.galery_picture_3} alt="galery" />
            <img src={offer.galery_picture_4} alt="galery" />
            <img src={offer.galery_picture_5} alt="galery" />
          </Carousel>
        </div>
      </div>
      <div className="offer__main">
        <div className="offer__main__description">
          <p>
            {offer.body}
          </p>
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
};

export default withRouter(Offer);
