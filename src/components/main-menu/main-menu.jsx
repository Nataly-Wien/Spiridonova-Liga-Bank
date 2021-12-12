import './main-menu.scss';
import React from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {MAIN_MENU_ITEMS} from '../../const';

const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <ul className="main-menu">
      {MAIN_MENU_ITEMS.map((item) => {
        return (
          <li className="main-menu__item menu-link" key={`${item.name}`}>
            <a className="main-menu__link" href={`#${item.link}`} onClick={() => dispatch(ActionCreator.setMobileMenuOpen(false))} >{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
