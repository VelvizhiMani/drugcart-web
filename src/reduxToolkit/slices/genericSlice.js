import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    genericList: [],
    newGeneric: {},
    generic: {},
    genericUrl: [],
    firstLetter: [],
}
const genericSlice = createSlice({
    name: 'generic',
    initialState: initialState,
    reducers: {
        addGeneric: (state, { payload }) => {
            state.newGeneric = payload
        },
        getGenericList: (state, { payload }) => {
            state.genericList = payload
        },
        getGeneric: (state, { payload }) => {
            state.generic = payload
        },
        getGenericUrl: (state, { payload }) => {
            state.genericUrl = payload
        },
        getGenericLetter: (state, { payload }) => {
            state.firstLetter = payload
        },
    }
})

export const { addGeneric, getGenericList, getGeneric, getGenericUrl, getGenericLetter } = genericSlice.actions
export default genericSlice.reducer