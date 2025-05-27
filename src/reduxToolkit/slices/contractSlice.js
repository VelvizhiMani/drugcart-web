import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contractUserList: [],
}

const contractSlice = createSlice({
    name: 'contract',
    initialState: initialState,
    reducers: {
        getContractUser: (state, { payload }) => {
            state.contractUserList = payload
        },
    }
})

export const { getContractUser } = contractSlice.actions
export default contractSlice.reducer