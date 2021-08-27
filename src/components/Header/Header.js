import React, { useState, useEffect, useMemo} from "react";
import logo from "../../assets/images/logo.png";
import carrito from "../../assets/icons/carrito.svg";

import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = (products) => {
  const [saveData, setSaveData] = useState([]);
  useEffect( () => {
    setSaveData()
  }, [])
  return (
    <header className="header">
      <div className="container">
        <Link to="/" title="ShowCase">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="header-cart">
          <Link to="/cart" title="Checkout">
            <img className="header-cart__icon" src={carrito} alt="carrito" />
          </Link>
          <span className="header-cart__counter"></span>

          <div className="header-cart__info">
            <span className="header-cart__price">0 €</span>
            <span className="header-cart__text">Mi carrito</span>
          </div>
        </div>
      </div>
    </header>
  );
};
