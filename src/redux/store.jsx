import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "./Slice/UserSlice"
import { AppSlice } from "./Slice/AppSlice"


const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        app: AppSlice.reducer
    }
})

export default store