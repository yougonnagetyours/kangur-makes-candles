import { combineReducers } from 'redux';

import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';
import searchReducer from './reducers/searchSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
})

export default rootReducer;