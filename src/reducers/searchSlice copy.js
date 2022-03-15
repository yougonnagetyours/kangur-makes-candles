import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        q: '',
        isSearchActive: false,
        isSearchPanelActive: false,
    },
    reducers: {
        handleInput: (state, action) => {
            state.q = action.payload;
        },
    }
})