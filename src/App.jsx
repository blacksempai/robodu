import logo from './logo.png';
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs'

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="left">
          <img className='logo' src={logo} alt="" />
          <Navigation />
        </div>
        <div className="right">
          <Routes>
            <Route path='/profile' element={<Profile state={props.state} dispatch={props.dispatch} />} />
            <Route path='/dialogs' element={<Dialogs state={props.state} dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
