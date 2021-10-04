import PropTypes from 'prop-types';

import { Button, Icon } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';

import Carousel from 'nuka-carousel';

import './offer.scss';

import { findOffer } from '../../selectors/offers';

const Offer = ({ match }) => {
  const role = localStorage.getItem('role');

  const { id } = match.params;

  const offer = useSelector(
    (state) => findOffer(state.offers.offers, id),
  );

  const [dateRange, setDateRange] = useState([{
    startDate: null,
    endDate: null,
    key: 'selection',
  }]);

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
        <div
          className="offer__main__description"
          dangerouslySetInnerHTML={{
            __html: offer.body,
          }}
        />
        <div className="offer__main__calendar">
          <DateRange
            editableDateInputs="true"
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
        </div>
      </div>
      <div className="offer__main__buttons">
        <Button
          animated
          className="offer__main__buttons__contact"
          color="brown"
        >
          <Button.Content visible>Contacter le propriétaire</Button.Content>
          <Button.Content hidden>
            <Icon name="envelope" />
          </Button.Content>
        </Button>
        <Button
          animated
          className="offer__main__buttons__book"
          color="teal"
        >
          <Button.Content visible>Réserver</Button.Content>
          <Button.Content hidden>
            <Icon name="bookmark" />
          </Button.Content>
        </Button>
        {role === 'admin' && (
          <Button
            animated
            className="offer__main__buttons__book"
            color="red"
          >
            <Button.Content visible>Supprimer l'annonce</Button.Content>
            <Button.Content hidden>
              <Icon name="bookmark" />
            </Button.Content>
          </Button>
        )}
        {role === 'admin' && (
          <Button
            animated
            className="offer__main__buttons__book"
            color="orange"
          >
            <Button.Content visible>Modifier l'annonce</Button.Content>
            <Button.Content hidden>
              <Icon name="bookmark" />
            </Button.Content>
          </Button>
        )}
      </div>
    </section>
  );
};

Offer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default withRouter(Offer);
