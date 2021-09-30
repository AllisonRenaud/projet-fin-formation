import { SAVE_OFFERS, SAVE_LOCATIONS } from '../actions/offers';

export const initialState = {
  offers: [],
  locations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_OFFERS:
      return {
        ...state,
        offers: action.data,
      };
    case SAVE_LOCATIONS:
      return {
        ...state,
        locations: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
