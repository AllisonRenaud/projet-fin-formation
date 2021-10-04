/* eslint-disable camelcase */
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const OfferCard = ({ title, main_picture, id }) => (

  <Link className="offers__card" to={`/offers/${id}`}>
    <img src={main_picture} alt="mountain" className="offers__card__image" />
    <h2 className="offers__card__title">{title}</h2>
  </Link>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  main_picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default OfferCard;
