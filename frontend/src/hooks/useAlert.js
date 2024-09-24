import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../store/reducers/alertSlice';

export function useAlert() {
  const { isAlert, message } = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;
    if (isAlert) {
      timeoutId = setTimeout(() => dispatch(hideAlert()), 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAlert, dispatch]);

  return { message };
}