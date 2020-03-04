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
        localStorage.setItem('userID', res.data.user.id);
        
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
        localStorage.setItem('userID', res.data.saved.id);
        dispatch({type:REGISTER_SUCCESS, payload:res.data});
        historyParam.push('/userHome');
    })
    .catch(err => dispatch({type:REGISTER_FAILED}))
};

export const ADD_PROJ_START = 'ADD_PROJ_START';
export const ADD_PROJ_SUCCESS = 'ADD_PROJ_SUCCESS';
export const ADD_PROJ_FAILURE ='ADD_PROJ_FAILURE';

export const addProj = (proj) => dispatch => {
    dispatch({type:ADD_PROJ_START});
    axiosWithAuth()
    .post('/projects/',proj)
    .then(res => {
        console.log(res,'add proj response');

    })
};

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE';
  
export const getValues = () => {
    axiosWithAuth()
    .get('/values/')
    .then(res => {
        console.log(res,'res from get values');

    })
}
