import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav>
            {
            props.isAuthenticated ?
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/dating">Dating</NavLink></li>
                <li><NavLink to="/likes">Likes</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
            :
            <ul>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
            }
        </nav>
    )
}

export default Navigation;