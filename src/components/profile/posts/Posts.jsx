import classes from './Posts.module.css';
import Post from './post/Post';
import React from 'react';

const Posts = (props) => {
    let posts = props.posts.map( post => <Post key={post.id} id={post.id} text={post.text} likes={post.likes} addLike={props.addLike} /> );


    let textRef = React.createRef();
    
    let addPost = (e) => {
        e.preventDefault();
        let text = textRef.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <h1>Posts:</h1>
            <form onSubmit={addPost}>
                <textarea ref={textRef} className={classes.text}></textarea>
                <button>Send</button>
            </form>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default Posts;