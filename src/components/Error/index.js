import './error.scss';
import gif from '../../assets/images/mountain.gif';

const Error = () => (
  <section>
    <h1 className="page-not-found">Error 404 - Page not found</h1>
    <img className="page-not-found__gif" src={gif} alt="" />
  </section>
);

export default Error;
