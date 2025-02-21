import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogList: [],
    newBlog: {},
    blog: {},
}
const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        addBlog: (state, { payload }) => {
            state.newBlog = payload
        },
        getBlogs: (state, { payload }) => {
            state.blogList = payload
        },
        getBlog: (state, { payload }) => { 
            state.blog = payload
        }
    }
})

export const { addBlog, getBlogs, getBlog } = blogSlice.actions
export default blogSlice.reducer