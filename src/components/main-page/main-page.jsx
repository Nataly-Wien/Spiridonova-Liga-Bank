import './main-page.scss';
import React from 'react';
import Header from '../header/header';
// import Slider from '../slider/slider';
// import Tabs from '../tabs/tabs';
// import Footer from '../footer/footer';
// import Modal from '../modal/modal';
// import {useScrollBlock} from '../../hooks/use-scroll-block';

const MainPage = () => {
  return (
    <div className="page-main">
      <Header />
      <main>
        <div className="page-main__wrapper container">
          <h1>Кредиты на любой случай</h1>
          {/* <Slider />
          <Tabs /> */}
        </div>
      </main>
      {/* <Footer /> */}

      {/* {isModalShow && (<Modal onClose={handleModalOpenClose}>
        <LoginForm onEnterButtonClick={handleEnterButtonClick} onCloseClick={handleModalOpenClose} />
      </Modal>)} */}
    </div>
  );
};

export default MainPage;
