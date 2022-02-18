import { commerce } from '../lib/commerce';

const initialState= [];

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'products/productsLoaded': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
//Thunk function
// export async function fetchProducts(dispatch) {
//     const { data } = await commerce.products.list();
//     dispatch({type: 'products/productsLoaded', payload: data});
// }
export const fetchProducts = async (dispatch) => {
    const { data } = await commerce.products.list();
    dispatch({type: 'products/productsLoaded', payload: data});
}