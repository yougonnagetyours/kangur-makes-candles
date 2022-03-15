import { createSlice } from '@reduxjs/toolkit';
import { commerce } from '../lib/commerce';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        fetchedData: [],
        isLoaded: false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.fetchedData = action.payload;
            state.isLoaded = true;
        }
    }
})

export const { setProducts } = productsSlice.actions;

export const fetchProducts = async (dispatch) => {
    const { data } = await commerce.products.list();
    dispatch(setProducts(data));
}

export default productsSlice.reducer;
