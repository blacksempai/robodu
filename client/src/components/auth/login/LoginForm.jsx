import { connect } from 'react-redux';
import { login } from '../../../redux/authReducer'

const LoginForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        props.login(data.login, data.password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='login' placeholder='login' />
                <input type="password" name='password' placeholder='password' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default connect(null, {login})(LoginForm);