import React from 'react';
import { useDispatch } from 'react-redux';
//reducers
import { handleUpdateCartQty, handleRemoveFromCart } from '../../../reducers/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="w-10/12 mx-auto mt-10 mb-6">
      <div className="border border-black shadow-xl">
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
        <p className="text-center text-lg tracking-widest">{`${item.price.formatted * item.quantity} zł`}</p>
      </div>
      <div className="flex justify-center mt-2">
        <button 
          className="mx-2 cursor-pointer" 
          onClick={() => {
            dispatch({type: 'SET_IS_BUSY'});
            dispatch(handleUpdateCartQty(item.id, item.quantity - 1));
          }}
        >-</button>
        <p className="mx-2">{item.quantity}</p>
        <button 
          className="mx-2 cursor-pointer" 
          onClick={() => {
            dispatch({type: 'SET_IS_BUSY'});
            dispatch(handleUpdateCartQty(item.id, item.quantity + 1));
          }}
          >+</button>
      </div>
      <div 
        className="text-center text-base tracking-widest border-2 border-black mt-2 p-2 cursor-pointer" 
        onClick={() => {
          dispatch({type: 'SET_IS_BUSY'});
          dispatch(handleRemoveFromCart(item.id));
        }}>
          <p>Usuń</p>
      </div>
    </div>
  )
}

export default CartItem;
