import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    labBookingList: [],
    newBooking: {},
    labBooking: {},
}
const labBookingSlice = createSlice({
    name: 'lab_booking',
    initialState: initialState,
    reducers: {
        addLabBooking: (state, { payload }) => {
            state.newBooking = payload
        },
        getLabBookings: (state, { payload }) => {
            state.labBookingList = payload
        },
        getLabBooking: (state, { payload }) => {
            state.labBooking = payload
        }
    }
})

export const { addLabBooking, getLabBookings, getLabBooking } = labBookingSlice.actions
export default labBookingSlice.reducer