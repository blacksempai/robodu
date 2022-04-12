import './Posts.css';
import Post from './post/Post';

const Posts = () => {
    return (
        <div>
            <form>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;