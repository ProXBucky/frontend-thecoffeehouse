import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAdminByEmail } from "../../api/adminAPI"



export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userIsLogined: false,
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

