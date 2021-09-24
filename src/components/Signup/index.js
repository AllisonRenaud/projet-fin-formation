import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setUserEmail,
  setUserPassword,
  setUserFirstname,
  setUserLastname,
  setUserPasswordConfirm,
  signup,
} from '../../actions/user';

import './signup.scss';

import signupLogo from '../../assets/images/signup-logo.svg';

const Signup = () => {
  const dispatch = useDispatch();
  const lastname = useSelector((state) => state.user.lastname);
  const firstname = useSelector((state) => state.user.firstname);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const passwordConfirm = useSelector((state) => state.user.passwordConfirm);

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

  return (
    <main className="signup">
      {/* <h1 className="signup__title">Inscription</h1> */}
      <img className="signup__logo" src={signupLogo} alt="signup" />
      <Form className="signup__form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nom</label>
          <input
            type="text"
            value={lastname}
            placeholder="Nom"
            onChange={changeUserLastname}
          />
        </Form.Field>
        <Form.Field>
          <label>Prénom</label>
          <input
            type="text"
            value={firstname}
            placeholder="Prénom"
            onChange={changeUserFirstname}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={changeUserEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={changeUserPassword}
          />
        </Form.Field>
        <Form.Field>
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            value={passwordConfirm}
            placeholder="Confirmer mot de passe"
            onChange={changeUserPasswordConfirm}
          />
        </Form.Field>
        <div className="signup__form__buttons">
          <Button color="blue" className="signup__form__button__signup" type="submit">S'inscrire</Button>
          <Button color="red"><Link to="/signin" className="signup__button__signin">J'ai déjà un compte</Link></Button>
        </div>
      </Form>
    </main>
  );
};

export default Signup;
