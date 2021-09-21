// == Import
import './styles.css';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// == Export
export default App;
