import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    storageList: [],
    newStorage: {},
    storage: {},
}
const storageSlice = createSlice({
    name: 'storage',
    initialState: initialState,
    reducers: {
        addStorage: (state, { payload }) => {
            state.newStorage = payload
        },
        getStorages: (state, { payload }) => {
            state.storageList = payload
        },
        getStorage: (state, { payload }) => { 
            state.storage = payload
        }
    }
})

export const { addStorage, getStorages, getStorage } = storageSlice.actions
export default storageSlice.reducer