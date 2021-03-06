import React from "react";
import { useSelector, useDispatch } from "react-redux";
//reducers
import { setQ, setIsSearchActive, setIsSearchPanelActive } from '../../reducers/searchSlice';

import Product from '../Shop/Product/Product';

const SearchResults = () => {
  const products = useSelector(state => state.products.products);
  const { isSearchPanelActive, q } = useSelector(state => state.search);

  const dispatch = useDispatch();

  const search = (filterData) => {
    return filterData.filter((filteredItem) =>
      filteredItem.name.toLowerCase().includes(q.toLowerCase())
    );
  };

  const handleSearchPanelActive = () => {
    dispatch(setIsSearchPanelActive(!isSearchPanelActive))
  }

  const clearInput = () => {
    dispatch(setQ(''));
    dispatch(setIsSearchActive(false));
  }

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
