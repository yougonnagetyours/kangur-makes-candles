import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => (
    <>
        <div className="">
          <p className="text-center text-base tracking-widest">Twój koszyk jest pusty</p>
          <Link to="/" className="text-center text-base tracking-widest" >Dodaj produkty do koszyka!</Link>
        </div>
    </>
)

const FilledCart = () => (
  <>
      <div className="container" spacing={3}>
          {cart.line_items.map((item) => (
              <div className="grid">
                  <CartItem
                      item={item}
                      onUpdateCartQty={handleUpdateCartQty}
                      onRemoveFromCart={handleRemoveFromCart}
                  />
              </div>
          ))}
      </div>
      <div className="my-10">
          <div>
              Razem: {cart.subtotal.formatted} zł
          </div>
          <div>
              <div className="mt-2" onClick={handleEmptyCart}>Wyczyść koszyk
              </div>
              <div component={Link} to="/checkout" className="mt-2">Do kasy
              </div>
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
