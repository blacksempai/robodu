const SET_DATING = 'SET_DATING'

export const setDatingActionCreator = (id, isDating) => {
    return {type: SET_DATING, id, isDating}
}

let initialState = {
    users: [
        {id: 0, name: 'Andriy', age: 24, gender: 'M', photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', isDating: false},
        {id: 1, name: 'Vlados', age: 17, gender: 'M', photoURL: 'https://www.thespruce.com/thmb/pdHawqci6b6AFMwdHvcEegsWYnI=/3471x3471/smart/filters:no_upscale()/cat-repellents-to-keep-cats-out-of-your-yard-2132573-hero-23591eb06a8f4c909238657db9fbfb4e.jpg', isDating: false },
        {id: 2, name: 'Sonya', age: 14, gender: 'W', photoURL: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', isDating: false }
    ]
}

const datingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATING: 
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, isDating: action.isDating} : u)
            } 

        default:
            return state;
    }
}

export default datingReducer;