import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    newProduct: {},
    product: {},
    productGenericUrl: [],
    productCategory: [],
    productName: [],
    categoryProducts: []
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
    }
})

export const { addProduct, getProducts, getProduct, getGenericProductUrl, getProductCategory, getProductName, GetProductCats } = productSlice.actions
export default productSlice.reducer