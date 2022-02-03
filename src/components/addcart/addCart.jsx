import classes from "../addcart/addCart.module.scss";

const AddCart = (props) => {
  const { product, onAdd, onRemove, setData, getData } = props;

  return (
    <div>
      <div className={classes.hero__price}>
        <div className={classes.hero__price__holder}>
          <div className={classes.hero__price__container}>
            <p className={classes.hero__price__main}>
              ${product.price.toFixed(2) * 0.5}
            </p>
            <p className={classes.hero__price__discount}>50%</p>
          </div>
          <p className={classes.hero__price__original}>${product.price}</p>
        </div>

        <div className={classes.hero__price__counter__section}>
          <button
            className={classes.hero__price__counter__btn__minus}
            onClick={() => onRemove(product)}
          >
            <img src="/images/icon-minus.svg" alt="minus btn" />
          </button>
          <p className={classes.hero__price__counter__text}>{product.qty}</p>
          <button
            className={classes.hero__price__counter__btn__plus}
            onClick={() => onAdd(product)}
          >
            <img src="/images/icon-plus.svg" alt="plus btn" />
          </button>
        </div>

        <button className={classes.hero__price__cart}>
          <img
            className={classes.hero__price__cart__icon}
            src="/images/icon-cart.svg"
            alt="cart btn"
          />
          <p
            className={classes.hero__price__cart__text}
            onClick={() => setData(product)}
          >
            Add to cart
          </p>
        </button>
      </div>
      <button onClick={() => getData()}></button>
    </div>
  );
};

export default AddCart;
