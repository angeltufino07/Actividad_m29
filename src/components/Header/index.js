import React from "react";
import { NavLink } from "react-router-dom";
import ShopCart from "../../assets/cartShop.png"
import "./styles.css"
const Header = () => {
  
  return (
    <div className="HeaderBack">
              <p className="Tonline">
                TIENDA ONLINE
              </p>
<div className="nav">
              <NavLink to="/">
                 <p className="InicioHead" >Inicio</p>
              </NavLink>  
              <NavLink to="/cart">
                 <img className="ShopCart" src={ShopCart} />
              </NavLink>
              </div>        
    </div>
  );
};

export default Header;

