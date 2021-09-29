/* eslint-disable camelcase */
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import './offercard.scss';

const OfferCard = ({ title, main_picture, id }) => (

  <Link className="main__card" to={`/offers/${id}`}>
    <img src={main_picture} alt="mountain" className="main__card__image" />
    <h2 className="main__card__title">{title}</h2>
  </Link>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  main_picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default OfferCard;
