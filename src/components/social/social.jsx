import './social.scss';
import React from 'react';
import {SOCIAL_DATA, getSocialIcon} from '../../const';

const Social = () => {
  return (
    <ul className="social footer__social">
      {SOCIAL_DATA.map((item) => (<li className="social__item" key={item.title}>
        <a className="social__link" href="#">
          <span className="visually-hidden">{item.title}</span>
          {getSocialIcon(item.icon)}
        </a>
      </li>))}
    </ul>
  );
};

export default Social;
