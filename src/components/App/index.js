// == Import
import { Route, Switch } from 'react-router-dom';

import './styles.css';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Offers from '../Offers';
import Offer from '../Offer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/offers" exact>
        <Offers />
      </Route>
      <Route path="/offer/:1" exact>
        <Offer />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
