/* eslint-disable camelcase */

import { Form, Button } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';

import Field from '../Field';

import {
  // saveOfferData,
  setOfferField,
  updateOffer,
  setUpdateMode,
} from '../../actions/offers';

import './createoffer.scss';

const Createoffer = () => {
  const dispatch = useDispatch();

  const {
    title,
    body,
    zip_code,
    city_name,
    country,
    street_name,
    street_number,
    price_ht,
    tax,
    main_picture,
    galery_picture_1,
    galery_picture_2,
    galery_picture_3,
    galery_picture_4,
    galery_picture_5,
    updateMode,
  } = useSelector((state) => state.offers.newoffer);

  const changeField = (value, name) => {
    dispatch(setOfferField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateOffer());
    dispatch(setUpdateMode());
  };

  const toggleUpdateMode = (event) => {
    event.preventDefault();
    dispatch(setUpdateMode());
  };

  return (
    <main className="create-offer">
      <h2 className="create-offer__title">Créez une nouvelle annonce</h2>
      <Form className="create-offer__form" onSubmit={handleSubmit}>
        <Field
          name="title"
          value={title}
          type="text"
          placeholder="Titre de l'annonce"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="city_name"
          value={city_name}
          type="text"
          placeholder="Ville"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="main_picture"
          value={main_picture}
          type="text"
          placeholder="Photo principale"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="galery_picture_1"
          value={galery_picture_1}
          type="text"
          placeholder="Photo 1"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="galery_picture_2"
          value={galery_picture_2}
          type="text"
          placeholder="Photo 2"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="galery_picture_3"
          value={galery_picture_3}
          type="text"
          placeholder="Photo 3"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="galery_picture_4"
          value={galery_picture_4}
          type="text"
          placeholder="Photo 4"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="galery_picture_5"
          value={galery_picture_5}
          type="text"
          placeholder="Photo 5"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="country"
          value={country}
          type="text"
          placeholder="Pays"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="street_name"
          value={street_name}
          type="text"
          placeholder="Nom de la rue"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="street_number"
          value={street_number}
          type="text"
          placeholder="Numéro de rue"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="zip_code"
          value={zip_code}
          type="text"
          placeholder="Code postal"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="body"
          value={body}
          type="text"
          placeholder="Description"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="price_ht"
          value={price_ht}
          type="text"
          placeholder="Prix hors taxe"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Field
          name="tax"
          value={tax}
          type="text"
          placeholder="Taxes"
          onChange={changeField}
          updateMode={!updateMode}
        />
        <Button color="brown" className="create-offer__form__button__modify" type="submit" onClick={toggleUpdateMode}>Modifier</Button>
        {updateMode && (
        <Button color="blue" className="create-offer__form__button__validate" type="submit">Valider</Button>
        )}
        <Button color="blue" className="create-offer__form__button__save" type="submit">Sauvegarder</Button>
        <Button color="green" className="create-offer__form__button__publish" type="submit">Publier</Button>
      </Form>
    </main>
  );
};

export default Createoffer;
