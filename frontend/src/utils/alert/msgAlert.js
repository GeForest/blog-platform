export const msgAlert = (dispatch, showAlert, type, error) => {
    const data = error.response.data || {}
    const message = data.error || 'Произошла непредвиденная ошибка'
    dispatch(showAlert({type: type, message: [message]}))
}