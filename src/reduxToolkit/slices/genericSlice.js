import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    genericList: [],
    newGeneric: {},
    generic: {},
    genericUrl: []
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
        }
    }
})

export const { addGeneric, getGenericList, getGeneric, getGenericUrl } = genericSlice.actions
export default genericSlice.reducer