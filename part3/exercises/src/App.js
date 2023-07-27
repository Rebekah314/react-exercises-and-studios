import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Reading</h1>
      <HobbyIntroduction />
      <p>Here are the next books I want to read: </p>
      <MyProjects />
    </div>
  );
}

export default App;
