import React, { useState } from "react";
import dataSlider from "../dataSlider/dataSlider";
import BtnSlider from "../btnslider/btnslider";
import classes from "../slider/slider.module.scss";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  return (
    <div className={classes.slider}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? `${classes.slide} ${classes.slide__active}`
                : `${classes.slide}`
            }
          >
            <img
              className={classes.slide__image}
              src={
                process.env.PUBLIC_URL + `/images/image-product${index + 1}.jpg`
              }
              alt="slider"
            />
          </div>
        );
      })}
      <div className={classes.btn__container}>
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </div>
    </div>
  );
}

export default Slider;
