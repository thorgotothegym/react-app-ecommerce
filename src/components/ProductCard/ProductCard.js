import React, { useState, useEffect } from "react";

import stars from "../../assets/icons/estrella.svg";
import eye from "../../assets/icons/ojo.svg";

export const ProductCard = ({
  image,
  title,
  price,
  description,
  id,
  saveProduct,
}) => {
  const [style, setStyle] = useState({ display: "none" });

  const [addToCart, setAddToCart] = useState(false);

  const addingProduct = () => {
    setAddToCart(true);
    saveProduct(image, title, price, description, id, addToCart);
  };

  return (
    <section className="product-slider" onClick={() => addingProduct()}>
      <article
        className="product-slider__slide product"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
        id={addToCart ? "addToCart" : ""}
      >
        <div className="product__img-wrapper">
          <div style={style}>
            <div className="product__img-wrapper__eye" />
          </div>

          <img src={image} alt={description} />

          <div className="product__starts">
            start
            {/* <img src={stars} className="star" alt="product star" /> */}
          </div>
        </div>
        <h4 className="product__title">{title}</h4>
        <div className="product__price">
          {/*           <div style={style}>
            <img src={stars} alt="stars" />
          </div> */}
          <button style={style}>Click</button>
          <span>{price} €</span>
        </div>
      </article>
    </section>
  );
};
