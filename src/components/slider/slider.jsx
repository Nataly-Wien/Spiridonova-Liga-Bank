import './slider.scss';
import React, {useState, useEffect, useRef} from 'react';
import Slide from '../slide/slide';
import SliderControls from '../slider-controls/slider-controls';
import {CURRENT_SLIDE, SLIDER_LENGTH, SLIDER_DATA} from '../../const';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(CURRENT_SLIDE);

  const handleSliderButtonClick = (button) => setCurrentSlide(button);

  const getNextSlide = () => {
    currentSlide < SLIDER_LENGTH - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
  };

  const scrollRef = useRef(null);

  const handleSliderScroll = () => {
    if (scrollRef.current.scrollLeft % document.documentElement.clientWidth === 0) {
      setCurrentSlide(scrollRef.current.scrollLeft / document.documentElement.clientWidth);
    }
  };

  useEffect(() => {
    const timer = setInterval(getNextSlide, 4000);

    return () => clearInterval(timer);
  });

  return (
    <section className={`slider slider--slide${currentSlide + 1}`} >
      <div className="slider-wrapper" ref={scrollRef} onScroll={() => handleSliderScroll()}>
        {SLIDER_DATA.map((item, i) => {
          return (
            <Slide title={item.title} slogan={item.slogan} buttonText={item.buttonText} slideNumber={i + 1}
              currentSlide={currentSlide} key={`${item.title} ${item.slogan} ${item.buttonText}`} />
          );
        })}
      </div>
      <SliderControls currentSlide={currentSlide} onButtonClick={handleSliderButtonClick} />
    </section >
  );
};

export default Slider;
