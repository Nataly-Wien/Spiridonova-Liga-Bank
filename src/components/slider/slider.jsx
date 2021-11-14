import './slider.scss';
import React, {useState} from 'react';
import SliderControls from '../slider-controls/slider-controls';
import {CURRENT_SLIDE} from '../../const';

const Slider = ({children}) => {
  const [currentSlide, setCurrentSlide] = useState(CURRENT_SLIDE);

  const handleSliderButtonClick = (button) => setCurrentSlide(button);

  return (
    <section className={`slider slider--slide${currentSlide + 1}`} >
      {React.Children.toArray(children)[currentSlide]}
      <SliderControls currentSlide={currentSlide} onButtonClick={handleSliderButtonClick} />
    </section >
  );
};

export default Slider;
