import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../store/reducers/authModalSlice"


export const useAuthAction = (action) => {
    const { token } = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const handleAction = () => token ? action() : dispatch(openModal())
    return handleAction
}