/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';

import { Button, Icon } from 'semantic-ui-react';

import { withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import frLocale from 'date-fns/locale/fr';
import addMonths from 'date-fns/addMonths';

import Carousel from 'nuka-carousel';

import './offer.scss';

import { addDays, differenceInDays } from 'date-fns';
import Loading from '../Loading';
import { findOffer } from '../../selectors/offers';
import { setUpdateDaterange, deleteOffer } from '../../actions/offers';

const Offer = ({ match }) => {
  const dispatch = useDispatch();
  const role = localStorage.getItem('role');
  const { id } = match.params;

  const offer = useSelector(
    (state) => findOffer(state.offers.offers, id),
  );

  const loading = useSelector((state) => state.offers.loading);

  if (!offer) {
    return <Redirect to="/error" />;
  }

  if (loading) {
    return <Loading />;
  }

  const dateRange = useSelector((state) => state.offers.dateRange);

  const onChangeDatePicker = (event) => {
    dispatch(setUpdateDaterange([event.dateRange]));
  };

  const getDatesDisabled = (startDate, endDate) => {
    const days = differenceInDays(endDate, startDate);
    return [...Array(days + 1).keys()].map((i) => addDays(startDate, i));
  };

  const removeOffer = () => {
    dispatch(deleteOffer(id));
  };

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
            onChange={onChangeDatePicker}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            locale={frLocale}
            dateDisplayFormat="dd.MM.yyyy"
            minDate={new Date()}
            maxDate={addMonths(new Date(), 12)}
            startDatePlaceholder="Arrivée"
            endDatePlaceholder="Départ"
            disabledDates={getDatesDisabled(new Date('2021-10-16T04:00:00.000Z'), new Date('2021-10-23T14:00:00.000Z'))}
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
            onClick={removeOffer}
          >
            <Button.Content visible>Supprimer l'annonce</Button.Content>
            <Button.Content hidden>
              <Icon name="delete" />
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
              <Icon name="code" />
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
