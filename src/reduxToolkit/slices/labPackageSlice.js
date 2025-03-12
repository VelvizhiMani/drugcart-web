import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    labPackageList: [],
    newLabPackage: {},
    labPackage: {},
}
const labPackageSlice = createSlice({
    name: 'orgin',
    initialState: initialState,
    reducers: {
        addLabPackage: (state, { payload }) => {
            state.newLabPackage = payload
        },
        getLabPackages: (state, { payload }) => {
            state.labPackageList = payload
        },
        getLabPackage: (state, { payload }) => {
            state.labPackage = payload
        }
    }
})

export const { addLabPackage, getLabPackages, getLabPackage } = labPackageSlice.actions
export default labPackageSlice.reducer