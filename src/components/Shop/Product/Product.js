import React from 'react'

const Product = ({ product }) => {
  return (
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
        <div className="mx-auto mt-5 mb-2 py-2 border-2 border-black cursor-pointer w-auto">
           <p className="text-center tracking-wider">Do koszyka</p>
        </div>
        <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
          <p className="text-center tracking-wider">Kup teraz</p>
        </div> 
      </div>
  )
}

export default Product
