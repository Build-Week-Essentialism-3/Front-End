import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization:token
        },
        baseURL:'https://essentialism3.herokuapp.com/api/'
    });
}