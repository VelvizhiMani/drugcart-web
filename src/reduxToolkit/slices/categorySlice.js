import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    newCategory: {},
    category: {},
}
const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        addCategory: (state, { payload }) => {
            state.newCategory = payload
        },
        getCategories: (state, { payload }) => {
            state.categories = payload
        },
        getCategory: (state, { payload }) => { 
            state.category = payload
        }
    }
})

export const { addCategory, getCategories, getCategory } = categorySlice.actions
export default categorySlice.reducer