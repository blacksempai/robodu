const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id:0, text:"Hello, my dear friend!", likes: 5},
        {id:1, text:"Hello, How are You?", likes: 10},
        {id:2, text:"Wow", likes: 0}
    ],
    newPostText: ""
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let post = {
                id: state.posts.length,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(post);
            break;
        
        case ADD_LIKE: 
            state.posts[action.id].likes++;
            break;

        case CHANGE_NEW_POST_TEXT: 
            state.newPostText = action.text;
            break;

        default: 
            break;
    }
    return state;
}

export default postReducer;


export const addPostActionCreator = () => {
    return { type: ADD_POST}
}

export const addLikeActionCreator = (id) => {
    return { type: ADD_LIKE, id: id}
}

export const newPostTextActionCreator = (text) => {
    return { type: CHANGE_NEW_POST_TEXT, text: text}
}