import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainSliderList: [],
    newMainSlider: {},
    mainSlider: {},
}
const mainSliderSlice = createSlice({
    name: 'main_slider',
    initialState: initialState,
    reducers: {
        addMainSlider: (state, { payload }) => {
            state.newMainSlider = payload
        },
        getMainSliderList: (state, { payload }) => {
            state.mainSliderList = payload
        },
        getMainSlider: (state, { payload }) => {
            state.mainSlider = payload
        },
    }
})

export const { addMainSlider, getMainSliderList, getMainSlider } = mainSliderSlice.actions
export default mainSliderSlice.reducer