import React from "react";
import classes from "../components/slider.module.scss";

function BtnSlider({ moveSlide, direction }) {
  console.log("simret");
  return (
    <button
      onClick={moveSlide}
      className={direction === "prev" ? "btn__slide  prev" : "btn__slide  next"}
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
