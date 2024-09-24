import { ApiRequests } from '../../api/apiRequests';
import { setIsCheckedToken, setToken, setUser } from '../../store/reducers/userSlice'
import { closeModal } from '../../store/reducers/authModalSlice';
import { showAlert } from '../../store/reducers/alertSlice';
import { msgAlert } from '../alert/msgAlert';

export default async function signIn(signInFunction, values, dispatch) {
    try {
        const response = await signInFunction(values)
        
        if (response.data.success) {
            await localStorage.setItem('token', response.data.token);
            const data = await ApiRequests.user.getDataUser()
            await dispatch(setUser(data.data))
            await dispatch(setToken(true))
            await dispatch(closeModal())
            dispatch(setIsCheckedToken(true))
            dispatch(showAlert({type: 'success', message: [response.data.message]}))
        }
    } catch (error) {
        const type = 'error'
        msgAlert(dispatch, showAlert, type, error)
    }
}