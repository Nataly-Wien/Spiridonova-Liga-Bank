import './logo.scss';
import React from 'react';
import PropTypes from 'prop-types';
import logoDesktop from './../../img/logo_ligabank_desktop.svg';
import logoTablet from './../../img/logo_ligabank_tablet.svg';
import logoMobile from './../../img/logo_ligabank_mobile.svg';

const Logo = ({type}) => {
  return (
    <a className={`${type}__logo logo`}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={logoDesktop} />
        <source media="(min-width: 768px)" srcSet={logoTablet} />
        <img className="logo__img" src={logoMobile} alt="Логотип Лига Банка" />
      </picture>
    </a>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
};

export default Logo;
