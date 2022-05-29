import logo from './logo.png';
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation'
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';

function App(props) {
  return (
      <div className="container">
        <div className="left">
          <img className='logo' src={logo} alt="" />
          <Navigation />
        </div>
        <div className="right">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
