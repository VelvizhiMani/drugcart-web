import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    diseasesList: [],
    newDiseases: {},
    diseases: {},
}
const diseasesSlice = createSlice({
    name: 'diseases',
    initialState: initialState,
    reducers: {
        addDiseases: (state, { payload }) => {
            state.newDiseases = payload
        },
        getDiseasesList: (state, { payload }) => {
            state.diseasesList = payload
        },
        getDiseases: (state, { payload }) => { 
            state.diseases = payload
        }
    }
})

export const { addDiseases, getDiseasesList, getDiseases } = diseasesSlice.actions
export default diseasesSlice.reducer