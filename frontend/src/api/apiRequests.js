import { instance } from "./instance"
import userRequests from "./requests/userRequests"
import postRequests from "./requests/postRequests"

export const ApiRequests = {
    user: userRequests(instance),
    posts: postRequests(instance)
}