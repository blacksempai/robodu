import './Profile.css';
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = () => {
    return (
        <div className='post'>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Profile;