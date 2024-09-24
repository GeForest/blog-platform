import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userStage',
    initialState: {
        token: false,
        isCheckedToken: false,
        user: {},
    },
    reducers: {
        setToken: (state, action) =>{
            state.token = action.payload
        },
        setUser: (state, action)=>{
            state.user = action.payload
        },
        setIsCheckedToken: (state, action) => {
            state.isCheckedToken = action.payload
        }
    }
})

export const { setToken, setUser, setIsCheckedToken } = userSlice.actions

export default userSlice.reducer