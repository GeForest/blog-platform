// useTokenValidation.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkTokenValidity } from '../utils/user-utils/checkTokenValidity';

export function useTokenValidation() {
  const { token, isCheckedToken } = useSelector(state => state.user)
  const { message } = useSelector(state => state.alert)

  const dispatch = useDispatch()
  const intervalInSeconds = 300
  const intervalInMilliseconds = intervalInSeconds * 1000

  useEffect(() => {
    if (isCheckedToken) {
      let intervalId = null
      if (token) {
        intervalId = setInterval(() => {
          checkTokenValidity(dispatch, message.isSession)
        }, intervalInMilliseconds)
      }
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [token, dispatch, isCheckedToken, message, intervalInMilliseconds]);

  useEffect(() => {
    if (isCheckedToken) {
      checkTokenValidity(dispatch, message.isSession);

      const handleStorageChange = (event) => {
        if (event.key === 'token') {
          checkTokenValidity(dispatch, message.isSession);
        }
      }

      window.addEventListener('storage', handleStorageChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
      }
    }
  }, [isCheckedToken, dispatch, message])
}