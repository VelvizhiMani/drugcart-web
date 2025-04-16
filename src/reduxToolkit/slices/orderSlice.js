import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderList: [],
    newOrder: {},
    order: {},
    orderGetData: {},
    myOrders: [],
    invoice: null
}
const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        addOrder: (state, { payload }) => {
            state.newOrder = payload
        },
        getAllOrders: (state, { payload }) => {
            state.orderList = payload
        },
        getOrder: (state, { payload }) => {
            state.order = payload
        },
        getGetOrderData: (state, { payload }) => {
            state.orderGetData = payload
        },
        getMyOrderData: (state, { payload }) => {
            state.myOrders = payload
        },
        addInvoice: (state, { payload }) => {
            state.invoice = payload
        }
    }
})

export const { addOrder, getAllOrders, getOrder, getGetOrderData, getMyOrderData, addInvoice } = orderSlice.actions
export default orderSlice.reducer