import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adminUser: [],
    newUser: {},
    userId: {}
}
const adminUserSlice = createSlice({
    name: 'adminUser',
    initialState: initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.newUser = payload
        },
        getUsers: (state, { payload }) => {
            state.adminUser = payload
        },
        getUserId: (state, { payload }) => {
            state.userId = payload
        }
    }
})

export const { userRegister, createUser, getUsers, getUserId } = adminUserSlice.actions
export default adminUserSlice.reducer