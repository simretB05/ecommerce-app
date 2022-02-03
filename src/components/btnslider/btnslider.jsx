import React from "react";
import classes from "../slider/slider.module.scss";

function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "prev" ? `${classes.prev}` : ` ${classes.next}`}
    >
      <img
        src={
          direction === "prev"
            ? process.env.PUBLIC_URL + `images/icon-previous.svg`
            : process.env.PUBLIC_URL + `images/icon-next.svg`
        }
        alt="prevbtn"
      />
    </button>
  );
}

export default BtnSlider;
