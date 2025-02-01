import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/reduxToolkit/slices/userSlice"
import cartReducer from "@/reduxToolkit/slices/cartSlice"
import adminUserReducer from "@/reduxToolkit/slices/admin/adminUserSlice"

export const store = configureStore({
    reducer: {
        userData: userReducer,
        cartData: cartReducer,
        adminUserData: adminUserReducer
    }
})