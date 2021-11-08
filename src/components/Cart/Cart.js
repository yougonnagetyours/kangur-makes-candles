import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => (
    <>
        <div className="">
          <p className="">Twój koszyk jest pusty</p>
          <Link to="/" className="" >Dodaj produkty do koszyka!</Link>
        </div>
    </>
)

  return (
    <div className="text-2xl text-center mt-6 tracking-widest">
      <p>Koszyk</p>
    </div>
  )
}

export default Cart
