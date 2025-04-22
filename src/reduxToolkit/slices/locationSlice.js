import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LocationList: [],
    newLocation: {},
    location: {},
}
const locationSlice = createSlice({
    name: 'location',
    initialState: initialState,
    reducers: {
        addLocation: (state, { payload }) => {
            state.newLocation = payload
        },
        getLocationList: (state, { payload }) => {
            state.LocationList = payload
        },
        getLocation: (state, { payload }) => {
            state.location = payload
        },
    }
})

export const { addLocation, getLocationList, getLocation } = locationSlice.actions
export default locationSlice.reducer