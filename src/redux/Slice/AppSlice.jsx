import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin } from "../../api/appAPI"

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

export const fetchAllAdmins = createAsyncThunk(
    `app/fetchAllAdmins`,
    async () => {
        const response = await fetchAllAdmin()
        return response.data
    }
);

export const fetchAllProduct = createAsyncThunk(
    `app/fetchAllProduct`,
    async () => {
        const response = await fetchAllProductByCategory('ALL')
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
        statusFetch: '',
        error: '',
        adminArr: [],
        allProductArr: [],
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllcodeCategory.pending, (state) => {
                state.statusFetch = 'loading'
            })
            .addCase(fetchAllcodeCategory.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded'
                state.category = action.payload
            })
            .addCase(fetchAllcodeCategory.rejected, (state, action) => {
                state.statusFetch = 'failed'
                state.error = action.error.message
            })

            /////////////////////////////

            .addCase(fetchAllcodeSize.pending, (state) => {
                state.statusFetch = 'loading'
            })
            .addCase(fetchAllcodeSize.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded'
                state.size = action.payload
            })
            .addCase(fetchAllcodeSize.rejected, (state, action) => {
                state.statusFetch = 'failed'
                state.error = action.error.message
            })

            /////////////////////////////

            .addCase(fetchAllAdmins.pending, (state) => {
                state.statusFetch = 'loading'
            })
            .addCase(fetchAllAdmins.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded'
                state.adminArr = action.payload
            })
            .addCase(fetchAllAdmins.rejected, (state, action) => {
                state.statusFetch = 'failed'
                state.error = action.error.message
            })

            /////////////////////////////

            .addCase(fetchAllProduct.pending, (state) => {
                state.statusFetch = 'loading'
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded'
                state.allProductArr = action.payload
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.statusFetch = 'failed'
                state.error = action.error.message
            })
    }
})