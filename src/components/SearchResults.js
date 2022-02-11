import React from "react";
import Product from './Shop/Product/Product';

const SearchResults = ({ products, search, onAddToCart, clearInput }) => {
  return (
    <div className='flex flex-wrap box-border mx-2.5 my-6'>
       {search(products).map((product) => (
         <div className="px-2 mb-20 sm:w-1/3 lg:w-1/4 sm:px-2 sm:mb-10" item key={product.id}>
           <div onClick={clearInput}>
            <Product product={product} onAddToCart={onAddToCart} clearInput={clearInput} />
          </div>
         </div>
       ))}
    </div>
  );
};

export default SearchResults;
