import { useSelector } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { filterOffers } from '../../selectors/offers';

import OfferCard from '../Cards/OfferCard';

import './offers.scss';

const Offers = ({ match }) => {
  const { id } = match.params;

  const filteredOffers = useSelector(
    (state) => filterOffers(state.offers.offers, id),
  );

  return (
    <section className="offers">

      {filteredOffers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}

    </section>
  );
};

export default withRouter(Offers);
