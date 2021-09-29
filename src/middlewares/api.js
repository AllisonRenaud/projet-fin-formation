/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';

import jwt_decode from 'jwt-decode';

import {
  connectUser,
  FETCH_USER_DATA,
  saveUserData,
  LOGIN,
  SIGNUP,
  signup,
  UPDATE_USER,
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
            const token = response.data.accessToken;
            const decoded = jwt_decode(token);
            store.dispatch(connectUser(response.data));
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
            localStorage.setItem('token', token);
            localStorage.setItem('id', decoded.id);
            localStorage.setItem('role', decoded.role);
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
          },
        ).catch(
          (error) => console.log(error.message),
        );
      next(action);
      break;
    }
    case FETCH_USER_DATA: {
      // const { user: { token } } = store.getState();
      const token = localStorage.getItem('token');
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
          // localStorage.setItem('token', token),
        )
        .catch(
          (error) => console.log(error),
        );
      next(action);
      break;
    }
    case UPDATE_USER: {
      const token = localStorage.getItem('token');
      const {
        user: {
          firstname,
          lastname,
          email,
          phone,
          birth_date,
          street_number,
          street_name,
          zip_code,
          city_name,
          country,
          password,
        },
      } = store.getState();
      const id = localStorage.getItem('id');
      axiosInstance
        .patch('/user',
          {
            id,
            firstname,
            lastname,
            email,
            phone,
            birth_date,
            street_number,
            street_name,
            zip_code,
            city_name,
            country,
            password,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(
          (response) => {
            store.dispatch(saveUserData(response.data));
          },
          // localStorage.setItem('token', token),
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
