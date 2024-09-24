import { createSlice } from "@reduxjs/toolkit";

const postModalSlice = createSlice({
    name: 'postModal',
    initialState: {
        isModal: false,
        type: null,
        post: null,
        idPost: null,
        user: null
    },
    reducers: {
        openModal: (state, action) => {
            state.isModal = true
            state.post = action.payload.post
            state.type = action.payload.type
            state.idPost = action.payload?.idPost
        },
        closeModal: (state) => {
            state.isModal = false
            state.post = null
            state.type = null
            state.idPost = null
        },
        updatePost: (state, action) => {
            state.post = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { openModal, closeModal, updatePost, setUser } = postModalSlice.actions

export default postModalSlice.reducer