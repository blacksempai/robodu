import classes from './Posts.module.css';
import Post from './post/Post';
import React from 'react';

const Posts = (props) => {
    let posts = props.posts.map( post => <Post key={post.id} id={post.id} text={post.text} likes={post.likes} dispatch={props.dispatch} /> );
    
    let addPost = (e) => {
        e.preventDefault();
        let action = { type: "ADD_POST" }
        props.dispatch(action);
    }

    let textChanged = (e) => {
        let action = { type: "CHANGE_NEW_POST_TEXT", text: e.target.value }
        props.dispatch(action);
    }

    return (
        <div>
            <h1>Posts:</h1>
            <form onSubmit={addPost}>
                <textarea className={classes.text} value={props.newPostText} onChange={textChanged}/>
                <button>Send</button>
            </form>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default Posts;