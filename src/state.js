const state = {
    posts: [
        {id:0, text:"Hello, my dear friend!"},
        {id:1, text:"Hello, How are You?"},
        {id:2, text:"Wow"}
    ]
}

export const addPost = (postText) => {
    let post = {
        id: state.posts.length,
        text: postText
    }
    state.posts.push(post);
    console.log(state)
}

export default state;