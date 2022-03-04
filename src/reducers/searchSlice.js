const initialState = {
    q = '',
    isSearchActive = false,
    isSearchPanelActive = false,
}

export default function searchReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'SEARCH' :
        default:
            return state;
    }
}