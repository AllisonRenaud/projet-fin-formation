import { SAVE_LOCATIONS } from '../actions/offers';

export const initialState = {
  locations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
