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
      <Form className="create-offer__form" onSubmit={handleSubmit}>
        <Field
          name="title"
          value={title}
          type="text"
          placeholder="Titre de l'annonce"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="city_name"
          value={city_name}
          type="text"
          placeholder="Ville"
          onChange={changeField}
          updateMode=""
        />
        <Button color="brown" className="create-offer__form__button__modify" type="submit" onClick={toggleUpdateMode}>Modifier</Button>
        <Field
          name="main_picture"
          value={main_picture}
          type="file"
          placeholder="Photo principale"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="galery_picture_1"
          value={galery_picture_1}
          type="file"
          placeholder="Photo 1"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="galery_picture_2"
          value={galery_picture_2}
          type="file"
          placeholder="Photo 2"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="galery_picture_3"
          value={galery_picture_3}
          type="file"
          placeholder="Photo 3"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="galery_picture_4"
          value={galery_picture_4}
          type="file"
          placeholder="Photo 4"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="galery_picture_5"
          value={galery_picture_5}
          type="file"
          placeholder="Photo 5"
          onChange={changeField}
          updateMode=""
        />
        <Button color="violet" className="create-offer__form__button__add" type="submit">Ajouter</Button>
        <Button color="brown" className="create-offer__form__button__modify" type="submit" onClick={toggleUpdateMode}>Modifier</Button>
        <Field
          name="country"
          value={country}
          type="text"
          placeholder="Pays"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="street_name"
          value={street_name}
          type="text"
          placeholder="Nom de la rue"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="street_number"
          value={street_number}
          type="number"
          placeholder="Numéro de rue"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="zip_code"
          value={zip_code}
          type="number"
          placeholder="Code postal"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="body"
          value={body}
          type="text"
          placeholder="Description"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="price_ht"
          value={price_ht}
          type="number"
          placeholder="Prix hors taxe"
          onChange={changeField}
          updateMode=""
        />
        <Field
          name="tax"
          value={tax}
          type="number"
          placeholder="Taxes"
          onChange={changeField}
          updateMode=""
        />
        <Button color="blue" className="create-offer__form__button__save" type="submit">Sauvegarder</Button>
        <Button color="brown" className="create-offer__form__button__modify" type="submit" onClick={toggleUpdateMode}>Modifier</Button>
        <Button color="green" className="create-offer__form__button__publish" type="submit">Publier</Button>
      </Form>
    </main>
  );
};

export default Createoffer;
