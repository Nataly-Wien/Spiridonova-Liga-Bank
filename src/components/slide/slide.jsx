import './slide.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({title, slogan, buttonText, buttonRef, slideNumber, currentSlide}) => {
  return (
    <div className={`slide slide--slide${slideNumber}${slideNumber !== currentSlide + 1 ? ` slide--hidden` : ``} container`}>
      {title && <p className={`slide__title slide__title--slide${slideNumber}`}>{title}</p>}
      {slogan && <h2 className={`slide__slogan slide__slogan--slide${slideNumber}`}>{slogan}</h2>}
      {buttonText && <a className={`slide__button slide__button--slide${slideNumber} button ${slideNumber === 1 ? `button--white` : `button--blue`}`} href={`#${buttonRef}`}>{buttonText}</a>}
    </div>
  )
};

Slide.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
  buttonText: PropTypes.string,
  buttonRef: PropTypes.string,
  styleNumber: PropTypes.number,
  currentSlide: PropTypes.number,
};

export default Slide;
