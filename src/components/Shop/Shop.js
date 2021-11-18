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
          <div className="sm:flex sm:justify-center sm:items-center lg:mr-3 max-w-screen-lg sm:h-80 lg:h-80 sm:overflow-hidden">
            <img 
              className="block sm:w-full sm:mt-10" 
              src={main2} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl md:text-4xl mx-6 mt-3 tracking-widest">Sklep</p>
            <p className="text-sm font-light md:text-xl mx-6 mt-3 tracking-widest">Poszukaj dla siebie coś odpowiedniego</p>
          </div>
        </div> 
        <div className="flex flex-wrap justify-around box-border mx-2.5 sm:-mx-2 my-6 sm:justify-between">
          {products.map((product) => (
            <div className="w-10/12 mb-20 sm:w-1/3 lg:w-1/4 sm:px-8 sm:mb-10" item key={product.id}>            
                <Product product={product} onAddToCart={onAddToCart} />           
            </div>
          ))}  
        </div>  
    </>    
  );
}

export default Shop;
