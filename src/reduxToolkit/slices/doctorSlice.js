import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorList: [],
    newDoctor: {},
    doctor: {},
}
const doctorSlice = createSlice({
    name: 'doctor',
    initialState: initialState,
    reducers: {
        addDoctor: (state, { payload }) => {
            state.newContactUs = payload
        },
        getDoctorList: (state, { payload }) => {
            state.doctorList = payload
        },
        getDoctor: (state, { payload }) => {
            state.doctor = payload
        }
    }
})

export const { addDoctor, getDoctorList, getDoctor } = doctorSlice.actions
export default doctorSlice.reducer