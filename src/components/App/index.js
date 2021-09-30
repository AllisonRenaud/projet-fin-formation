// == Import
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { connectUser } from '../../actions/user';

import './styles.css';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Offers from '../Offers';
import Locations from '../Locations';
import Offer from '../Offer';
import Signin from '../Signin';
import Signup from '../Signup';
import Profile from '../Profile';
import Admin from '../Backoffice/Admin';
import User from '../Backoffice/User';
import Signout from '../Signout';
import Cgv from '../CGV';
import Legal from '../Legal';
import Faq from '../FAQ';
import Copyright from '../Copyright';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    dispatch(connectUser(accessToken));
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/locations" exact>
          <Locations />
        </Route>
        <Route path="/offers/location/:id" exact>
          <Offers />
        </Route>
        <Route path="/offers/:id" exact>
          <Offer />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/account/admin" exact>
          <Admin />
        </Route>
        <Route path="/account/user" exact>
          <User />
        </Route>
        <Route path="/cgv" exact>
          <Cgv />
        </Route>
        <Route path="/faq" exact>
          <Faq />
        </Route>
        <Route path="/legal" exact>
          <Legal />
        </Route>
        <Route path="/copyright" exact>
          <Copyright />
        </Route>
        <Route path="/signout" exact>
          <Signout />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
