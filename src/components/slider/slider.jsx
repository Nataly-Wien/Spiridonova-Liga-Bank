import './slider.scss';
import React, {useState, useEffect} from 'react';
import Slide from '../slide/slide';
import SliderControls from '../slider-controls/slider-controls';
import {useSwipeScrollOffset} from '../../hooks/use-swipe-scroll-offset';
import {CURRENT_SLIDE, SLIDER_LENGTH, SLIDER_DATA, SliderTypes} from '../../const';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(CURRENT_SLIDE);
  const [scrollRef, handleScroll] = useSwipeScrollOffset(setCurrentSlide);

  const getNextSlide = () => {
    currentSlide < SLIDER_LENGTH - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: document.documentElement.clientWidth * currentSlide,
        behavior: `smooth`,
      });
    }

    const timer = setInterval(getNextSlide, 4000);

    return () => clearInterval(timer);
  });


  return (
    <section className={`slider slider--slide${currentSlide + 1}`} >
      <div className="slider__wrapper" ref={scrollRef} onScroll={() => handleScroll()}>
        {SLIDER_DATA.map((item, i) => {
          return (
            <Slide title={item.title} slogan={item.slogan} buttonText={item.buttonText} buttonRef={item.buttonRef} slideNumber={i + 1}
              currentSlide={currentSlide} key={`${item.title}-${item.slogan}-${item.buttonText}`} />
          );
        })}
      </div>
      <SliderControls type={SliderTypes.SLIDER} currentSlide={currentSlide} onButtonClick={(btn) => setCurrentSlide(btn)} />
    </section >
  );
};

export default Slider;
