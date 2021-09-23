import axios from 'axios';

import { connectUser, LOGIN, SIGNUP, signup } from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'https://ochalet-api.herokuapp.com',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();
      axiosInstance.post('/signin',
        {
          email,
          password,
        },
      ).then(
        (response) => {
          store.dispatch(connectUser(response.data));
          //axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          console.log('Connexion OK !');
        },
      ).catch(
        () => console.log('error'),
      );
      next(action);
      break;
    };
    case SIGNUP: {
      const { user: { firstname, lastname, email, password, passwordConfirm } } = store.getState();
      axiosInstance.post('/signup',
        {
          firstname,
          lastname,
          email,
          password,
          passwordConfirm,
        },
      ).then(
        (response) => {
          store.dispatch(signup(response.data));
          console.log('Utilisateur enregistré !');
        },
      ).catch(
        (error) => console.log(error.message),
      );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
