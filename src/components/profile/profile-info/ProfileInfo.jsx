import classes from './ProfileInfo.module.css';
import ava from './ava.jfif'

const ProfileInfo = () => {
    return (
        <div className={classes.ProfileInfo}>
            <img src={ava} alt="Avatar" className={classes.ava}/>
            <div className="info">
                <h1>Profile</h1>
                <p>Name: Andriy</p>
                <p>Age: 95</p>
            </div>
        </div>
    );
}

export default ProfileInfo;