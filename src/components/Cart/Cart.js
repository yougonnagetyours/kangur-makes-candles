import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//reducers
import { handleEmptyCart } from '../../reducers/cartSlice';

import CartItem from './CartItem/CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart.fetchedData);
  const dispatch = useDispatch();
  const handleEmptyCartFunc = () => {
    dispatch({type: 'SET_IS_BUSY'});
    dispatch(handleEmptyCart);
  }

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
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start max-w-screen-md box-border sm:-mx-2 my-6">
            {cart.line_items.map((item) => (
                <div className="sm:w-1/3 sm:px-2" key={item.id}>
                    <CartItem item={item} />
                </div>
            ))}
        </div>
      </div>
      <div className="my-10">
          <div className="text-base tracking-widest font-medium">
              Razem: {cart.subtotal.formatted} zł
          </div>
          <div className="cursor-pointer my-2" onClick={handleEmptyCartFunc}>
                <p className="text-center text-base tracking-widest">Wyczyść koszyk</p>
          </div>
          <div className="flex justify-between w-10/12 mx-auto my-6">
              <Link to="/shop" className="cursor-pointer my-2 border-b-2 border-black">
                <p className="text-center text-base tracking-widest">Powrót do sklepu</p>
              </Link>
              <Link to="/checkout" className="border-2 border-black cursor-pointer px-4 py-2">                
                <p className="text-center text-base tracking-widest">Do kasy</p>
              </Link>
          </div>
      </div>
  </>
)

if (!cart.line_items) return "Loading";

return (
    <div className="text-center mt-6">
      <p className="text-2xl md:text-4xl tracking-widest">Koszyk</p>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart
