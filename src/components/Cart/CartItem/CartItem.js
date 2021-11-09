import React from 'react'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div className="w-10/12 mb-20">
      <div className="border border-black">
          <img 
            className=""
            src={item.image.url} 
            alt="candles" 
          />
        </div>
    </div>
  )
}

export default CartItem
