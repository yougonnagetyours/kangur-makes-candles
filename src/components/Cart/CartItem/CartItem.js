import React from 'react'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div className="w-6/12 mx-auto mt-10">
      <div className="border border-black">
          <img 
            className=""
            src={item.image.url} 
            alt="candles" 
          />
      </div>
      <div className="my-2">
        <p className="text-center text-base tracking-widest">{item.name}</p>
      </div>
      <div className="my-2">
        <p className="text-center text-base tracking-widest">{`${item.price.formatted} zł`}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="mx-2 cursor-pointer" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
        <p className="mx-2">{item.quantity}</p>
        <button className="mx-2 cursor-pointer" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
      </div>
      <div className="text-center text-base tracking-widest border-2 border-black mt-6 p-2 cursor-pointer" onClick={() => onRemoveFromCart(item.id)}>Usuń z koszyka</div>
    </div>
  )
}

export default CartItem
