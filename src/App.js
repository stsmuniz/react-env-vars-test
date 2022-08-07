import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env)
  const url = process.env.NODE_ENV == "development" 
    ? 'http://localhost:3000'
    : process.env.REACT_APP_VERCEL_URL;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Minha variável de ambiente: {url}</p>
      </header>
    </div>
  );
}

export default App;
