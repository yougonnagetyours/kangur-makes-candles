import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { handleAddToCart } from '../../../reducers/cartSlice';

const Product = ({ product }) => {

  const dispatch = useDispatch();
  const handleAddToCartFunc = () => {
    dispatch({type: 'SET_IS_BUSY'});
    dispatch(handleAddToCart(product.id, 1));
  };

  return (
      <div className="">      
        <Link to={`/${product.id}`} >
        <div className="border border-black shadow-xl">
          <img 
            className=""
            src={product.image.url} 
            alt={product.name}  
          />
        </div>
        </Link>
        <div className="flex justify-around mt-6 mb-2">
          <p className="text-center text-base sm:text-sm tracking-widest">{product.name}</p>
        </div>
        <div className="flex justify-around mt-3 mb-4">
          <p className="text-center text-base tracking-widest">{`${product.price.formatted} zł`}</p>
        </div>
        <div className={`flex justify-around mx-auto mt-5 mb-2 py-2 border-2 border-black cursor-pointer w-auto sm:hidden`} onClick={handleAddToCartFunc}>
           <p className={`text-center tracking-wider`} aria-label="Dodaj do koszyka" >
             Do koszyka 
           </p>
        </div>
      </div>
  )
}

export default Product
