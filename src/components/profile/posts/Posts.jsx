import classes from './Posts.module.css';
import Post from './post/Post';

const Posts = (props) => {
    let posts = a.map( post => <Post text={post.text} /> );

    return (
        <div>
            <h1>Posts:</h1>
            <form>
                <textarea className={classes.text}></textarea>
                <button>Send</button>
            </form>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default Posts;