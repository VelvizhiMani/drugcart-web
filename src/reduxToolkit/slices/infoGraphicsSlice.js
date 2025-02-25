import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    infoGraphicsList: [],
    newInfoGraphics: {},
    infoGraphics: {},
}
const infoGraphicsSlice = createSlice({
    name: 'infoGraphics',
    initialState: initialState,
    reducers: {
        addInfoGraphics: (state, { payload }) => {
            state.newInfoGraphics = payload
        },
        getInfoGraphicsList: (state, { payload }) => {
            state.infoGraphicsList = payload
        },
        getInfoGraphics: (state, { payload }) => {
            state.infoGraphics = payload
        }
    }
})

export const { addInfoGraphics, getInfoGraphicsList, getInfoGraphics } = infoGraphicsSlice.actions
export default infoGraphicsSlice.reducer