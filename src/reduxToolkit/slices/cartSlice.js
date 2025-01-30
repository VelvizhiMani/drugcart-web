import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
}
const cartSlice = createSlice({
    name: 'carts',
    initialState: initialState,
    reducers: {
        getCart: (state, {payload}) => {
            state.carts = payload
        },
    }
})

export const { getCart } = cartSlice.actions
export default cartSlice.reducer