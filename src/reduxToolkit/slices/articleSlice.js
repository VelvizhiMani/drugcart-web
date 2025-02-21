import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    articleList: [],
    newArticle: {},
    article: {},
}
const articleSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        addArticle: (state, { payload }) => {
            state.newArticle = payload
        },
        getArticles: (state, { payload }) => {
            state.articleList = payload
        },
        getArticle: (state, { payload }) => { 
            state.article = payload
        }
    }
})

export const { addArticle, getArticles, getArticle } = articleSlice.actions
export default articleSlice.reducer