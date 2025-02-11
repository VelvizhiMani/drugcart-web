import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    subCategories: [],
    newSubCategory: {},
    subCategory: {},
}
const subCategorySlice = createSlice({
    name: 'subcategory',
    initialState: initialState,
    reducers: {
        addSubCategory: (state, { payload }) => {
            state.newSubCategory = payload
        },
        getSubCategories: (state, { payload }) => {
            state.subCategories = payload
        },
        getSubCategory: (state, { payload }) => { 
            state.subCategory = payload
        }
    }
})

export const { addSubCategory, getSubCategories, getSubCategory } = subCategorySlice.actions
export default subCategorySlice.reducer