import './footer.scss';
import React from 'react';
import Logo from '../logo/logo';
import Social from '../social/social';
import {FOOTER_MENU_ITEMS, LogoTypes} from '../../const';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Logo type={LogoTypes.FOOTER} />
        <div className="footer__text-wrapper">
          <p className="footer__text">150015, г. Москва, ул. Московская, д. 32</p>
          <p className="footer__text">Генеральная лицензия Банка России №1050</p>
          <p className="footer__text">Ⓒ Лига Банк, 2019</p>
        </div>
        <ul className="footer__menu footer-menu">
          {FOOTER_MENU_ITEMS.map((item, i) => {
            return (<li className="footer-menu__item" key={item}>
              <a className="footer-menu__link" href="#">{item}</a>
            </li>);
          })}
        </ul>
        <section className="footer__info">
          <h3 className="visually-hidden">Контакты</h3>
          <div className="footer__contact-block footer__contact-block--mobile">
            <span className="visually-hidden">Короткий номер</span>
            <a className="footer__contact footer__contact--link" href="tel:0904">*0904</a>
            <p className="footer__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </div>
          <div className="footer__contact-block footer__contact-block--phone">
            <span className="visually-hidden">Телефон</span>
            <a className="footer__contact footer__contact--link" href="tel:88001112233">8 800 111 22 33</a>
            <p className="footer__text">Бесплатный для&nbsp;всех городов России</p>
          </div>
        </section>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
