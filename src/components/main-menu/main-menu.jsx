import './main-menu.scss';
import React from 'react';
import {MAIN_MENU_ITEMS} from '../../const';

const MainMenu = () => {
  return (
    <ul className="main-menu">
      {MAIN_MENU_ITEMS.map((item) => {
        return (
          <li className="main-menu__item menu-link" key={`${item}`}>
            <a className="main-menu__link" href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
