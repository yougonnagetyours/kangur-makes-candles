import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        q: '',
        isSearchActive: false,
        isSearchPanelActive: false,
    },
    reducers: {
        setQ: (state, action) => {
            state.q = action.payload;
        },
        setIsSearchActive: (state, action) => {
            state.isSearchActive = action.payload;
        },
        setIsSearchPanelActive: (state, action) => {
            state.isSearchPanelActive = action.payload;
        },
    }
})