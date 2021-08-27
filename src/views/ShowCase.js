import React, { useState, useEffect } from "react";

import axios from "axios";
import "../components/ProductCard/ProductCard.scss";

import { Header } from "../components/Header/Header";
import { BreadCrum } from "../components/BreadCrum/BreadCrum";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const ShowCase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataChildren] = useState([]);

  const [addToCart, setAddToCart] = useState(false);
  const [saveProducts, setSaveProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=4"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (image, title, price, description, id) => {
    setAddToCart(true);

    setSaveProducts([...saveProducts, {image, title, price, description, id}]);
    localStorage.setItem("saveProducts", JSON.stringify(saveProducts));
  };
  
  return (
    <div>
      <Header products={saveProducts} />
      <BreadCrum />
      {loading === true ? (
        "loading"
      ) : (
        <div className="showcase">
          <div className="showcase__container">
            {data.map((el) => {
              return (
                <ProductCard
                  key={el.id}
                  title={el.title}
                  description={el.description}
                  image={el.image}
                  price={el.price}
                  id={el.id}
                  setDataChildren={dataChildren}
                  saveProduct={handleClick}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
