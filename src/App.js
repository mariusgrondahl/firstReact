import React from 'react';
import logo from './logo.svg';
import Footer from './Footer';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header name="Testbruker" message="Hva skjer a?"/>
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
      <Footer />
    </div>
  );
}

export default App;
