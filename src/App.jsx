import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Robocode dating app "Robodu"
        </p>
        <Profile />
      </header>
    </div>
  );
}

export default App;
