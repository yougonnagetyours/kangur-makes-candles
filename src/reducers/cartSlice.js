import { commerce } from '../lib/commerce';

const initialState= [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/cartLoaded': {
            return action.payload;
        }
        case 'cart/cartAddedItem': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
//Thunk functions
export const fetchCart = async (dispatch) => {
    const response = await commerce.cart.retrieve();
    dispatch({type: 'cart/cartLoaded', payload: response});
}
export const handleAddToCart = (productId, quantity) = async (dispatch) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    dispatch({type: 'cart/cartAddedItem', payload: cart})
}

