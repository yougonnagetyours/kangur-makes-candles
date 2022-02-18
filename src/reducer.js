import { combineReducers } from 'redux';

import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

export default rootReducer;