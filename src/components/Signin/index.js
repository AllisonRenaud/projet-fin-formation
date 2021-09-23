import { Button, Checkbox, Form } from 'semantic-ui-react';

import './signin.scss';

import signinLogo from '../../assets/images/signin-logo.svg';

const Signin = () => (
  <main className="signin">
    <img className="signin__logo" src={signinLogo} alt="signin" />
    <Form className="signin__form">
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Mot de passe</label>
        <input placeholder="Mot de passe" />
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

export default Signin;
