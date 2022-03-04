const initialState = {
    q: '',
    isSearchActive: false,
    isSearchPanelActive: false,
}

export default function searchReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'HANDLE_INPUT':
            return {
                ...state,
                q: payload,
                isSearchActive: true,
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                q: '',
                isSearchActive: false,
            }       
        case 'SET_SEARCH_INACTIVE':  
            return {
                ...state,
                isSearchActive: false,
            }  
        default:
            return state;
    }
}

export const handleInput = (e) => (dispatch) => {
    
}