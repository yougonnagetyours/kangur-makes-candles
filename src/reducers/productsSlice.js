import { commerce } from '../lib/commerce';

const initialState = {
    fetchedData: [],
    isLoaded: false,
};

export default function productsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'LOAD_PRODUCTS': 
            return {
                ...state,
                fetchedData: payload,
                isLoaded: true,
            };
        default: 
            return state;
    }
}

export const fetchProducts = async (dispatch) => {
    const { data } = await commerce.products.list();
    dispatch({type: 'LOAD_PRODUCTS', payload: data});
}

