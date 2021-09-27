import { Button, Form } from 'semantic-ui-react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setUserEmail,
  setUserPassword,
  setUserFirstname,
  setUserLastname,
  setUserPasswordConfirm,
  signup,
  fetchUserData,
} from '../../actions/user';

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

  const changeUserFirstname = (value) => {
    dispatch(setUserFirstname(event.target.value));
    console.log(firstname);
  };

  const changeUserLastname = (value) => {
    dispatch(setUserLastname(event.target.value));
  };

  const changeUserEmail = (value) => {
    dispatch(setUserEmail(event.target.value));
  };

  const changeUserPassword = (value) => {
    dispatch(setUserPassword(event.target.value));
  };

  const changeUserPasswordConfirm = (value) => {
    dispatch(setUserPasswordConfirm(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup());
    console.log('création user');
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
        <Form.Field>
          <label>Nom</label>
          <input
            type="text"
            value={lastname}
            placeholder={role}
            onChange={changeUserLastname}
          />
        </Form.Field>
        <Form.Field>
          <label>Prénom</label>
          <input
            type="text"
            value={firstname}
            placeholder={firstname}
            onChange={changeUserFirstname}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="text"
            value={email}
            placeholder={email}
            onChange={changeUserEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>Téléphone</label>
          <input
            type="text"
            value={phone}
            placeholder={phone}
            onChange=""
          />
        </Form.Field>
        {!admin && (
        <Form.Field>
          <label>Date de naissance</label>
          <input
            type="text"
            value={birthDate}
            placeholder={birthDate}
            onChange=""
          />
        </Form.Field>
        )}
        {!admin && (
        <Form.Field>
          <label>Numéro de rue</label>
          <input
            type="text"
            value={streetNumber}
            placeholder={streetNumber}
            onChange=""
          />
        </Form.Field>
        )}
        {!admin && (
        <Form.Field>
          <label>Nom de rue</label>
          <input
            type="text"
            value={streetName}
            placeholder={streetName}
            onChange=""
          />
        </Form.Field>
        )}
        {!admin && (
        <Form.Field>
          <label>Code postal</label>
          <input
            type="text"
            value={zipCode}
            placeholder={zipCode}
            onChange=""
          />
        </Form.Field>
        )}
        {!admin && (
        <Form.Field>
          <label>Ville</label>
          <input
            type="text"
            value={cityName}
            placeholder={cityName}
            onChange=""
          />
        </Form.Field>
        )}
        {!admin && (
        <Form.Field>
          <label>Pays</label>
          <input
            type="text"
            value={country}
            placeholder={country}
            onChange=""
          />
        </Form.Field>
        )}
        <div className="profile__form__buttons">
          <Button color="blue" className="profile__form__button__modify" type="submit">Modifier</Button>
          <Button color="red" className="profile__form__button__delete">Supprimer mon compte</Button>
        </div>
      </Form>
    </main>
  );
};

export default Profile;
