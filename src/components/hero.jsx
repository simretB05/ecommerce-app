import React from "react";
import classes from "../components/hero.module.scss";
import Slider from "./slider";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__container}>
        <div className={classes.hero__image__container}>
          <Slider />
        </div>
        <div className={classes.hero__content}>
          <h3 className={classes.hero__content__header}> Sneaker Company</h3>
          <h1 className={classes.hero__content__title}>
            Fall Limited Edition Sneakers
          </h1>
          <p className={classes.hero__content__text}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className={classes.hero__price__holder}>
            <div className={classes.hero__price__container}>
              <p className={classes.hero__price__main}>$125.00</p>
              <p className={classes.hero__price__discount}>50%</p>
            </div>
            <p className={classes.hero__price__original}>$250.00</p>
          </div>
          <div className={classes.hero__counter__section}>
            <button className={classes.hero__counter__btn__minus}>
              <img src="/images/icon-minus.svg" alt="minus btn" />
            </button>
            <p className={classes.hero__counter__text}>0</p>
            <button className={classes.hero__counter__btn__plus}>
              <img src="/images/icon-plus.svg" alt="plus btn" />
            </button>
          </div>
          <button className={classes.hero__cart}>
            <img
              className={classes.hero__cart__icon}
              src="/images/icon-cart.svg"
              alt="cart btn"
            />
            <p className={classes.hero__cart__text}>Add to cart</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
