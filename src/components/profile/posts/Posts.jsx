import classes from './Posts.module.css';
import Post from './post/Post';
import React from 'react';


const Posts = (props) => {
    let posts = props.posts.map( post => <Post key={post.id} id={post.id} text={post.text} likes={post.likes} addLike={props.addLike} /> );
    
    let addPost = (e) => {
        e.preventDefault();
        props.addPost();
    }

    let textChanged = (e) => {
        props.textChanged(e.target.value);
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