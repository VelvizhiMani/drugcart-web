import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    scanList: [],
    newScan: {},
    scan: {},
}
const scanSlice = createSlice({
    name: 'scan',
    initialState: initialState,
    reducers: {
        addScan: (state, { payload }) => {
            state.newScan = payload
        },
        getScans: (state, { payload }) => {
            state.scanList = payload
        },
        getScan: (state, { payload }) => { 
            state.scan = payload
        }
    }
})

export const { addScan, getScans, getScan } = scanSlice.actions
export default scanSlice.reducer