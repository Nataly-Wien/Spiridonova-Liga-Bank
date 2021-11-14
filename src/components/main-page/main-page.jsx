import './main-page.scss';
import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Slide from '../slide/slide';
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
        {/* <div className="page-main__wrapper container"> */}
        <Slider>
          <Slide title={`Лига Банк`} slogan={`Кредиты на любой случай`} buttonText={`Рассчитать кредит`} slideNumber={1} />
          <Slide title={`Лига Банк`} slogan={`Ваша уверенность в завтрашнем дне`} buttonText={``} slideNumber={2} />
          <Slide title={`Лига Банк`} slogan={`Всегда рядом`} buttonText={`Найти отделение`} slideNumber={3} />
        </Slider>
        {/* <Tabs /> */}
        {/* </div> */}
      </main>
      {/* <Footer /> */}

      {/* {isModalShow && (<Modal onClose={handleModalOpenClose}>
        <LoginForm onEnterButtonClick={handleEnterButtonClick} onCloseClick={handleModalOpenClose} />
      </Modal>)} */}
    </div>
  );
};

export default MainPage;
