import { createSlice } from "@reduxjs/toolkit";

export const CookieSlice = createSlice({
    name: 'cookie',
    initialState: {
        tokenRedux: ''
    }
    ,
    reducers: {
        setToken(state, action) {
            state.tokenRedux = action.payload
        },
        clearToken(state, action) {
            state.tokenRedux = null
        }
    },
});

export const { setToken, clearToken } = CookieSlice.actions;

