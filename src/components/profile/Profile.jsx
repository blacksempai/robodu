import classes from './Profile.module.css';
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <ProfileInfo />
            <Posts posts={props.state.postState.posts} newPostText={props.state.postState.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;