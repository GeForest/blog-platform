import { ApiRequests } from "../../api/apiRequests"
import { setUser } from "../../store/reducers/postModalSlice"

export const getUserData = async (dispatch, idUser) => {
    const user = await ApiRequests.user.getDataUser(idUser)
    dispatch(setUser(user))
}