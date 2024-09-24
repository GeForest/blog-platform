import { showAlert } from '../../store/reducers/alertSlice';
import { toggleRefLog } from '../../store/reducers/authModalSlice';
import { msgAlert } from '../alert/msgAlert';

export default async function signUp(signUnFunction, values, dispatch, resetForm) {
    const response = await signUnFunction(values)
    try {
        dispatch(showAlert({type: 'success', message: [response.data.message]}))
        resetForm()
        dispatch(toggleRefLog())
    } catch (error) {
        const type = 'error'
        msgAlert(dispatch, showAlert, type, error)
    }
}