import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from "../../slice/CartSlice";
import EmptyCart from "../../EmptyCart/index";
import "./styles.css";


const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  //Eliminar un producto
  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product)); 
  };

  if (products.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cartShop">
      
      {products?.cart?.map((product) => {
        return (
          <div className="disp-inline" key={product.id} >
            
              <img className="imgCart" src={product.image} alt="product" width="50px" />
              <h5>
                {product.title.slice(0, 20)}
              </h5>
              <h6>${product.price}</h6>
            
              <h6>Cantidad {product.quantity}</h6>
              <button className="btn-remove"
                onClick={() => {
                  removeProductHandler(product);
                }}
                >
                remove
              </button>
          </div>
        );
      })}
      
    </div>
  );
};

export default Cart;
