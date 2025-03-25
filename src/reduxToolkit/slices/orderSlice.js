import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderList: [],
    newOrder: {},
    order: {},
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
        }
    }
})

export const { addOrder, getAllOrders, getOrder } = orderSlice.actions
export default orderSlice.reducer