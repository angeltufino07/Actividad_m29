import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/CartSlice";
import "./styles.css";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 10);
  const dispatch = useDispatch();

  //add product to cart handler
  const addProduct = () => {
    dispatch(addToCart(product));   
  };

  return (
      <div className="product1">
        <img
          src={product?.image}
        />
          <p>{title}</p>
          <p>${product?.price}</p>
          <button onClick={addProduct}>
            AGREGAR AL CARRITO
          </button>
        
      </div>
    
  );
};

export default (ProductCard);