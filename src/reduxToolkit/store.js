import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/reduxToolkit/slices/userSlice"
import cartReducer from "@/reduxToolkit/slices/cartSlice"
import profileReducer from "@/reduxToolkit/slices/profileSlice"
import adminUserReducer from "@/reduxToolkit/slices/admin/adminUserSlice"
import commonReducer from "@/reduxToolkit/slices/commonSlice"

export const store = configureStore({
    reducer: {
        common: commonReducer,
        userData: userReducer,
        profileData: profileReducer,
        cartData: cartReducer,
        adminUserData: adminUserReducer
    }
})