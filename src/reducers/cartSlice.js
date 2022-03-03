import { commerce } from '../lib/commerce';

const initialState = [];

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'cart/cartLoaded':
        case 'cart/cartAddedItem': 
        case 'cart/cartUpdated':
        case 'cart/cartRemoved':
        case 'cart/cartEmptied':
        case 'cart/cartRefreshed': 
            return payload;
        default: 
            return state;
    }
}
//Thunk functions
export const fetchCart = async (dispatch) => {
    const response = await commerce.cart.retrieve();
    dispatch({type: 'cart/cartLoaded', payload: response});
}
export const handleAddToCart = (productId, quantity) => async (dispatch) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    dispatch({type: 'cart/cartAddedItem', payload: cart});
    //Add notification handler
}
export const handleUpdateCartQty = (productId, quantity) => async (dispatch) => {
    const { cart } = await commerce.cart.update (productId, { quantity });
    dispatch({type: 'cart/cartUpdated', payload: cart});
}
export const handleRemoveFromCart = (productId) => async (dispatch) => {
    const { cart } = await commerce.cart.remove(productId);
    dispatch({type: 'cart/cartRemoved', payload: cart});
}
export const handleEmptyCart = async (dispatch) => {
    const { cart } = await commerce.cart.empty();
    dispatch({type: 'cart/cartEmptied', payload: cart});
    console.log('clear!');
}
export const refreshCart = async (dispatch) => {
    const newCart = await commerce.cart.refresh();
    dispatch({type: 'cart/cartRefreshed', payload: newCart})
}


