import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notifyList: [],
    newNotify: {},
    notify: {},
}
const notifySlice = createSlice({
    name: 'notify',
    initialState: initialState,
    reducers: {
        addNotify: (state, { payload }) => {
            state.newNotify = payload
        },
        getNotifyList: (state, { payload }) => {
            state.notifyList = payload
        },
        getNotify: (state, { payload }) => {
            state.notify = payload
        },
    }
})

export const { addNotify, getNotifyList, getNotify } = notifySlice.actions
export default notifySlice.reducer