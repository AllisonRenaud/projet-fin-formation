/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';

import { Button, Icon } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import frLocale from 'date-fns/locale/fr';
import addMonths from 'date-fns/addMonths';

import Carousel from 'nuka-carousel';

import './offer.scss';

import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { setUpdateDaterange, fetchOffer } from '../../actions/offers';

const Offer = ({ match }) => {
  const dispatch = useDispatch();
  const role = localStorage.getItem('role');
  const { id } = match.params;

  const offerSelected = useSelector((state) => state.offers.offerSelected);

  useEffect(() => {
    dispatch(fetchOffer(id));
  }, [dispatch]);

  const dateRange = useSelector((state) => state.offers.dateRange);

  const onChangeDatePicker = (event) => {
    dispatch(setUpdateDaterange([event.dateRange]));
  };

  const getDatesDisabled = (bookings) => {
    const reservations = bookings.map((reservation) => eachDayOfInterval({
      start: new Date(reservation.reservation_start),
      end: new Date(reservation.reservation_end),
    }));
    const newArray = Array.prototype.concat.apply([], reservations);
    return newArray;
  };

  return (
    <>
      { offerSelected ? 
      <section className="offer">
        <div className="offer__header">
        <h2 className="offer__header__title">{offerSelected.offer.title}</h2>
        <h3 className="offer__header__city">{offerSelected.offer.city_name}</h3>
        <div className="offer__header__pictures">
          <Carousel>
            <img src={offerSelected.offer.main_picture} alt="main" />
            <img src={offerSelected.offer.galery_picture_1} alt="galery" />
            <img src={offerSelected.offer.galery_picture_2} alt="galery" />
            <img src={offerSelected.offer.galery_picture_3} alt="galery" />
            <img src={offerSelected.offer.galery_picture_4} alt="galery" />
            <img src={offerSelected.offer.galery_picture_5} alt="galery" />
          </Carousel>
        </div>
      </div>
        <div className="offer__main">
        <div
          className="offer__main__description"
          dangerouslySetInnerHTML={{
            __html: offerSelected.offer.body,
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
            disabledDates={getDatesDisabled(offerSelected.bookings)}
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
      : <div> Not Found</div> }
    </>
  );
};

Offer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default withRouter(Offer);
