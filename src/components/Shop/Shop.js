import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product/Product.js';
import main2 from '../../pics/main2.jpg';

const Shop = ({ clearInput, handleAddToCartPopup }) => {
  
  const products = useSelector(state => state.products.fetchedData);

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
        <div className="flex justify-center">
          <div className="flex flex-wrap box-border mx-2.5 my-6">
            {products.map((product) => (
              <div className="px-2 mb-20 sm:w-1/3 lg:w-1/4 sm:px-2 sm:mb-10" key={product.id}>            
                  <Product product={product} clearInput={clearInput} handleAddToCartPopup={handleAddToCartPopup} />
              </div>
            ))}  
          </div> 
        </div> 
    </>    
  );
}

export default Shop;
