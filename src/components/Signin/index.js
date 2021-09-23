import { Button, Checkbox, Form } from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail, setUserPassword } from '../../actions/user';

import './signin.scss';

import signinLogo from '../../assets/images/signin-logo.svg';

const Signin = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const changeUserEmail = (value) => {
    dispatch(setUserEmail(event.target.value));
    console.log(email);
  };

  const changeUserPassword = (value) => {
    dispatch(setUserPassword(event.target.value));
    console.log(password);
  };

  // handleChange = (event) => {
  //   onChange(event.target.value, name);
  //   console.log(email, password);
  // };

  return (
    <main className="signin">
      <img className="signin__logo" src={signinLogo} alt="signin" />
      <Form className="signin__form">
        <Form.Field>
         <label>Email</label>
          <input
            autoComplete="on"
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
          <Button className="signin__form__button" color="blue" type="submit">Se connecter</Button>
          <Button className="signin__form__button" color="red" type="submit">Mot de passe oublié</Button>
        </div>
      </Form>
    </main>
  );
};

export default Signin;
