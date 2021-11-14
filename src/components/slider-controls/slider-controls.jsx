import './slider-controls.scss';
import React from "react";
import PropTypes from 'prop-types';
import {SLIDER_LENGTH} from '../../const';

const SliderControls = ({currentSlide, onButtonClick}) => {
  const getControlButtons = (length, current) => {
    let buttons = [];

    for (let i = 0; i < length; i++) {
      const legend = `${i + 1}-й слайд`;
      buttons.push(<li className="slider-controls__item" key={legend}>
        <button className={`slider-controls__button${i === current ? ` slider-controls__button--current` : ``} ${current === 2 && i === current ? `slider-controls__button--grey` : ``}`}
          type="button" onClick={(i !== current) ? () => onButtonClick(i) : () => { }}>
          <span className="visually-hidden">{legend}</span>
        </button>
      </li>);
    }

    return buttons;
  };

  return (
    <div className="slider__controls slider-controls">
      <ul className="slider-controls__list">
        {getControlButtons(SLIDER_LENGTH, currentSlide)}
      </ul>
    </div >
  );
};

SliderControls.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default SliderControls;
