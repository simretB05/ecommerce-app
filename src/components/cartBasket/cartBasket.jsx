import React, { useState } from "react";
import classes from "../header/header.module.scss";

function CartBasket(props) {
  const { product, onTrash } = props;
  const [popup, setPopup] = useState(false);

  const popupHandler = () => {
    setPopup((p) => !p);
  };

  return (
    <div className={classes.header__cart}>
      <img
        onClick={popupHandler}
        className={classes.header__cartimage}
        src="/images/icon-cart.svg"
        alt=""
      />
      <img
        className={classes.header__cartavator}
        src="/images/image-avatar.png"
        alt=""
      />
      {popup ? (
        <div className={classes.shoping__cart}>
          <div className={classes.shoping__cart__popup}>
            <h3 className={classes.shoping__cart__titlecart}>Cart</h3>
            <hr className={classes.shoping__cart__hr} />
            {product.qty === 0 ? (
              <div className={classes.shoping__cart__empty}>
                <h3 className={classes.shoping__cart__title}>
                  your cart is empty
                </h3>
              </div>
            ) : (
              <div className={classes.shoping__cart__main__cont}>
                <div className={classes.shoping__cart__container}>
                  <div className={classes.shoping__cart__img__container}>
                    <img
                      className={classes.shoping__cart__img}
                      src="/images/image-product-thumbnail1.jpg"
                      alt="product"
                    />
                  </div>

                  <div className={classes.shoping__cart__text__container}>
                    <h3 className={classes.shoping__cart__title}>
                      {product.discription}
                    </h3>
                    <p className={classes.shoping__cart__text}>
                      $
                      <span className={classes.shoping__cart__price}>
                        {product.price * 0.5}
                      </span>
                      <span className={classes.shoping__cart__number}></span>
                      <span className={classes.shoping__cart__span}>
                        x{product.qty}
                      </span>
                      ${(product.price * product.qty * 0.5).toFixed(2)}
                    </p>
                  </div>

                  <button
                    className={classes.shoping__cart__delete}
                    onClick={() => onTrash(product)}
                  >
                    <img src="/images/icon-delete.svg" alt=" deletn icon" />
                  </button>
                </div>

                <button className={classes.shoping__cart__btn}>Checkout</button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartBasket;
