import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    healthTipList: [],
    newHealthTip: {},
    healthTip: {},
}
const healthTipSlice = createSlice({
    name: 'tips',
    initialState: initialState,
    reducers: {
        addhealthTip: (state, { payload }) => {
            state.newHealthTip = payload
        },
        gethealthTips: (state, { payload }) => {
            state.healthTipList = payload
        },
        gethealthTip: (state, { payload }) => {
            state.healthTip = payload
        }
    }
})

export const { addhealthTip, gethealthTips, gethealthTip } = healthTipSlice.actions
export default healthTipSlice.reducer