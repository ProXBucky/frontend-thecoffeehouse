import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userIsLogined: false,
        // userIsLogined: true, // tam thoi
        userInfo: {},
        isError: false
    },
    reducers: {
        loginUserSucces: (state, action) => {
            state.userIsLogined = true
            state.userInfo = action.payload
        },
        logOutUser: (state) => {
            state.userIsLogined = false
            state.userInfo = {}
        }
    },
    extraReducers: {

    }
})

