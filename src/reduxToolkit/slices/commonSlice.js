import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    toatOpen: false,
    message: "",
    severity: "info",

}
const commonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        IsLoading: (state, { payload }) => {
            state.loading = payload
        },
        showToast: (state, { payload }) => {
            state.open = true;
            state.message = payload.message;
            state.severity = payload.severity;
        },
        hideToast: (state) => {
            state.open = false;
            state.message = "";
        },
    }
})

export const { IsLoading, showToast, hideToast } = commonSlice.actions
export default commonSlice.reducer