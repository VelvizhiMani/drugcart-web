import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    testPackageList: [],
    newTestPackage: {},
    testPackage: {},
    testPacageUrl: []
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
        },
        getTestPackageUrl: (state, { payload }) => {
            state.testPacageUrl = payload
        }
    }
})

export const { addTestPackage, getTestPackages, getTestPackage, getTestPackageUrl } = testPackageSlice.actions
export default testPackageSlice.reducer