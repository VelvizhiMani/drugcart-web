import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/reduxToolkit/slices/userSlice"
import cartReducer from "@/reduxToolkit/slices/cartSlice"

export const store = configureStore({
    reducer: {
        userData: userReducer,
        cartData: cartReducer
    }
})