import { createSlice } from "@reduxjs/toolkit";

const authModalSlice = createSlice({
    name: 'authModal',
    initialState: {
        isModal: true,
        refLog: false
    },
    reducers: {
        openModal: (state) => {
            state.isModal = true
        },
        closeModal: (state) => {
            state.isModal = false
            state.refLog = false
        },
        toggleRefLog: (state) => {
            state.refLog = !state.refLog
        },
    }
})

export const { openModal, closeModal, toggleRefLog } = authModalSlice.actions

export default authModalSlice.reducer