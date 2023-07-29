import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataAllcodes } from "../../api/appAPI"

export const fetchAllcodeCategory = createAsyncThunk(
    `app/fetchAllcodeCategory`,
    async () => {
        const response = await fetchDataAllcodes("CATEGORY")
        return response.data
    }
);

export const fetchAllcodeSize = createAsyncThunk(
    `app/fetchAllcodeSize`,
    async () => {
        const response = await fetchDataAllcodes("SIZE")
        return response.data
    }
);

export const AppSlice = createSlice({
    name: 'app',
    initialState: {
        role: [],
        status: [],
        size: [],
        city: [],
        category: [],
        isLoading: false,
        isError: false
    },
    reducers: {


    },
    extraReducers: {
        [fetchAllcodeCategory.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllcodeCategory.fulfilled]: (state, action) => {
            state.category = action.payload
            state.isLoading = false
        },
        [fetchAllcodeCategory.rejected]: (state) => {
            state.isError = true
        },

        [fetchAllcodeSize.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllcodeSize.fulfilled]: (state, action) => {
            state.size = action.payload
            state.isLoading = false
        },
        [fetchAllcodeSize.rejected]: (state) => {
            state.isError = true
        },
    }
})
