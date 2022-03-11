import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';
import searchReducer from './reducers/searchSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
  }
})

export default store;