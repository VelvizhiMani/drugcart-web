import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    newProduct: {},
    product: {},
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
        }
    }
})

export const { addProduct, getProducts, getProduct } = productSlice.actions
export default productSlice.reducer