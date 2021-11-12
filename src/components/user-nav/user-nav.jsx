import './user-nav.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {USER_NAV_ITEMS} from '../../const';

const UserNav = ({isOpen}) => {
  return (
    <ul className={`header__user-nav user-nav ${isOpen ? ` user-nav--open` : ``}`}>
      {USER_NAV_ITEMS.map((item) => {
        return (
          <li className={`user-nav__item menu-link${!isOpen ? ` menu-link--without-text` : ``}`} key={`${item}`}>
            <a className="user-nav__link" href="#">
              <svg className={`user-nav__icon ${isOpen ? ` user-nav__icon--open` : ``}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22" width="20" height="22">
                <path
                  d="M2.222 14.3h2.222v5.5h13.334V2.2H4.444v5.5H2.222V1.1c0-.292.117-.572.326-.778.208-.206.49-.322.785-.322H18.89c.295 0 .577.116.786.322.208.206.325.486.325.778v19.8c0 .292-.117.572-.325.778a1.117 1.117 0 01-.786.322H3.333c-.294 0-.577-.116-.785-.322a1.095 1.095 0 01-.326-.778v-6.6zM8.89 9.9V6.6l5.555 4.4-5.555 4.4v-3.3H0V9.9h8.889z"
                  fill="#1F1E25" />
              </svg>
              <span className={`user-nav__text${isOpen ? ` user-nav__text--visible` : ``}`}>{item}</span>
            </a>
          </li>
        );
      })}
    </ul >
  );
};

UserNav.propTypes = {
  isOpen: PropTypes.bool,
};

export default UserNav;
