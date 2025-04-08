import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorList: [],
    newDoctor: {},
    doctor: {},
    doctorUrl: []
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
        },
        getDoctorUrl: (state, { payload }) => {
            state.doctorUrl = payload
        }
    }
})

export const { addDoctor, getDoctorList, getDoctor, getDoctorUrl } = doctorSlice.actions
export default doctorSlice.reducer