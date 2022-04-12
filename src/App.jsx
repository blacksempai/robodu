import logo from './logo.png';
import './App.css';
import Profile from './components/profile/Profile'
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <div className="container">
      <div className="left">
        <img className='logo' src={logo} alt="" />
        <Navigation />
      </div>
      <div className="right">
        <Profile />
      </div>
    </div>
  );
}

export default App;
