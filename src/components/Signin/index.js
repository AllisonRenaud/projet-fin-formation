/* eslint-disable jsx-a11y/label-has-associated-control */

import { Button, Form } from 'semantic-ui-react';

import { Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
  setUserField, login,
} from '../../actions/user';

import './signin.scss';

import Field from '../Field';

import signinLogo from '../../assets/images/signin-logo.svg';

const Signin = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  if (logged) {
    return <Redirect to="/" />;
  }

  return (
    <main className="signin">
      <img className="signin__logo" src={signinLogo} alt="signin" />
      <Form className="signin__form" autoComplete="on" onSubmit={handleSubmit}>
        <Field
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={changeField}
        />
        <Field
          name="password"
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
        />
        <div className="signin__form__buttons">
          <Button
            className="signin__form__button"
            color="blue"
            type="submit"
          >
            Se connecter
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default Signin;
