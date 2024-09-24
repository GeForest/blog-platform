import { combineReducers } from "@reduxjs/toolkit";
import authModalReducer  from "./authModalSlice";
import postModalReducer  from "./postModalSlice";
import postsReducer from "./postsSlice";
import alertReducer from "./alertSlice"
import userReducer from "./userSlice"


export default combineReducers({
    authModal: authModalReducer,
    postModal: postModalReducer,
    posts: postsReducer,
    alert: alertReducer,
    user: userReducer,
})