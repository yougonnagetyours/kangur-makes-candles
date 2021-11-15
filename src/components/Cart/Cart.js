import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => (
    <>
        <div className="my-10">
          <p className="text-center text-base tracking-widest">Twój koszyk jest pusty</p>
          <Link to="/shop" className="text-center text-base tracking-widest border-b-2 border-black	" >Dodaj produkty do koszyka!</Link>
        </div>
    </>
)

const FilledCart = () => (
  <>
      <div className="container" spacing={3}>
          {cart.line_items.map((item) => (
              <div className="grid" key={item.id}>
                  <CartItem
                      item={item}
                      onUpdateCartQty={handleUpdateCartQty}
                      onRemoveFromCart={handleRemoveFromCart}
                  />
              </div>
          ))}
      </div>
      <div className="my-10">
          <div className="text-base tracking-widest font-medium">
              Razem: {cart.subtotal.formatted} zł
          </div>
          <div>
              <div className="mt-2" onClick={handleEmptyCart}>
                <p className="text-base tracking-widest">Wyczyść koszyk</p>
              </div>
              <Link to="/checkout">
                <div className="mt-2">
                  <p className="text-base tracking-widest">Do kasy</p>
                </div>
              </Link>
          </div>
      </div>
  </>
)

if (!cart.line_items) return "Loading";

return (
    <div className="text-2xl text-center mt-6 tracking-widest">
      <p>Koszyk</p>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart
