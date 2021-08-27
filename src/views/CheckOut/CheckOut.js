import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { ProductCard } from '../../components/ProductCard/ProductCard'
import "./CheckOut.scss";

export const CheckOut = () => {
  const [cart, setCart] = useState([]);
  useEffect( () => {
    const getDataFromLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem("saveProducts"));
      setCart([data])
      return data;
    }
    getDataFromLocalStorage();
  },[])
  console.log('productos para comprar', cart)
  return (
    <div className="CheckOut">
      <Header />
      <div className="CheckOut__line">
        <div className="container">
          <section className="CheckOut__list">
            <div className="CheckOut__header" style={{border: '1px solid red', width: '60%'}}>
              <h2>Carrito</h2>
              <div className="CheckOut__listProducts">
                  {cart.map( (item) => {
                    return <ProductCard key={item.id} description={item.description} id={item.description} image={item.image} price={item.price} title={item.title} />
                  })}
              </div>
            </div>
            <div className="CheckOut__space">space</div>
            <div className="CheckOut__basket">basket</div>
          </section>
        </div>
      </div>
    </div>
  );
};
