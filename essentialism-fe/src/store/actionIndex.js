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
        localStorage.setItem('projID',res.data.id);
        dispatch({type:ADD_PROJ_SUCCESS, payload:res.data})

    })
    .catch(err => dispatch({type:ADD_PROJ_FAILURE}))
};

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE';
  
export const getValues = () => dispatch => {
    axiosWithAuth()
    .get('/values/')
    .then(res => {
        console.log(res,'res from get values');
        localStorage.setItem('valueId', res.data.id)
        dispatch({type: GET_VALUES_SUCCESS, payload:res.data});
        })
        .catch(err => {
            dispatch({type:GET_VALUES_FAILURE});
        });
};

export const ADD_VALUE_START = 'ADD_VALUE_START';
export const ADD_VALUE_SUCCESS = 'ADD_VALUE_SUCCESS';
export const ADD_VALUE_FAILURE = 'ADD_VALUE_FAIL';
 
export const addNewValue = (newVal) => dispatch => {
    dispatch({type:ADD_VALUE_START});
axiosWithAuth()
.post('/values/',newVal)
.then(res => {
    console.log(res,'res from add new val');
    localStorage.setItem('customValue',res.data.id);
    dispatch({type:ADD_VALUE_SUCCESS, payload:res.data})

})
.catch(err => {
    dispatch({type:ADD_VALUE_FAILURE})
})
};

export const ADD_USER_VALUE_START= 'ADD_USER_VALUE_START';
export const ADD_USER_VALUE_SUCCESS = 'ADD_USER_VALUE_SUCCESS';
export const ADD_USER_VALUE_FAILURE = 'ADD_USER_VALUE_FAILURE';

export const addUserValue = (userVal, userID) => dispatch => {
    dispatch({type:ADD_USER_VALUE_START});
    axiosWithAuth()
    .post(`/values/user/${userID}`, userVal)
    .then (res => {
        console.log(res,'post user val res');
        localStorage.setItem('userValue', res.data.id)
        dispatch({type:ADD_USER_VALUE_SUCCESS})
    })
    .catch(err => {
        dispatch({type:ADD_USER_VALUE_FAILURE})
    })
}

export const GET_USER_VALUES_START = 'GET_USER_VALUES_START';
export const GET_USER_VALUES_SUCCESS = 'GET_USER_VALUES_SUCCESS';
export const GET_USER_VALUES_FAILURE = 'GET_USER_VALUES_FAILURE';

export const getUserValues = (userID) => dispatch => {
    dispatch({type:GET_USER_VALUES_START});
    axiosWithAuth()
    .get(`/users/${userID}/values`)
    .then(res => {
        console.log(res,'get user values res');
        dispatch({type:GET_USER_VALUES_SUCCESS, payload:res.data})
    })
    .catch(err => {
        dispatch({type:GET_USER_VALUES_FAILURE, payload:err})
    })
}

export const GET_TOP_VALUES_START = 'GET_TOP_VALUES_START';
export const GET_TOP_VALUES_SUCCESS = 'GET_TOP_VALUES_SUCCESS';
export const GET_TOP_VALUES_FAILURE = 'GET_TOP_VALUES_FAILURE';

export const getTopValues = (userID) => dispatch => {
    dispatch({type:GET_TOP_VALUES_START});
    axiosWithAuth()
    .get(`/users/${userID}/top-values`)
    .then(res => {
        console.log(res,'get top values res');
        dispatch({type:GET_TOP_VALUES_SUCCESS, payload:res.data})
    })
    .catch(err => {
        dispatch({type:GET_TOP_VALUES_FAILURE, payload:err})
    })
}

export const GET_PROJ_START = 'GET_PROJ_START';
export const GET_PROJ_SUCCESS = 'GET_PROJ_SUCCESS';
export const GET_PROJ_FAILURE = 'GET_PROJ_FAILURE';

export const getProj = (userID) => dispatch => {
    dispatch({type:GET_PROJ_START});
    axiosWithAuth()
    .get(`/users/${userID}/projects`)
    .then(res => {
        console.log(res,'get projects res');
        dispatch({type:GET_PROJ_SUCCESS, payload:res.data})
    })
    .catch(err => {
        dispatch({type:GET_PROJ_FAILURE, payload:err})
    })
}