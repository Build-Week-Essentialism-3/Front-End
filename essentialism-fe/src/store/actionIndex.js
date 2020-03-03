import {axiosWithAuth} from './axiosWithAuth';
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginFunc = (creds, historyParam) => dispatch => {
    dispatch({type:LOGIN_START});
    axios.post('https://essentialism3.herokuapp.com/api/auth/login',creds)
    .then(res => {
        console.log(res,'login res');
        localStorage.setItem('token', res.data.token);
        dispatch({type:LOGIN_SUCCESS, payload:res.data});
        historyParam.push('/userHome');
    })
    .catch(err => dispatch({type:LOGIN_FAILED}))
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const registerFunc = (creds, historyParam) => dispatch => {
    dispatch({type:REGISTER_START});
    axios.post('https://essentialism3.herokuapp.com/api/auth/register',creds)
    .then(res => {
        console.log(res,'register res');
        localStorage.setItem('token', res.data.token);
        dispatch({type:REGISTER_SUCCESS, payload:res.data});
        historyParam.push('/userHome');
    })
    .catch(err => dispatch({type:REGISTER_FAILED}))
};

