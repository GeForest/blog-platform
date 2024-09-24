import { ApiRequests } from "../../api/apiRequests"
import { deleteLikeCount } from "../../store/reducers/postsSlice"

export const deleteLike = async(dispatch, like) =>{
    
    await ApiRequests.posts.deleteLike(like)
    dispatch(deleteLikeCount(like))
}