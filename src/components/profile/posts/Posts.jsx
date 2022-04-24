import classes from './Posts.module.css';
import Post from './post/Post';
import React from 'react';

const Posts = (props) => {
    let posts = props.posts.map( post => <Post key={post.id} text={post.text} /> );


    let textRef = React.createRef();
    
    let addPost = () => {
        let text = textRef.current.value;
        alert(text)
    }

    return (
        <div>
            <h1>Posts:</h1>
            <form>
                <textarea ref={textRef} className={classes.text}></textarea>
                <button onClick={addPost} >Send</button>
            </form>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default Posts;