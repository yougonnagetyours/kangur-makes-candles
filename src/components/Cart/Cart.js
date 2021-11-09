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
      <div className="cartDetails">
          <div>
              Razem: {cart.subtotal.formatted} zł
          </div>
          <div>
              <button className="emptyButton" size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Wyczyść koszyk</button>
              <button component={Link} to="/checkout" className="checkoutButton" size="large" type="button" variant="contained" color="primary">Do kasy</button>
          </div>
      </div>
  </>
)

if (!cart.line_items) return "Loading";

return (
    <div className="text-2xl text-center mt-6 tracking-widest">
      <p>Koszyk</p>
    </div>
  )
}

export default Cart
