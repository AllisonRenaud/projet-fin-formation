/* eslint-disable camelcase */
import { Button, Form } from 'semantic-ui-react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setUserField,
  updateUser,
  fetchUserData,
  setUpdateMode,
} from '../../actions/user';

import Field from '../Field';

import './profile.scss';

const Profile = () => {
  const dispatch = useDispatch();

  const {
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
    updateMode,
  } = useSelector((state) => state.user);

  const role = localStorage.getItem('role');

  let admin = false;
  if (role === 'admin') {
    admin = true;
  }

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser());
  };

  const toggleUpdateMode = (event) => {
    event.preventDefault();
    dispatch(setUpdateMode());
  };

  const deleteAccount = (event) => {
    event.preventDefault();
  };

  useEffect(
    () => {
      dispatch(fetchUserData());
    },
    [],
  );

  return (
    <main className="profile">
      <h2 className="profile__title">Bienvenue sur votre profil</h2>
      <Form className="profile__form" onSubmit={handleSubmit}>
        <Field
          name="lastname"
          value={lastname}
          type="text"
          placeholder="Nom"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="firstname"
          value={firstname}
          type="text"
          placeholder="Prénom"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="phone"
          value={phone}
          type="tel"
          placeholder="Téléphone"
          onChange={changeField}
          updateMode={!updateMode}
        />
        {!admin && (
        <Field
          name="birthDate"
          value={birth_date}
          type="date"
          placeholder="Date de naissance"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        {!admin && (
        <Field
          name="streetNumber"
          value={street_number}
          type="number"
          placeholder="Numéro de rue"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        {!admin && (
        <Field
          name="streetName"
          type="text"
          value={street_name}
          placeholder="Nom de rue"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        {!admin && (
        <Field
          name="zipCode"
          type="text"
          value={zip_code}
          placeholder="Code postal"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        {!admin && (
        <Field
          name="cityName"
          type="text"
          value={city_name}
          placeholder="Ville"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        {!admin && (
        <Field
          name="country"
          type="text"
          value={country}
          placeholder="Pays"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        {updateMode && (
        <Field
          name="password"
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={changeField}
          updateMode={!updateMode}
        />
        )}
        <div className="profile__form__buttons">
          <Button color="blue" className="profile__form__button__modify" onClick={toggleUpdateMode}>Modifier</Button>
          {updateMode && (
          <Button color="blue" className="profile__form__button__validate" type="submit">Valider</Button>
          )}
          <Button color="red" className="profile__form__button__delete" onClick={deleteAccount}>Supprimer mon compte</Button>
        </div>
      </Form>
    </main>
  );
};

export default Profile;
