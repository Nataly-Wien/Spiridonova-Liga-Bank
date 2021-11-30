import './main-page.scss';
import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import CreditCalculator from '../credit-calculator/credit-calculator';
import DepartmentMap from '../department-map/department-map';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

const MainPage = () => {
  return (
    <div className="page-main page">
      <Header />
      <main>
        <h1 className="visually-hidden">Кредиты</h1>
        <Slider />
        <Tabs />
        <CreditCalculator />
        <DepartmentMap />
      </main>
      <Footer />
      <Modal />
    </div >
  );
};

export default MainPage;
