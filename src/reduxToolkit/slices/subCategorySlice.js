import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    subCategories: [],
    newSubCategory: {},
    subCategory: {},
    subCategoryUrl: []
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
        },
        getSubCategoryUrl: (state, { payload }) => {
            state.subCategoryUrl = payload
        }
    }
})

export const { addSubCategory, getSubCategories, getSubCategory, getSubCategoryUrl } = subCategorySlice.actions
export default subCategorySlice.reducer