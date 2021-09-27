import { Button, Checkbox, Form } from 'semantic-ui-react';

import { Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail, setUserPassword, login } from '../../actions/user';

import './signin.scss';

import signinLogo from '../../assets/images/signin-logo.svg';

const Signin = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);

  const changeUserEmail = (value) => {
    dispatch(setUserEmail(event.target.value));
  };

  const changeUserPassword = (value) => {
    dispatch(setUserPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
    console.log('Test connexion');
  };

  // handleChange = (event) => {
  //   onChange(event.target.value, name);
  //   console.log(email, password);
  // };

  if (logged) {
    return <Redirect to="/" />;
  }

  return (
    <main className="signin">
      <img className="signin__logo" src={signinLogo} alt="signin" />
      <Form className="signin__form" autoComplete="on" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={changeUserEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe</label>
          <input
            value={password}
            type="password"
            placeholder="Mot de passe"
            onChange={changeUserPassword}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Se souvenir de moi" />
        </Form.Field>
        <div className="signin__form__buttons">
          <Button
            className="signin__form__button"
            color="blue"
            type="submit"
          >
            Se connecter
          </Button>
          {/* <Button className="signin__form__button" color="red">Mot de passe oublié</Button> */}
        </div>
      </Form>
    </main>
  );
};

export default Signin;
