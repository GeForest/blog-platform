import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'postsState',
    initialState: {
        list: [],
        cursor: null,
        loading: false,
        isLocalLike: false,
        type: null,
        checkedPosts: true
    },
    reducers: {
        fetchPostsRequest: (state) => {
            state.loading = true
        },
        fetchPostsSuccess: (state, action) => {
            state.loading = false
            state.list = [...state.list, ...action.payload.posts]
            state.cursor = action.payload.newCursor
        },
        fetchPostsChecked: (state, action) => {
            state.checkedPosts = action.payload
            state.loading = false
        },
        setPost: (state, action) => {
            state.list = [action.payload, ...state.list]
        },
        addLikeCount: (state, action) => {
            const { idPost, idUser } = action.payload

            state.list = state.list.map(post => 
                post._id === idPost
                    ? { ...post, likes: [...post.likes, {idUser: idUser}] }
                    : post
            )
        },
        deleteLikeCount: (state, action) => {
            const { idPost, idUser } = action.payload

            state.list = state.list.map(post => 
                post._id === idPost
                    ? { ...post, likes: post.likes.filter(like=> like.idUser !== idUser) }
                    : post
            )
        },
        setIsLocalLike: (state, action) => {
            state.isLocalLike = action.payload
        },
        setPostText: (state, action) => {
            const updatePost = action.payload
            
            state.list = state.list.map(post => 
                post._id === updatePost._id
                    ? {...post, description: updatePost.description}
                    : post
            )
        },
        setPostComment: (state, action) => {
            const updatePost = action.payload
            console.log(updatePost);
            
            
            state.list = state.list.map(post => 
                post._id === updatePost._id
                    ? {...post, comments: [...updatePost.comments]}
                    : post
            )
        },

    }
})

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsChecked, setPost, addLikeCount, deleteLikeCount, setIsLocalLike, setPostText, setPostComment } = postsSlice.actions

export default postsSlice.reducer