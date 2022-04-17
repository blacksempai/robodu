import classes from './Posts.module.css';
import Post from './post/Post';

const Posts = () => {
    return (
        <div>
            <h1>Posts:</h1>
            <form>
                <textarea className={classes.text}></textarea>
                <button>Send</button>
            </form>
            <div className={classes.posts}>
                <Post text="Hello, my dear friend!"/>
                <Post text="Hello, How are You?" />    
                <Post text="I hate my life, because of React" />
            </div>
        </div>
    );
}

export default Posts;