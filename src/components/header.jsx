import React, { useState } from "react";
import classes from "../components/header.module.scss";

const Header = () => {
  // const [menuClose, setMenClose] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__holder}>
          <div className={classes.header__toggle}>
            {!menuOpen ? (
              <img
                onClick={menuToggleHandler}
                className={classes.header__togglemenu}
                src="/images/icon-menu.svg"
                width="16px"
                height="16px"
                alt=""
              />
            ) : (
              <img
                onClick={menuToggleHandler}
                className={classes.header__toggleclose}
                src="/images/icon-close.svg"
                width="16px"
                height="16px"
                alt=""
              />
            )}
          </div>
          <div className={classes.header__logo}>
            <a className={classes.header__logolink} href="/">
              <img
                className={classes.header__logoimage}
                src="/images/logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <nav
          className={`${classes.header__nav} ${
            menuOpen ? classes.header__isMenu : ""
          }`}
        >
          <ul className={classes.header__navlist}>
            <li className={classes.header__navlistitem}>
              <a className={classes.header__navlistitemlink} href="/">
                Collections
              </a>
            </li>
            <li className={classes.header__navlistitem}>
              <a className={classes.header__navlistitemlink} href="/">
                Men
              </a>
            </li>
            <li className={classes.header__navlistitem}>
              <a className={classes.header__navlistitemlink} href="/">
                Women
              </a>
            </li>
            <li className={classes.header__navlistitem}>
              <a className={classes.header__navlistitemlink} href="/">
                About
              </a>
            </li>
            <li className={classes.header__navlistitem}>
              <a className={classes.header__navlistitemlink} href="/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className={classes.header__cart}>
          <img
            className={classes.header__cartimage}
            src="/images/icon-cart.svg"
            alt=""
          />
          <img
            className={classes.header__cartavator}
            src="/images/image-avatar.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;