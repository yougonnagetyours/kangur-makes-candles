import { commerce } from '../lib/commerce';

const initialState = {
    fetchedData: [],
    isAddedToCart: false,
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'LOAD_CART': 
        case 'UPDATE_CART':
        case 'REMOVE_CART':
        case 'EMPTY_CART':
        case 'REFRESH_CART': 
            return {
                ...state,
                fetchedData: payload,
            };
        case 'ADD_TO_CART': 
            return {
                ...state,
                fetchedData: payload,
                isAddedToCart: true,
            }
        case 'DISABLE_NOTIFICATION':
            return {
                ...state,
                isAddedToCart: false,
            }   
        default: 
            return state;
    }
}
//Thunk functions
export const fetchCart = async (dispatch) => {
    const response = await commerce.cart.retrieve();
    dispatch({type: 'LOAD_CART', payload: response});
}
export const handleAddToCart = (productId, quantity) => async (dispatch) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    dispatch({type: 'ADD_TO_CART', payload: cart});
    setTimeout(() => {
        dispatch({type: 'DISABLE_NOTIFICATION'});
      }, 2000);
}
export const handleUpdateCartQty = (productId, quantity) => async (dispatch) => {
    const { cart } = await commerce.cart.update (productId, { quantity });
    dispatch({type: 'UPDATE_CART', payload: cart});
}
export const handleRemoveFromCart = (productId) => async (dispatch) => {
    const { cart } = await commerce.cart.remove(productId);
    dispatch({type: 'REMOVE_CART', payload: cart});
}
export const handleEmptyCart = async (dispatch) => {
    const { cart } = await commerce.cart.empty();
    dispatch({type: 'EMPTY_CART', payload: cart});
}
export const refreshCart = async (dispatch) => {
    const newCart = await commerce.cart.refresh();
    dispatch({type: 'REFRESH_CART', payload: newCart})
}


