import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getContractNFTs } from './utils';

function App() {
  useEffect( () => {
    getContractNFTs("0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D")
  }, []);

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
      </header>
    </div>
  );
}

export default App;
