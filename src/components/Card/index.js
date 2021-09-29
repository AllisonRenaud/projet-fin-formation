import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ name, picture, location }) => (
  <Link className="main__card" to={`/offers?location_id=${location}`}>
    <img src={picture} alt="mountain" className="main__card__image" />
    <h2 className="main__card__title">{name}</h2>
  </Link>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  location: PropTypes.number.isRequired,
};

export default Card;
