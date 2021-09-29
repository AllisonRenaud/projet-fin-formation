export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';

export const fetchLocations = () => ({ type: FETCH_LOCATIONS });

export const SAVE_LOCATIONS = 'SAVE_LOCATIONS';

export const saveLocations = (data) => (
  {
    type: SAVE_LOCATIONS,
    data,
  }
);
