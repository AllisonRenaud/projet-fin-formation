// export const SET_USER_FIELD = 'SET_USER_FIELD';

// export const setUserField = (value, name) => (
//   {
//     type: SET_USER_FIELD,
//     value,
//     name,
//   }
// );

export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const setUserEmail = (value) => (
  {
    type: SET_USER_EMAIL,
    value,
  }
);

export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';

export const setUserPassword = (value) => (
  {
    type: SET_USER_PASSWORD,
    value,
  }
);

export const SET_USER_FIRSTNAME = 'SET_USER_FIRSTNAME';

export const setUserFirstname = (value) => (
  {
    type: SET_USER_FIRSTNAME,
    value,
  }
);

export const SET_USER_LASTNAME = 'SET_USER_LASTNAME';

export const setUserLastname = (value) => (
  {
    type: SET_USER_LASTNAME,
    value,
  }
);

export const SET_USER_PASSWORDCONFIRM = 'SET_USER_PASSWORDCONFIRM';

export const setUserPasswordConfirm = (value) => (
  {
    type: SET_USER_PASSWORDCONFIRM,
    value,
  }
);

export const LOGIN = 'LOGIN';

export const login = () => (
  {
    type: LOGIN,
  }
);

export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (data) => (
  {
    type: CONNECT_USER,
    data,
  }
);

export const SIGNUP = 'SIGNUP';

export const signup = (data) => (
  {
    type: SIGNUP,
    data,
  }
);

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const fetchUserData = (data) => (
  {
    type: FETCH_USER_DATA,
    data,
  }
);

export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (data) => (
  {
    type: SAVE_USER_DATA,
    data,
  }
);

export const SIGNOUT = 'SIGNOUT';

export const signout = () => (
  {
    type: SIGNOUT,
  }
);
