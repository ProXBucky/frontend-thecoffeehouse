import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin, fetchAllAdminNotApproved } from "../../api/appAPI";

// Chúng ta không thể gọi useSelector ở đây, nên cần truyền accessToken dưới dạng tham số khi gọi các thunk.

// Tạo một async thunk để lấy danh sách các loại sản phẩm (Category)
export const fetchAllcodeCategory = createAsyncThunk(
    `app/fetchAllcodeCategory`,
    async () => {
        const response = await fetchDataAllcodes("CATEGORY");
        return response.data;
    }
);

// Tạo một async thunk để lấy danh sách các thành phố (City)
export const fetchAllcodeCity = createAsyncThunk(
    `app/fetchAllcodeCity`,
    async () => {
        const response = await fetchDataAllcodes("CITY");
        return response.data;
    }
);

// Tạo một async thunk để lấy tất cả các admin (yêu cầu accessToken)
export const fetchAllAdmins = createAsyncThunk(
    `app/fetchAllAdmins`,
    async (accessToken) => {
        // Truyền accessToken vào để thực hiện request
        const response = await fetchAllAdmin(accessToken);
        return response.data;
    }
);

// Tạo một async thunk để lấy danh sách admin chưa được phê duyệt (yêu cầu accessToken)
export const fetchAllAdminsNotApproved = createAsyncThunk(
    `app/fetchAllAdminsNotApproved`,
    async (accessToken) => {
        const response = await fetchAllAdminNotApproved(accessToken);
        return response.data;
    }
);

// Tạo một async thunk để lấy tất cả sản phẩm
export const fetchAllProduct = createAsyncThunk(
    `app/fetchAllProduct`,
    async () => {
        const response = await fetchAllProductByCategory('ALL');
        return response.data;
    }
);

// Khởi tạo một slice để quản lý state của ứng dụng
export const AppSlice = createSlice({
    name: 'app',
    initialState: {
        isHiddenNavbar: false, // Trạng thái ẩn hiện của Navbar
        role: [], // Danh sách vai trò (role)
        status: [], // Trạng thái khác nhau trong hệ thống
        city: [], // Danh sách thành phố
        category: [], // Danh sách loại sản phẩm (Category)
        statusFetch: '', // Trạng thái tải dữ liệu
        error: '', // Lỗi nếu có
        adminArr: [], // Danh sách admin
        adminNotApproved: [], // Danh sách admin chưa được phê duyệt
        allProductArr: [], // Danh sách tất cả sản phẩm
    },
    reducers: {
        // Reducer để chuyển đổi trạng thái ẩn/hiện của Navbar
        toggleNavbar: (state) => {
            state.isHiddenNavbar = !state.isHiddenNavbar;
        },
    },
    extraReducers(builder) {
        builder
            // Xử lý trạng thái khi fetchAllcodeCategory đang tải, thành công hoặc thất bại
            .addCase(fetchAllcodeCategory.pending, (state) => {
                state.statusFetch = 'loading';
            })
            .addCase(fetchAllcodeCategory.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded';
                state.category = action.payload;
            })
            .addCase(fetchAllcodeCategory.rejected, (state, action) => {
                state.statusFetch = 'failed';
                state.error = action.error.message;
            })

            /////////////////////////////

            // Xử lý khi fetchAllAdmins đang tải, thành công hoặc thất bại
            .addCase(fetchAllAdmins.pending, (state) => {
                state.statusFetch = 'loading';
            })
            .addCase(fetchAllAdmins.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded';
                state.adminArr = action.payload;
            })
            .addCase(fetchAllAdmins.rejected, (state, action) => {
                state.statusFetch = 'failed';
                state.error = action.error.message;
            })

            /////////////////////////////

            // Xử lý khi fetchAllAdminsNotApproved đang tải, thành công hoặc thất bại
            .addCase(fetchAllAdminsNotApproved.pending, (state) => {
                state.statusFetch = 'loading';
            })
            .addCase(fetchAllAdminsNotApproved.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded';
                state.adminNotApproved = action.payload;
            })
            .addCase(fetchAllAdminsNotApproved.rejected, (state, action) => {
                state.statusFetch = 'failed';
                state.error = action.error.message;
            })

            /////////////////////////////

            // Xử lý khi fetchAllProduct đang tải, thành công hoặc thất bại
            .addCase(fetchAllProduct.pending, (state) => {
                state.statusFetch = 'loading';
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded';
                state.allProductArr = action.payload;
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.statusFetch = 'failed';
                state.error = action.error.message;
            })

            /////////////////////////////

            // Xử lý khi fetchAllcodeCity đang tải, thành công hoặc thất bại
            .addCase(fetchAllcodeCity.pending, (state) => {
                state.statusFetch = 'loading';
            })
            .addCase(fetchAllcodeCity.fulfilled, (state, action) => {
                state.statusFetch = 'succeeded';
                state.city = action.payload;
            })
            .addCase(fetchAllcodeCity.rejected, (state, action) => {
                state.statusFetch = 'failed';
                state.error = action.error.message;
            });
    },
});

