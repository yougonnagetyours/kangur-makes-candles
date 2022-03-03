import { commerce } from '../lib/commerce';

const initialState = [];

export default function productsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'products/productsLoaded': 
            return payload;
        default: 
            return state;
    }
}

export const fetchProducts = async (dispatch) => {
    const { data } = await commerce.products.list();
    dispatch({type: 'products/productsLoaded', payload: data});
}