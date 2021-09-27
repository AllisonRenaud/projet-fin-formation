// == Import
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { connectUser } from '../../actions/user';

import './styles.css';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Offers from '../Offers';
import Offer from '../Offer';
import Signin from '../Signin';
import Signup from '../Signup';
import Profile from '../Profile';
import Admin from '../Backoffice/Admin';
import User from '../Backoffice/User';

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
        <Route path="/offers" exact>
          <Offers />
        </Route>
        <Route path="/offer/:1" exact>
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
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
