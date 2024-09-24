import { ApiRequests } from "../../api/apiRequests"
import { closeModal } from "../../store/reducers/postModalSlice"
import { setPostText } from "../../store/reducers/postsSlice"

export const updatePost = async(dispatch, data) => {
    const updatePost = await ApiRequests.posts.updatePost(data)
    
    dispatch(setPostText(updatePost.data))
    dispatch(closeModal())
}