import axios from 'axios'
import { useDispatch } from 'react-redux'
import { openModal } from '../store/reducers/authModalSlice'
import { setToken } from '../store/reducers/userSlice'

const MAIN_API_URL = process.env.REACT_APP_MAIN_URL

export const instance = axios.create({
    baseURL: MAIN_API_URL,
    headers: {
        accept: 'application/json'
    }
})

instance.interceptors.request.use(
    (config) => {
        if (localStorage.token) {
            config.headers.Authorization = `Bearer ${localStorage.token}`;
            config.headers["Content-Type"] = "application/json";
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
    (err) => {
        alert("Something is wrong")
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            const dispatch = useDispatch
            dispatch(setToken(false))
            dispatch(openModal())
        }
        return Promise.reject(error);
    }
);