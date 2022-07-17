import logo from './logo.png';
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation'
import { Routes, Route, Navigate } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import DatingContainer from './components/dating/DatingContainer';
import { connect } from 'react-redux';
import LoginForm from './components/auth/login/LoginForm';
import RegisterForm from './components/auth/register/RegisterForm';

function App(props) {
  return (
      <div className="container">
        <div className="left">
          <img className='logo' src={logo} alt="" />
          <Navigation isAuthenticated={props.isAuthenticated} />
        </div>
        <div className="right">
          {
            props.isAuthenticated ? 
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/dating' element={<DatingContainer />}/>
              <Route path="*" element={<Navigate to="/profile" />}/>
            </Routes>
            :
            <Routes>
              <Route path='/login' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>
          }

        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
