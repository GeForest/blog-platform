import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        isAlert: false,
        type: null,
        message: {
            isSignOut: {
                type: 'success',
                message: ['Вы покинули аккаунт.']
            },
            isSession: {
                type: 'error',
                message: ['Сессия окончена войдите заново.']
            },
            isText: {
                type: 'error',
                message: ['Введите текст.']
            },
        },
        description: []
    },
    reducers: {
        showAlert: (state, action) => {
            state.isAlert = true
            state.type = action.payload.type
            state.description = action.payload.message
        },
        hideAlert: (state) => {
            state.isAlert = false
            state.type = null
            state.description = []
        },
    }
})

export const { showAlert, hideAlert } = alertSlice.actions

export default alertSlice.reducer