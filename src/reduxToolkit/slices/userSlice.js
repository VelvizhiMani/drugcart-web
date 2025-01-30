import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: [],
    newUser: {},
}
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userRegister: (state, {payload}) => {
            state.user = payload
        },
        createUser: (state, {payload}) => {
            state.newUser = payload
        }
    }
})

export const { userRegister, createUser } = userSlice.actions
export default userSlice.reducer