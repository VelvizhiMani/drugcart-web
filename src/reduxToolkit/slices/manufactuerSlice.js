import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    manufactuerList: [],
    newManufactuer: {},
    manufactuer: {},
    firstLetter: [],
}
const manufactuerSlice = createSlice({
    name: 'manufactuer',
    initialState: initialState,
    reducers: {
        addManufactuer: (state, { payload }) => {
            state.newManufactuer = payload
        },
        getManufactuers: (state, { payload }) => {
            state.manufactuerList = payload
        },
        getManufactuer: (state, { payload }) => {
            state.manufactuer = payload
        },
        getManufactuerLetter: (state, { payload }) => {
            state.firstLetter = payload
        },
    }
})

export const { addManufactuer, getManufactuers, getManufactuer, getManufactuerLetter } = manufactuerSlice.actions
export default manufactuerSlice.reducer