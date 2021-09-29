export const FETCH_OFFERS = 'FETCH_OFFERS';

export const fetchOffers = () => ({ type: FETCH_OFFERS });

export const SAVE_OFFERS = 'SAVE_OFFERS';

export const saveOffers = (data) => (
  {
    type: SAVE_OFFERS,
    data,
  }
);

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';

export const fetchLocations = () => ({ type: FETCH_LOCATIONS });

export const SAVE_LOCATIONS = 'SAVE_LOCATIONS';

export const saveLocations = (data) => ({
  type: SAVE_LOCATIONS,
  data,
});
