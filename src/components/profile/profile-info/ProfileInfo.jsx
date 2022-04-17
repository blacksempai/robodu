import classes from './ProfileInfo.module.css';
import ava from './ava.jfif'

const ProfileInfo = () => {
    return (
        <div className={classes.ProfileInfo}>
            <img src={ava} alt="Avatar" className={classes.ava}/>
            <div className={classes.info}>
                <h1>Andriy Moskalenko</h1>
                <p>Status: married</p>
                <p>Age: 24</p>
                <p>Hobbies: Web-design, bass guitar</p>
                <p>University: KNUTD</p>
            </div>
        </div>
    );
}

export default ProfileInfo;