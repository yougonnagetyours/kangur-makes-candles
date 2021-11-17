import React from 'react'
import Product from './Product/Product.js'
import main2 from '../../pics/main2.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const Shop = ({ products, onAddToCart }) => {
  return (
    <>
        <div className="3rdrow box-border mb-10 lg:flex lg:flex-row-reverse lg:mb-20">
          <div className="lg:mr-3 max-w-screen-lg">
            <img 
              className="block" 
              src={main2} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-4xl mx-6 mt-3 tracking-widest">Sklep</p>
            <p className="text-sm font-light sm:text-xl mx-6 mt-3 tracking-widest">Poszukaj dla siebie coś odpowiedniego</p>
          </div>
        </div> 
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {products.map((product) => (
            <div className="w-10/12 mb-20 sm:flex sm:flex-wrap sm:justify-around sm:box-border" item key={product.id}>            
                <Product product={product} onAddToCart={onAddToCart} />           
            </div>
          ))}  
        </div>  
    </>    
  );
}

export default Shop;
