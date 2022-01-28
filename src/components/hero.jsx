import React from "react";
import classes from "../components/hero.module.scss";
import AddCart from "./addCart";
import Slider from "./slider";
const Hero = (props) => {
  const { products, onAdd, cartItem } = props;
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
        </div>
        <div>
          {products.map((product) => (
            <AddCart
              onAdd={onAdd}
              key={product.id}
              product={product}
              cartItem={cartItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
