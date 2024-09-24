import { ApiRequests } from "../../api/apiRequests"
import { addLikeCount } from "../../store/reducers/postsSlice"


export const addLike = async(dispatch, like) => {
    
    await ApiRequests.posts.addLike(like)
    dispatch(addLikeCount(like))
}