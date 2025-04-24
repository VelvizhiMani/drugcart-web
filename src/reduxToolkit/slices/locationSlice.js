import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LocationList: [],
    newLocation: {},
    location: {},
    postalCodes: []
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
        getPostalCodes: (state, { payload }) => {
            state.postalCodes = payload
        },
    }
})

export const { addLocation, getLocationList, getLocation, getPostalCodes } = locationSlice.actions
export default locationSlice.reducer