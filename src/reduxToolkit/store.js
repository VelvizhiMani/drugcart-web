import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/reduxToolkit/slices/userSlice"
import cartReducer from "@/reduxToolkit/slices/cartSlice"
import profileReducer from "@/reduxToolkit/slices/profileSlice"
import adminUserReducer from "@/reduxToolkit/slices/admin/adminUserSlice"
import commonReducer from "@/reduxToolkit/slices/commonSlice"
import categoryReducer from "@/reduxToolkit/slices/categorySlice"
import subCategoryReducer from "@/reduxToolkit/slices/subCategorySlice"
import genericReducer from "@/reduxToolkit/slices/genericSlice"
import manufactuerReducer from "@/reduxToolkit/slices/manufactuerSlice"
import formReducer from "@/reduxToolkit/slices/formSlice"
import storageReducer from "@/reduxToolkit/slices/storageSlice"
import packageReducer from "@/reduxToolkit/slices/packageSlice"
import productReducer from "@/reduxToolkit/slices/productSlice"
import courierReducer from "@/reduxToolkit/slices/courierSlice"
import orginReducer from "@/reduxToolkit/slices/orginSlice"
import referenceReducer from "@/reduxToolkit/slices/referenceSlice"

export const store = configureStore({
    reducer: {
        common: commonReducer,
        userData: userReducer,
        profileData: profileReducer,
        cartData: cartReducer,
        categoryData: categoryReducer,
        subCategoryData: subCategoryReducer,
        genericData: genericReducer,
        manufactuerData: manufactuerReducer,
        formData: formReducer,
        storageData: storageReducer,
        packageData: packageReducer,
        productData: productReducer,
        courierData: courierReducer,
        orginData: orginReducer,
        referenceData: referenceReducer,
        adminUserData: adminUserReducer
    }
})