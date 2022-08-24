import logo from './logo.svg';
import './App.css';
import Another from './another';
import HelloWorld from './HelloWorld';
import HelloMessage from './hellomessage';
import Counter from './counter';
import Alert from './alert';

function App() {
  const Car = {
    brand : "Chevrolet",
    model : "Sonic",
    year : 2013
  }
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
        <Another/>
        <HelloWorld/>
        <HelloMessage name='Chris' message='Welcome to React!!!'/>
        <HelloMessage name='ABC' message='Hello World'/>
        <Counter/>
        <Alert/>
      </header>
    </div>
  );
}

export default App;
