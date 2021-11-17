import './slider-controls.scss';
import React from "react";
import PropTypes from 'prop-types';
import {SLIDER_LENGTH, TABS_LENGTH, SliderTypes} from '../../const';

const SliderControls = ({type, currentSlide, onButtonClick}) => {
  const sliderControlsLength = type === SliderTypes.SLIDER ? SLIDER_LENGTH : TABS_LENGTH;

  const getControlButtons = (length, current) => {
    let buttons = [];

    for (let i = 0; i < length; i++) {
      const legend = `${i + 1}-й слайд`;
      buttons.push(<li className="slider-controls__item" key={legend}>
        <button className={`slider-controls__button${i === current ? ` slider-controls__button--current` : ``}${type === SliderTypes.SLIDER && (current === 0 || current === 1) && i === current ? ` slider-controls__button--white` : ``}`}
          type="button" onClick={(i !== current) ? () => onButtonClick(i) : () => { }}>
          <span className="visually-hidden">{legend}</span>
        </button>
      </li>);
    }

    return buttons;
  };

  return (
    <div className={`slider-controls${type === SliderTypes.TABS ? ` slider-controls--hidden` : ``}`}>
      <ul className={`slider-controls__list${type === SliderTypes.TABS ? ` slider-controls__list--tabs` : ``}`}>
        {getControlButtons(sliderControlsLength, currentSlide)}
      </ul>
    </div >
  );
};

SliderControls.propTypes = {
  type: PropTypes.string.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default SliderControls;
