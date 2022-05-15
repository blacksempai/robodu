import classes from './Posts.module.css';
import Post from './post/Post';
import React from 'react';
import { addPostActionCreator, newPostTextActionCreator } from '../../../redux/postReducer';


const Posts = (props) => {
    let posts = props.posts.map( post => <Post key={post.id} id={post.id} text={post.text} likes={post.likes} dispatch={props.dispatch} /> );
    
    let addPost = (e) => {
        e.preventDefault();
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let textChanged = (e) => {
        let action = newPostTextActionCreator(e.target.value);
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