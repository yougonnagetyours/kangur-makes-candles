import React from 'react'
import { useParams } from 'react-router'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const ProductDetails = ({ products }) => {

  let { id } = useParams();

  return (
      <div>  
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {products.map((product) => id === product.id ? (
            <>
            <div className="">      
              <div className="border border-black">
                <img 
                  className=""
                  src={product.image.url} 
                  alt="candles" 
                />
              </div>
              <div className="mt-6 mb-2">
                <p className="text-center text-base tracking-widest">{product.name}</p>
              </div>
              <div className="mt-3 mb-4">
                <p className="text-center text-base tracking-widest">{`${product.price.formatted} zł`}</p>
              </div>
              <div className="mx-auto mt-5 mb-2 py-2 text-base text-justify cursor-pointer w-auto tracking-widest" dangerouslySetInnerHTML={{ __html: product.description }}>
              </div>
              <div className="mx-auto mt-5 mb-2 py-2 border-2 border-black cursor-pointer w-auto">
                <p className="text-center tracking-wider">Do koszyka</p>
              </div>
              <Link to="/shop">
                <div className="mx-auto mt-5 mb-2 py-2 cursor-pointer w-auto">
                  <p className="tracking-widest underline">Wstecz</p>
                </div>
              </Link>
            </div>
            </>
          ) :
          <div></div>
          )}  
        </div>  
      </div>    
  );
}

export default ProductDetails