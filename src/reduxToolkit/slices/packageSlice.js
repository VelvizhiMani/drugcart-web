import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    packageList: [],
    newPackage: {},
    pack: {},
}
const packageSlice = createSlice({
    name: 'package',
    initialState: initialState,
    reducers: {
        addPackage: (state, { payload }) => {
            state.newPackage = payload
        },
        getPackages: (state, { payload }) => {
            state.packageList = payload
        },
        getPackage: (state, { payload }) => { 
            state.pack = payload
        }
    }
})

export const { addPackage, getPackages, getPackage } = packageSlice.actions
export default packageSlice.reducer