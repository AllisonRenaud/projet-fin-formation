import { Button, Icon, Form } from 'semantic-ui-react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setUserField,
  signup,
  fetchUserData,
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
    birthDate,
    streetNumber,
    streetName,
    zipCode,
    cityName,
    country,
    role,
  } = useSelector((state) => state.user);

  let admin = false;
  if (role === 'admin') {
    admin = true;
  }

  const updateMode = true;

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup());
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
        />
        <Field
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={changeField}
        />
        <Field
          name="phone"
          value={phone}
          type="tel"
          placeholder="Téléphone"
          onChange={changeField}
        />
        {!admin && (
        <Field
          name="birthDate"
          value={birthDate}
          type="date"
          placeholder="Date de naissance"
          onChange={changeField}
        />
        )}
        {!admin && (
        <Field
          name="streetNumber"
          value={streetNumber}
          type="number"
          placeholder="Numéro de rue"
          onChange={changeField}
        />
        )}
        {!admin && (
        <Field
          name="streetName"
          type="text"
          value={streetName}
          placeholder="Nom de rue"
          onChange={changeField}
        />
        )}
        {!admin && (
        <Field
          name="zipCode"
          type="text"
          value={zipCode}
          placeholder="Code postal"
          onChange={changeField}
        />
        )}
        {!admin && (
        <Field
          name="cityName"
          type="text"
          value={cityName}
          placeholder="Ville"
          onChange={changeField}
        />
        )}
        {!admin && (
        <Field
          name="country"
          type="text"
          value={country}
          placeholder="Pays"
          onChange={changeField}
        />
        )}
        <div className="profile__form__buttons">
          <Button
            animated
            className="signup__form__button__modify"
            color="brown"
            type="submit"
          >
            <Button.Content visible>Modifier</Button.Content>
            <Button.Content hidden>
              <Icon name='save' />
            </Button.Content>
          </Button>
          <Button
            animated
            className="signup__form__button__delete"
            color="red"
          >
            <Button.Content visible>Supprimer mon compte</Button.Content>
            <Button.Content hidden>
              <Icon name='trash' />
            </Button.Content>
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default Profile;
