import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchLocations } from '../../actions/offers';

import Card from '../Card';

import './offers.scss';
import Alpes1 from '../../assets/images/Alpes1.jpeg';
import Alpes2 from '../../assets/images/Alpes2.jpeg';
import MassifCentral from '../../assets/images/MassifCentral.jpeg';
import Jura from '../../assets/images/Jura.jpeg';
import Pyrenees from '../../assets/images/Pyrenees.jpeg';
import Vosges from '../../assets/images/Vosges.jpeg';

const Offers = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.offers.locations);

  useEffect(
    () => {
      dispatch(fetchLocations());
    },
    [],
  );

  return (
    <section className="offers">

      {locations.map((location) => (
        <Card key={location.id} {...location} />
      ))}

      {/* <Card title="Alpes du nord" img={Alpes1} location="alpes-nord" />
      <Card title="Alpes du sud" img={Alpes2} location="alpes-sud" />
      <Card title="Massif central" img={MassifCentral} location="massif-central" />
      <Card title="Jura" img={Jura} location="jura" />
      <Card title="Pyrénées" img={Pyrenees} location="pyrenees" />
      <Card title="Vosges" img={Vosges} location="vosges" /> */}

      {/* <div className="main__card">
        <img src={Alpes1} alt="mountain" className="main__card__image" />
        <h2 className="main__card__title">Alpes du Nord</h2>
      </div>
      <div className="main__card">
        <img src={Alpes2} alt="mountain" className="main__card__image" />
        <h2 className="main__card__title">Alpes du Sud</h2>
      </div>
      <div className="main__card">
        <img src={Jura} alt="mountain" className="main__card__image" />
        <h2 className="main__card__title">Jura</h2>
      </div>
      <div className="main__card">
        <img src={MassifCentral} alt="mountain" className="main__card__image" />
        <h2 className="main__card__title">Massif Central</h2>
      </div>
      <div className="main__card">
        <img src={Pyrenees} alt="mountain" className="main__card__image" />
        <h2 className="main__card__title">Pyrénées</h2>
      </div>
      <div className="main__card">
        <img src={Vosges} alt="mountain" className="main__card__image" />
        <h2 className="main__card__title">Vosges</h2>
      </div> */}
    </section>
  );
};

export default Offers;
