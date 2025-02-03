import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
}
const commonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        IsLoading: (state, {payload}) => {
            state.loading = payload
        },
    }
})

export const { IsLoading } = commonSlice.actions
export default commonSlice.reducer