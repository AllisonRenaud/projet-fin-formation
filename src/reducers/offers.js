import {
  SAVE_OFFERS,
  SAVE_LOCATIONS,
  SET_OFFER_FIELD,
  SET_UPDATE_MODE,
  SELECT_LOCATION,
} from '../actions/offers';

export const initialState = {
  offers: [],
  locations: [],
  newoffer: {
    title: '',
    body: '',
    zip_code: '',
    city_name: '',
    country: '',
    street_name: '',
    street_number: '',
    price_ht: '',
    tax: '',
    main_picture: '',
    galery_picture_1: '',
    galery_picture_2: '',
    galery_picture_3: '',
    galery_picture_4: '',
    galery_picture_5: '',
    location_id: '',
    updateMode: false,
  },
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
    case SET_OFFER_FIELD:
      return {
        ...state,
        newoffer: {
          ...state.newoffer,
          [action.name]: action.value,
        },
      };
    case SELECT_LOCATION:
      return {
        ...state,
        newoffer: {
          ...state.newoffer,
          location_id: action.value,
        },
      };
    case SET_UPDATE_MODE:
      return {
        ...state,
        newoffer: {
          ...state.newoffer,
          updateMode: !state.updateMode,
        },
      };
    default:
      return state;
  }
};

export default reducer;
