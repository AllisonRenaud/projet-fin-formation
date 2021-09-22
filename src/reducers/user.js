export const initialState = {
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CONNECT_USER':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
