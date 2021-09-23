import { SET_USER_EMAIL, SET_USER_PASSWORD } from "../actions/user";

export const initialState = {
  logged: false,
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  birth_date: '',
  zip_code: '',
  city_name: '',
  country: '',
  street_name: '',
  street_number: '',
  password: '',
  role: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    case 'CONNECT_USER':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
