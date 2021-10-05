/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';

import jwt_decode from 'jwt-decode';
import {
  FETCH_OFFERS,
  saveOffers,
  FETCH_LOCATIONS,
  saveLocations,
  CREATE_OFFER,
  DELETE_OFFER,
} from '../actions/offers';

import {
  FETCH_USER_DATA,
  saveUserData,
  LOGIN,
  SIGNUP,
  signup,
  UPDATE_USER,
} from '../actions/user';

const axiosInstance = axios.create({
  // baseURL: 'https://ochalet-api.herokuapp.com',
  baseURL: 'http://localhost:3000',
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
            store.dispatch(saveUserData(response.data.user));
            localStorage.setItem('user', JSON.stringify(response.data.user));
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
          }, {
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
    case FETCH_LOCATIONS:
      axiosInstance
        .get(
          '/locations',
        )
        .then(
          (response) => {
            store.dispatch(saveLocations(response.data));
          },
        );
      next(action);
      break;
    case FETCH_OFFERS:
      axiosInstance
        .get(
          '/offers',
        )
        .then(
          (response) => {
            store.dispatch(saveOffers(response.data));
          },
        );
      next(action);
      break;
    case CREATE_OFFER: {
      const token = localStorage.getItem('token');
      const data = new FormData();
      // data.append('img', fs.createReadStream(store.getState().offers.newoffer.main_picture));
      // const stateKeys = Object.keys(store.getState().offers.newoffer);
      // for (const key of stateKeys) {
      //   if (key.match(/main_picture|galery_picture/)) {
      //     data.append(key, fs.createReadStream(store.getState().offers.newoffer[key]));
      //   }
      //   else {
      //     data.append(key, store.getState().offers.newoffer[key]);
      //     console.log(store.getState().offers.newoffer[key]);
      //   }
      // }
      console.log(data);
      // const {
      //   title,
      //   body,
      //   zip_code,
      //   city_name,
      //   country,
      //   street_name,
      //   street_number,
      //   price_ht,
      //   tax,
      //   main_picture,
      //   galery_picture_1,
      //   galery_picture_2,
      //   galery_picture_3,
      //   galery_picture_4,
      //   galery_picture_5,
      //   location_id,
      // } = store.getState().offers.newoffer;
      // const newOffer = store.getState().offers;
      axiosInstance
        .post(
          '/admin/offers',
          // {
          //   title,
          //   body,
          //   zip_code,
          //   city_name,
          //   country,
          //   street_name,
          //   street_number,
          //   price_ht,
          //   tax,
          //   main_picture,
          //   galery_picture_1,
          //   galery_picture_2,
          //   galery_picture_3,
          //   galery_picture_4,
          //   galery_picture_5,
          //   location_id,
          // },
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(
          (response) => {
            console.log(response.data);
          },
        ).catch(
          (error) => console.log(error.message),
        );
      next(action);
      break;
    }
    case DELETE_OFFER: {
      const token = localStorage.getItem('token');
      axiosInstance
        .delete(`/admin/offers?id=${action.data}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(
          (response) => {
            console.log(response);
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
