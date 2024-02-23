import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        // userIsLogined: sessionStorage.getItem("userEmail")
        //     ? true : false,
        // userInfo: sessionStorage.getItem("userEmail")
        //     ? (sessionStorage.getItem("userEmail")) : {},
        // isError: false

        userIsLogined: "",
        userInfo: "",
        isError: ""

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
    extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state) => {
            if (state.userInfo) {
                state.userIsLogined = true;
            }
        });
    }
})

