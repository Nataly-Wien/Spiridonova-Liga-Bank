import './slide.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({title, slogan, buttonText, slideNumber}) => {
  return (
    <div className={`slide__wrapper slide__wrapper--slide${slideNumber} container`}>
      <p className={`slide__title slide__title--slide${slideNumber}`}>{title}</p>
      <h2 className={`slide__slogan slide__slogan--slide${slideNumber}`}>{slogan}</h2>
      {buttonText && <a className={`slide__button slide__button--slide${slideNumber} button ${slideNumber === 1 ? `button--white` : `button--blue`}`} href="#">{buttonText}</a>}
    </div>
  )
};

Slide.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
  buttonText: PropTypes.string,
  styleNumber: PropTypes.string,
};

export default Slide;
