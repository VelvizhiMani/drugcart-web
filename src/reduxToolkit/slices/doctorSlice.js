import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorList: [],
    newDoctor: {},
    doctor: {},
    doctorUrl: [],
    callDoctorList: [],
    newCallDoctor: {},
    doctor_name_url: {},
    callDoctorId: {}
}
const doctorSlice = createSlice({
    name: 'doctor',
    initialState: initialState,
    reducers: {
        addDoctor: (state, { payload }) => {
            state.newDoctor = payload
        },
        getDoctorList: (state, { payload }) => {
            state.doctorList = payload
        },
        getDoctor: (state, { payload }) => {
            state.doctor = payload
        },
        getDoctorUrl: (state, { payload }) => {
            state.doctorUrl = payload
        },
        getDoctorNameUrl: (state, { payload }) => {
            state.doctor_name_url = payload
        },
        getCallDoctorList: (state, { payload }) => {
            state.callDoctorList = payload
        },
        addCallDoctor: (state, { payload }) => {
            state.newCallDoctor = payload
        },
        getCallDoctor: (state, { payload }) => {
            state.callDoctorId = payload
        },
    }
})

export const { addDoctor, getDoctorList, getDoctor, getDoctorUrl, getDoctorNameUrl, getCallDoctorList, addCallDoctor, getCallDoctor } = doctorSlice.actions
export default doctorSlice.reducer