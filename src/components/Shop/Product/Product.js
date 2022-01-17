import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
      <div className="">      
        <Link to={`/shop/${product.id}`}>
        <div className="border border-black">
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
        <div className="flex justify-around mx-auto mt-5 mb-2 py-2 border-2 border-black cursor-pointer w-auto sm:hidden">
           <p className="text-center tracking-wider" aria-label="Dodaj do koszyka" onClick={handleAddToCart}>Do koszyka</p>
        </div>
      </div>
  )
}

export default Product
