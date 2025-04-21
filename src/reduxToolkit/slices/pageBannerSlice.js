import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageBannerList: [],
    newPageBanner: {},
    pageBanner: {},
}
const pageBannerSlice = createSlice({
    name: 'page_banner',
    initialState: initialState,
    reducers: {
        addPageBanner: (state, { payload }) => {
            state.newPageBanner = payload
        },
        getPageBannerList: (state, { payload }) => {
            state.pageBannerList = payload
        },
        getPageBanner: (state, { payload }) => {
            state.pageBanner = payload
        },
    }
})

export const { addPageBanner, getPageBannerList, getPageBanner } = pageBannerSlice.actions
export default pageBannerSlice.reducer