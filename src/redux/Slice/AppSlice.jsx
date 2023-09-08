import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin, fetchAllAdminNotApproved } from "../../api/appAPI"

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

export const fetchAllcodeCity = createAsyncThunk(
    `app/fetchAllcodeCity`,
    async () => {
        const response = await fetchDataAllcodes("CITY")
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

export const fetchAllAdminsNotApproved = createAsyncThunk(
    `app/fetchAllAdminsNotApproved`,
    async () => {
        const response = await fetchAllAdminNotApproved()
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
        isHiddenNavbar: false,
        role: [],
        status: [],
        size: [],
        city: [],
        category: [],
        statusFetch: '',
        error: '',
        adminArr: [],
        adminNotApproved: [],
        allProductArr: [],
    },
    reducers: {
        toggleNavbar: (state) => {
            state.isHiddenNavbar = !state.isHiddenNavbar
        },

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

            .addCase(fetchAllAdminsNotApproved.pending, (state) => {
                state.statusFetch = 'loading'
            })
            .addCase(fetchAllAdminsNotApproved.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded'
                state.adminNotApproved = action.payload
            })
            .addCase(fetchAllAdminsNotApproved.rejected, (state, action) => {
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

            /////////////////////////////

            .addCase(fetchAllcodeCity.pending, (state) => {
                state.statusFetch = 'loading'
            })
            .addCase(fetchAllcodeCity.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded'
                state.city = action.payload
            })
            .addCase(fetchAllcodeCity.rejected, (state, action) => {
                state.statusFetch = 'failed'
                state.error = action.error.message
            })
    }
})
