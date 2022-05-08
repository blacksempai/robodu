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
    ]
}

export const addPost = (postText) => {
    let post = {
        id: state.posts.length,
        text: postText
    }
    state.posts.push(post);
    notifySubscriber();
}

export const addLike = (id) => {
    state.posts[id].likes++;
    notifySubscriber();
}

export default state;