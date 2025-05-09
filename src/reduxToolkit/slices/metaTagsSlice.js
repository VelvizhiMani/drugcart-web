import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    metaTagsList: [],
    newMetatags: {},
    metatags: {},
}
const metaTagsSlice = createSlice({
    name: 'metatags',
    initialState: initialState,
    reducers: {
        addMetaTags: (state, { payload }) => {
            state.newMetatags = payload
        },
        getMetaTagsList: (state, { payload }) => {
            state.metaTagsList = payload
        },
        getMetaTags: (state, { payload }) => {
            state.metatags = payload
        }
    }
})

export const { addMetaTags, getMetaTagsList, getMetaTags } = metaTagsSlice.actions
export default metaTagsSlice.reducer