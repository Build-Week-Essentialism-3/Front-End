import {axiosWithAuth} from './axiosWithAuth';
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginFunc = (creds) => dispatch => {
    dispatch({type:LOGIN_START});
    axios.post('https://essentialism3.herokuapp.com/api/auth/login',creds)
    .then(res => {
        console.log(res,'login res');
        // localStorage.setItem('token')
    })
}

