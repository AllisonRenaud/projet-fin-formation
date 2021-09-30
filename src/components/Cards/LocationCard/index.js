/* eslint-disable camelcase */
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import './locationcard.scss';

const LocationCard = ({ name, picture, id }) => (

  <Link className="main__card" to={`/offers/location/${id}`}>
    <img src={picture} alt="mountain" className="main__card__image" />
    <h2 className="main__card__title">{name}</h2>
  </Link>
);

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default LocationCard;
