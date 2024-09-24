import { ApiRequests } from "../../api/apiRequests"
import { setPostComment } from "../../store/reducers/postsSlice"


export const addComment = async(dispatch, comment) => {
    const updatePost = await ApiRequests.posts.addComment(comment)

    dispatch(setPostComment(updatePost.data))
}