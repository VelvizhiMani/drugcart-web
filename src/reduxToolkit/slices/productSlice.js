import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    newProduct: {},
    product: {},
    productGenericUrl: [],
    productCategory: [],
    productName: [],
    categoryProducts: [],
    personalCareProduct: [],
    fitnessProduct: [],
    treatmentProduct: [],
}
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.newProduct = payload
        },
        getProducts: (state, { payload }) => {
            state.productList = payload
        },
        getProduct: (state, { payload }) => {
            state.product = payload
        },
        getGenericProductUrl: (state, { payload }) => {
            state.productGenericUrl = payload
        },
        getProductCategory: (state, { payload }) => {
            state.productCategory = payload
        },
        getProductName: (state, { payload }) => {
            state.productName = payload
        },
        GetProductCats: (state, { payload }) => {
            state.categoryProducts = payload;
        },
        GetPersonalCareProduct: (state, { payload }) => {
            state.personalCareProduct = payload;
        },
        GetFitnessProduct: (state, { payload }) => {
            state.fitnessProduct = payload;
        },
        GetTreatmentProduct: (state, { payload }) => {
            state.treatmentProduct = payload;
        },
    }
})

export const { addProduct, getProducts, getProduct, getGenericProductUrl, getProductCategory, getProductName, GetProductCats, GetPersonalCareProduct, GetFitnessProduct, GetTreatmentProduct } = productSlice.actions
export default productSlice.reducer