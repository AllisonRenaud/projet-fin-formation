import Alpes1 from '../../assets/Alpes-nord.svg';
import Alpes2 from '../../assets/Alpes-sud.svg';
import Jura from '../../assets/Jura.svg';
import MassifCentral from '../../assets/Massif-central.svg';
import Pyrénées from '../../assets/Pyrénées.svg';
import Vosges from '../../assets/Vosges.svg';

import './main.scss';

const Main = () => (
  <main className="main">
    <div className="main__card">
      <img src={Alpes1} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Alpes du Nord</h2>
      <p className="main__card__description">Découvrez nos chalets dans les Alpes du Nord.</p>
    </div>
    <div className="main__card">
      <img src={Alpes2} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Alpes du Sud</h2>
      <p className="main__card__description">Découvrez nos chalets dans les Alpes du Sud.</p>
    </div>
    <div className="main__card">
      <img src={MassifCentral} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Jura</h2>
      <p className="main__card__description">Découvrez nos chalets dans le Jura.</p>
    </div>
    <div className="main__card">
      <img src={Alpes1} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Massif Central</h2>
      <p className="main__card__description">Découvrez nos chalets dans le Massif Central.</p>
    </div>
    <div className="main__card">
      <img src={Alpes2} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Pyrénées</h2>
      <p className="main__card__description">Découvrez nos chalets dans les Pyrénées.</p>
    </div>
    <div className="main__card">
      <img src={MassifCentral} alt="mountain" className="main__card__image" />
      <h2 className="main__card__title">Vosges</h2>
      <p className="main__card__description">Découvrez nos chalets dans les Vosges.</p>
    </div>
  </main>
);

export default Main;
