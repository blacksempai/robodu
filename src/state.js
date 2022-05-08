let notifySubscriber = () => {
    console.log('no subscriber')
};

export const subscribe = (subscriber) => {
    notifySubscriber = subscriber;
}

const state = {
    posts: [
        {id:0, text:"Hello, my dear friend!", likes: 5},
        {id:1, text:"Hello, How are You?", likes: 10},
        {id:2, text:"Wow", likes: 0}
    ],
    newPostText: ""
}

export const dispatch = (action) => {   
    switch(action.type) {
        case 'ADD_POST': 
            let post = {
                id: state.posts.length,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(post);
            break;
        
        case 'ADD_LIKE': 
            state.posts[action.id].likes++;
            break

        case 'CHANGE_NEW_POST_TEXT': 
            state.newPostText = action.text;
            break;

        default: 
            break;
    }
    notifySubscriber();
}

export default state;