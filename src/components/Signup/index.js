import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import './signup.scss';

import signupLogo from '../../assets/images/signup-logo.svg';

const Signup = () => (
  <main className="signup">
    {/* <h1 className="signup__title">Inscription</h1> */}
    <img className="signup__logo" src={signupLogo} alt="signup" />
    <Form className="signup__form">
      <Form.Field>
        <label>Nom</label>
        <input type="text" placeholder="Nom" />
      </Form.Field>
      <Form.Field>
        <label>Prénom</label>
        <input type="text" placeholder="Prénom" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Mot de passe</label>
        <input type="password" placeholder="Mot de passe" />
      </Form.Field>
      <Form.Field>
        <label>Confirmer le mot de passe</label>
        <input type="password" placeholder="Confirmer mot de passe" />
      </Form.Field>
      <div className="signup__form__buttons">
        <Button color="blue" className="signup__form__button__signup" type="submit">S'inscrire</Button>
        <Button color="red"><Link to="/signin" className="signup__button__signin">J'ai déjà un compte</Link></Button>
      </div>
    </Form>
  </main>
);

export default Signup;
