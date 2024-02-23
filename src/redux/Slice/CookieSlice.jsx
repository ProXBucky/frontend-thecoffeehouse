import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    tokenRedux: Cookies.get("accessToken") ? Cookies.get("accessToken") : null,
    userInfo: Cookies.get("userEmail") ? Cookies.get("userEmail") : null
};

export const CookieSlice = createSlice({
    name: 'cookie',
    initialState,
    reducers: {
        setToken(state, action) {
            state.tokenRedux = action.payload
        },
        clearToken(state) {
            state.tokenRedux = null
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.userInfo = null
        }
    },
});

export const { setToken, clearToken, setUserInfo, clearUserInfo } = CookieSlice.actions;

