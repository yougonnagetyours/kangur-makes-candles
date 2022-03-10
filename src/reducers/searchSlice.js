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
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                q: '',
                isSearchActive: false,
            }     
        case 'SET_SEARCH_ACTIVE':  
            return {
                ...state,
                isSearchActive: true,
            }        
        case 'SET_SEARCH_INACTIVE':  
            return {
                ...state,
                isSearchActive: false,
            }  
        case 'TOGGLE_SEARCH_PANEL_ACTIVE':  
            return {
                ...state,
                isSearchPanelActive: payload,
            }  
        default:
            return state;
    }
}
