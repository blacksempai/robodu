import logo from './logo.png';
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="left">
          <img className='logo' src={logo} alt="" />
          <Navigation />
        </div>
        <div className="right">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
