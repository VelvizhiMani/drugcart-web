import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    specialList: [],
    newSpecial: {},
    special: {},
}
const specialitySlice = createSlice({
    name: 'speciality',
    initialState: initialState,
    reducers: {
        addSpeciality: (state, { payload }) => {
            state.newSpecial = payload
        },
        getSpecialitys: (state, { payload }) => {
            state.specialList = payload
        },
        getSpeciality: (state, { payload }) => {
            state.special = payload
        }
    }
})

export const { addSpeciality, getSpecialitys, getSpeciality } = specialitySlice.actions
export default specialitySlice.reducer