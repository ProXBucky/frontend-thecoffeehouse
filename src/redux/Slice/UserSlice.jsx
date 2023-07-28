import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userIsLogined: false,
        userInfo: {}
    },
    reducers: {
        loginUserSucces: (state, action) => {
            state.userIsLogined = true
            state.userInfo = action.payload
        },
        logOutUser: (state, action) => {
            state.userIsLogined = false
            state.userInfo = {}
        }
    }
})
