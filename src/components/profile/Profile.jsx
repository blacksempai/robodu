import classes from './Profile.module.css';
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <ProfileInfo />
            <Posts posts={props.state.posts} addPost={props.addPost} addLike={props.addLike} />
        </div>
    );
}

export default Profile;