import { connect } from 'react-redux';
import { register } from '../../../redux/authReducer'

const RegisterForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        props.register(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='login' placeholder='login' />
                <input type="password" name='password' placeholder='password' />
                <input type="text" name='name' placeholder='Full name'/>
                <input type="text" name='gender' placeholder='genger'/>
                <input type="text" name='age' placeholder='age'/>
                <input type="text" name='photoURL' placeholder='photoURL'/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default connect({register})(RegisterForm);