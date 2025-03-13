import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    testPackageList: [],
    newTestPackage: {},
    testPackage: {},
}
const testPackageSlice = createSlice({
    name: 'lab_test',
    initialState: initialState,
    reducers: {
        addTestPackage: (state, { payload }) => {
            state.newTestPackage = payload
        },
        getTestPackages: (state, { payload }) => {
            state.testPackageList = payload
        },
        getTestPackage: (state, { payload }) => {
            state.testPackage = payload
        }
    }
})

export const { addTestPackage, getTestPackages, getTestPackage } = testPackageSlice.actions
export default testPackageSlice.reducer