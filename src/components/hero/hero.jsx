import React from "react";
import classes from "../hero/hero.module.scss";
import AddCart from "../addcart/addCart";
import Slider from "../slider/slider";
const Hero = (props) => {
  const { products, onAdd, cartItem, onRemove, setData, getData } = props;
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
              onRemove={onRemove}
              onAdd={onAdd}
              key={product.id}
              product={product}
              cartItem={cartItem}
              getData={getData}
              setData={setData}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
