import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { fetchLocations, fetchOffers } from '../../actions/offers';

import LocationCard from '../Cards/LocationCard';

import './locations.scss';

const Locations = () => {
  // const dispatch = useDispatch();
  const locations = useSelector((state) => state.offers.locations);

  // useEffect(
  //   () => {
  //     dispatch(fetchLocations());
  //   },
  //   [],
  // );

  // useEffect(
  //   () => {
  //     dispatch(fetchOffers());
  //   },
  //   [],
  // );

  return (
    <section className="offers">

      {locations.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}

    </section>
  );
};

export default Locations;
