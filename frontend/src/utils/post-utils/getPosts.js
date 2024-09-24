import { ApiRequests } from "../../api/apiRequests"
import { fetchPostsChecked, fetchPostsRequest, fetchPostsSuccess } from "../../store/reducers/postsSlice"


export const getPosts = async (dispatch, cursor) => {
    try {
        dispatch(fetchPostsRequest())
        
        const response = await ApiRequests.posts.getPosts(cursor)
        const { posts, newCursor, isPosts } = response.data
        
        if(!isPosts) return dispatch(fetchPostsChecked(isPosts))

        dispatch(fetchPostsSuccess({ posts, newCursor }))
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
}