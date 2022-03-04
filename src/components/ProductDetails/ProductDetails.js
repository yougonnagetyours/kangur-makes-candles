import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
//reducers
import { handleAddToCart } from '../../reducers/cartSlice';

const ProductDetails = ({ products }) => {


  const dispatch = useDispatch();
  let { id } = useParams();
  let handleAddToCartFunc;

  return (
      <div>  
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6">
          {products.map((product) => id === product.id ? (
            <div key={product.id}>
              {handleAddToCartFunc = () => {
                dispatch({type: 'SET_IS_BUSY'});
                dispatch(handleAddToCart(product.id, 1));
              }}
              <div className="">      
                <div className="header sm:flex sm:mx-4 sm:justify-between">
                  <div className="border border-black sm:w-1/2">
                    <img 
                      className=""
                      src={product.image.url} 
                      alt="candles" 
                    />
                  </div>
                  <div className="sm:flex justify-center sm:w-1/2">
                    <div className="sm:w-max"> 
                      <div className="mt-6 mb-2">
                        <p className="text-center text-base sm:text-lg tracking-widest">{product.name}</p>
                      </div>
                      <div className="mt-3 sm:mt-6 mb-4">
                        <p className="text-center text-base font-medium tracking-widest">{`${product.price.formatted} zł`}</p>
                      </div>
                      <div className="hidden sm:block mt-6 mb-2 py-2 border-2 border-black cursor-pointer w-auto" onClick={handleAddToCartFunc}>
                        <p className="text-center tracking-wider"  aria-label="Dodaj do koszyka">Do koszyka</p>
                      </div>
                  </div>
                </div>
                </div>
                <div className="description mx-4 mt-5 mb-2 py-2 text-base text-justify cursor-pointer w-auto tracking-widest" dangerouslySetInnerHTML={{ __html: product.description }}>
                </div>
                <div className="mx-4 mt-5 mb-2 py-2 border-2 border-black cursor-pointer w-auto sm:hidden">
                  <p className="text-center tracking-wider" onClick={handleAddToCartFunc} aria-label="Dodaj do koszyka">Do koszyka</p>
                </div>
                <Link to="/shop">
                  <div className="mx-auto mt-5 mb-2 py-2 cursor-pointer w-auto">
                    <p className="tracking-widest underline">Wstecz</p>
                  </div>
                </Link>
              </div>
            </div>
          ) :
          <div></div>
          )}  
        </div>  
      </div>    
  );
}

export default ProductDetails
