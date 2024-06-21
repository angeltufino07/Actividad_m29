import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/ProductSlice";
import ProductCard from "../Product/index";
import "./styles.css";



const ProductList = () => {

  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
 
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    
      <div className="products-grid">
        
          {products?.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
      
      </div>
    
  );
};

export default ProductList;