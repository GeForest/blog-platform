import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ApiRequests } from '../api/apiRequests';

import { initialValuesSignInSchema, initialValuesSignUoSchema, signUpSchema, signInSchema } from '../utils/form/useValidateSchema';
import { showAlert, hideAlert } from '../store/reducers/alertSlice';
import signIn from '../utils/user-utils/signIn';
import signUp from '../utils/user-utils/signUp';

export function useFormikHook(isSignUp) {
    
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: isSignUp ? initialValuesSignUoSchema : initialValuesSignInSchema,
        validationSchema: isSignUp ? signUpSchema : signInSchema,
        onSubmit: (values) => {
            isSignUp ? signUp(ApiRequests.user.signUp, values, dispatch, formik.resetForm) : signIn(ApiRequests.user.signIn, values, dispatch)
            formik.resetForm()
        },
        validateOnChange: false,
        validateOnBlur: false
    })
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = await formik.validateForm();
        if (Object.keys(errors).length > 0) {
            dispatch(showAlert({type: 'error', message: Object.values(errors)}));
            setTimeout(() => dispatch(hideAlert()), 3000);
        } else {
            formik.submitForm();
        }
    };

    return {
        formik,
        handleSubmit
    };
}
