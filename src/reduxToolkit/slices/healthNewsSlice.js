import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    healthNewsList: [],
    newHealthNews: {},
    healthNews: {},
}
const healthNewsSlice = createSlice({
    name: 'tips',
    initialState: initialState,
    reducers: {
        addhealthNews: (state, { payload }) => {
            state.newHealthNews = payload
        },
        gethealthNewes: (state, { payload }) => {
            state.healthNewsList = payload
        },
        gethealthNews: (state, { payload }) => {
            state.healthNews = payload
        }
    }
})

export const { addhealthNews, gethealthNewes, gethealthNews } = healthNewsSlice.actions
export default healthNewsSlice.reducer