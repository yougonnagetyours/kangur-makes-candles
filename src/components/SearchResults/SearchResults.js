import React from "react";
import { useSelector } from "react-redux";

import Product from '../Shop/Product/Product';

const SearchResults = ({ clearInput, handleSearchPanelActive }) => {
  const products = useSelector(state => state.products.fetchedData);
  const q = useSelector(state => state.search.q)

  const search = (filterData) => {
    return filterData.filter((filteredItem) =>
      filteredItem.name.toLowerCase().includes(q.toLowerCase())
    );
  };

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
