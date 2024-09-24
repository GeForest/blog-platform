import { setIsCheckedToken, setToken, setUser } from '../../store/reducers/userSlice'
import { showAlert, hideAlert } from '../../store/reducers/alertSlice'
import { closeModal } from '../../store/reducers/postModalSlice'

export default async function signOut(dispatch, isSignOut) {
    try {
        await dispatch(setToken(false))

        dispatch(setUser({}))
        localStorage.removeItem('token')
        dispatch(setIsCheckedToken(false))
        
        dispatch(closeModal())
        dispatch(showAlert({type: isSignOut.type, message: isSignOut.message}))
    } finally {
        setTimeout(() => dispatch(hideAlert()), 3000);
    }
}