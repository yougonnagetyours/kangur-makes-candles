import { combineReducers } from 'redux';

import productsReducer from './reducers/productsSlice';

const rootReducer = combineReducers({
    products: productsReducer,
})

export default rootReducer;