import './main-page.scss';
import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
// import Tabs from '../tabs/tabs';
// import Footer from '../footer/footer';
// import Modal from '../modal/modal';
// import {useScrollBlock} from '../../hooks/use-scroll-block';

const MainPage = () => {
  return (
    <div className="page-main">
      <Header />
      <main>
        <h1 className="visually-hidden">Кредиты</h1>
        <Slider />
        {/* <Tabs /> */}
      </main>
      {/* <Footer /> */}

      {/* {isModalShow && (<Modal onClose={handleModalOpenClose}>
        <LoginForm onEnterButtonClick={handleEnterButtonClick} onCloseClick={handleModalOpenClose} />
      </Modal>)} */}
    </div>
  );
};

export default MainPage;
