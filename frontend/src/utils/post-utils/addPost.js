import { ApiRequests } from "../../api/apiRequests"
import { showAlert } from "../../store/reducers/alertSlice"
import { closeModal } from "../../store/reducers/postModalSlice"
import { setPost } from "../../store/reducers/postsSlice"


export const addPost = async (data, dispatch) => {
    const response = await ApiRequests.posts.addPost(data)
    
    dispatch(closeModal())
    dispatch(setPost(response.data.postData))
    dispatch(showAlert({type: 'success', message: [response.data.message]}))
}