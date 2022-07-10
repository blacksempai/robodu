import axios from 'axios';

const SET_CREDENTIONAL = 'SET_CREDENTIONAL';

let intialState = {
    id: '',
    token: '',
    isAuthenticated: false
}

export const authReducer = (state = intialState, action) => {
    switch(action.type) {
        case SET_CREDENTIONAL: 
            return {
                ...state,
                ...action.data,
                isAuthenticated: true
            }
        default: 
            return state;
    }
}

const setCredentionals = data => ({type: SET_CREDENTIONAL, data});

export const register = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/auth/register', {...data})
            .then();
    }
}

export const login = (login, password) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/auth/login', {login, password})
            .then((data) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
                dispatch(setCredentionals(data.data));
            });
    }
}