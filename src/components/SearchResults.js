import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import Product from './Shop/Product/Product';

const SearchResults = ({ search, clearInput, handleSearchPanelActive }) => {
  const products = useSelector((state) => state.products, shallowEqual);

  return (
    <div className='flex flex-wrap box-border mx-2.5 my-6'>
      <div className="h-16"></div>
      {search(products).map((product) => (
       <div className="px-20 mb-20 sm:w-1/3 lg:w-1/4 sm:px-2 sm:mb-10" item key={product.id}>
         <div onClick={() => {
           clearInput();
           handleSearchPanelActive();
          }}>
          <Product product={product} clearInput={clearInput} />
        </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
