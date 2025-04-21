import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    promotionList: [],
    newPromotion: {},
    promotion: {},
}

const promotionSlice = createSlice({
    name: 'promotion',
    initialState: initialState,
    reducers: {
        addPromotion: (state, { payload }) => {
            state.newPromotion = payload
        },
        getPromotionList: (state, { payload }) => {
            state.promotionList = payload
        },
        getPromotion: (state, { payload }) => {
            state.promotion = payload
        },
    }
})

export const { addPromotion, getPromotionList, getPromotion } = promotionSlice.actions
export default promotionSlice.reducer