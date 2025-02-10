import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    genericList: [],
    newGeneric: {},
    generic: {},
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
        }
    }
})

export const { addGeneric, getGenericList, getGeneric } = genericSlice.actions
export default genericSlice.reducer