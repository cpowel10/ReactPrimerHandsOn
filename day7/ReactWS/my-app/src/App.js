import logo from './logo.svg';
import './App.css';
import Another from './another';
import HelloWorld from './HelloWorld';

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
        <div>
          <p id='carPrint'>my car is a <b><i>{Car.year} {Car.brand} {Car.model}</i></b></p>
        </div>
        <Another/>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
