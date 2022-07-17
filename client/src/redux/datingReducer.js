import axios from 'axios';

const SET_DATING = 'SET_DATING'
const SET_STATE = 'SET_STATE';

export const setDatingActionCreator = (id, isDating) => {
    return {type: SET_DATING, id, isDating}
}

export const setStateActionCreator = (users) => {
    return { type: SET_STATE, users }
}

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/users')
            .then((data)=> {
                dispatch(setStateActionCreator(data.data));
            })
    }
}


let initialState = {
    users: []
}

const datingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATING: 
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, isDating: action.isDating} : u)
            } 
        case SET_STATE: 
            return {
                ...state,
                users: action.users
            }

        default:
            return state;
    }
}

export default datingReducer;