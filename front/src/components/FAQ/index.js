import { useSelector } from 'react-redux';

import './faq.scss';

import Header from '../Header';

const Faq = () => {
const logged = useSelector((state) => state.user.logged);

  return (
    <>
      <Header logged={logged} />
      <section className="faq">
        <h1>Foire aux questions</h1>
      </section>
    </>
  );
};

export default Faq;
