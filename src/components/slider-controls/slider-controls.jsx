import './slider-controls.scss';
import React from "react";
import PropTypes from 'prop-types';
import {SLIDER_LENGTH, TABS_LENGTH, SliderTypes} from '../../const';

const SliderControls = ({type, currentSlide}) => {
  const sliderControlsLength = type === SliderTypes.SLIDER ? SLIDER_LENGTH : TABS_LENGTH;

  const getControlButtons = (length, current) => {
    let buttons = [];

    for (let i = 0; i < length; i++) {
      const legend = `${i + 1}-й слайд`;

      buttons.push(
        <li className="slider-controls__item" key={legend}>
          <div className={`slider-controls__button${i === current ? ` slider-controls__button--current` : ``}${type === SliderTypes.SLIDER && (current === 0 || current === 1) && i === current ? ` slider-controls__button--white` : ``}`} >
            <span className="visually-hidden">{legend}</span>
          </div>
        </li>
      );
    }

    return buttons;
  };

  return (
    <ul className={`slider-controls${type === SliderTypes.TABS ? ` slider-controls--tabs` : ``}`}>
      {getControlButtons(sliderControlsLength, currentSlide)}
    </ul>
  );
};

SliderControls.propTypes = {
  type: PropTypes.string.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default SliderControls;
