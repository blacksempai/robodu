import classes from './Posts.module.css';
import Post from './post/Post';

const Posts = () => {
    return (
        <div>
            <form>
                <textarea className={classes.text}></textarea>
                <button>Send</button>
            </form>
            <div className={classes.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;