import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    newProduct: {},
    product: {},
    productGenericUrl: []
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
        }
    }
})

export const { addProduct, getProducts, getProduct, getGenericProductUrl } = productSlice.actions
export default productSlice.reducer