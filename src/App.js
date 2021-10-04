import logo from './phone.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click the linkie:
        </p>
        <a
          className="App-link"
          href="https://bit.ly/3a2JXfd"
          //target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
