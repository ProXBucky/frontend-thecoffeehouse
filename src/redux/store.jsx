import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "./Slice/UserSlice"
import { AppSlice } from "./Slice/AppSlice"
import { CartSlice } from "./Slice/CartSlice"
import { CookieSlice } from "./Slice/CookieSlice"


const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        app: AppSlice.reducer,
        cart: CartSlice.reducer,
        cookie: CookieSlice.reducer,
    }
})

export default store

