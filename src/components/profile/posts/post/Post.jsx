import classes from './Post.module.css';

const Post = (props) => {

    const addLike = () => {
        let action = { type: 'ADD_LIKE', id: props.id};
        props.dispatch(action);
    }

    return (
        <div className={classes.post}>
            <img width="50" src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip" alt="" />
            <p>{props.text}</p>
            <div className="likes">
                <span>{props.likes}</span>
                <button className={classes.like_btn} onClick={addLike} >👍🏿</button>
            </div>
        </div>
    );
}

export default Post;