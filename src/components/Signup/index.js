import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setUserField,
  signup,
} from '../../actions/user';

import './signup.scss';

import Field from '../Field';

import signupLogo from '../../assets/images/signup-logo.svg';

const Signup = () => {
  const dispatch = useDispatch();
  const lastname = useSelector((state) => state.user.lastname);
  const firstname = useSelector((state) => state.user.firstname);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const passwordConfirm = useSelector((state) => state.user.passwordConfirm);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup());
  };

  return (
    <main className="signup">
      <img className="signup__logo" src={signupLogo} alt="signup" />
      <Form className="signup__form" onSubmit={handleSubmit}>
        <Field
          name="lastname"
          type="text"
          value={lastname}
          placeholder="Nom"
          onChange={changeField}
        />
        <Field
          name="firstname"
          type="text"
          value={firstname}
          placeholder="Prénom"
          onChange={changeField}
        />
        <Field
          name="email"
          type="text"
          value={email}
          placeholder="Email"
          onChange={changeField}
        />
        <Field
          name="password"
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={changeField}
        />
        <Field
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          placeholder="Confirmer mot de passe"
          onChange={changeField}
        />
        <div className="signup__form__buttons">
          <Button color="blue" className="signup__form__button__signup" type="submit">S'inscrire</Button>
          <Button color="red"><Link to="/signin" className="signup__button__signin">J'ai déjà un compte</Link></Button>
        </div>
      </Form>
    </main>
  );
};

export default Signup;
