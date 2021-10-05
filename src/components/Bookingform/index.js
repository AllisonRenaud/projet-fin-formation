/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Icon } from 'semantic-ui-react';
import Field from '../Field';

import {
  setUserField,
  setUpdateMode,
} from '../../actions/user';

import './bookingform.scss';

const Bookingform = () => {
  const dispatch = useDispatch();

  const {
    lastname,
    firstname,
    email,
    street_number,
    street_name,
    zip_code,
    city_name,
    country,
    phone,
    updateMode,
  } = useSelector((state) => state.user);

  const dateRange = useSelector((state) => state.offers.dateRange);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setUpdateMode());
  };

  const toggleUpdateMode = (event) => {
    event.preventDefault();
    dispatch(setUpdateMode());
  };

  return (
    <main className="booking">
      <h1 className="booking__main-title">Réservez votre chalet</h1>
      <div>
        <h2 className="booking__title">Confirmation de vos informations</h2>
        <Form className="booking__form" onSubmit={handleSubmit}>
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
        </Form>
        <div className="booking__form__buttons">
          <Button
            animated
            className="booking__form__buttons__modify"
            color="brown"
            onClick={toggleUpdateMode}
            type="submit"
          >
            <Button.Content visible>Modifier</Button.Content>
            <Button.Content hidden>
              <Icon name="save" />
            </Button.Content>
          </Button>
          {updateMode && (
          <Button
            animated
            color="teal"
            className="booking__form__buttons__validate"
          >
            <Button.Content visible>Valider</Button.Content>
            <Button.Content hidden>
              <Icon name="checkmark" />
            </Button.Content>
          </Button>
          )}
        </div>
      </div>
      <div>
        <h2 className="booking__title">Renseignez vos informations</h2>
        <Form className="booking__form" onSubmit={handleSubmit}>
          <Field
            name="street_number"
            value={street_number}
            type="text"
            placeholder="Numéro de rue"
          />
          <Field
            name="street_name"
            value={street_name}
            type="text"
            placeholder="Nom de rue"
          />
          <Field
            name="zip_code"
            value={zip_code}
            type="text"
            placeholder="Code postal"
          />
          <Field
            name="city_name"
            value={city_name}
            type="text"
            placeholder="Ville"
          />
          <Field
            name="country"
            value={country}
            type="text"
            placeholder="Pays"
          />
          <Field
            name="phone"
            value={phone}
            type="text"
            placeholder="Numéro de téléphone"
          />
        </Form>
      </div>
      <div>
        <h2 className="booking__title">Vos dates de séjour</h2>
        <p>Du 09 Octobre 2021 au 16 Octobre 2021</p>
      </div>
      <div className="booking__legals">
        <input type="checkbox" id="legals" name="CGV" />
        <label for="CGV">J'ai lu et j'accepte les conditions générales de vente</label>
      </div>
      <Button
        animated
        className="booking__form__buttons__book"
        color="green"
        type="submit"
      >
        <Button.Content visible>Réserver</Button.Content>
        <Button.Content hidden>
          <Icon name="checkmark" />
        </Button.Content>
      </Button>
    </main>
  );
};

export default Bookingform;
