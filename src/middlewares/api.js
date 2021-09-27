import axios from 'axios';

import {
  connectUser,
  FETCH_USER_DATA,
  saveUserData,
  LOGIN,
  SIGNUP,
  signup,
} from '../actions/user';

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
        })
        .then(
          (response) => {
            store.dispatch(connectUser(response.data));
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accesToken}`;
            console.log('Connexion OK !');
            console.log(response.data.accessToken);
          },
        ).catch(
          () => console.log('error'),
        );
      next(action);
      break;
    }
    case SIGNUP: {
      const {
        user: {
          firstname, lastname, email, password, passwordConfirm,
        },
      } = store.getState();
      axiosInstance.post('/signup',
        {
          firstname,
          lastname,
          email,
          password,
          passwordConfirm,
        })
        .then(
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
    case FETCH_USER_DATA: {
      const { user: { token } } = store.getState();
      axiosInstance
        .get('/user',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(
          (response) => {
            store.dispatch(saveUserData(response.data));
          },
        )
        .catch(
          (error) => console.log(error),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
