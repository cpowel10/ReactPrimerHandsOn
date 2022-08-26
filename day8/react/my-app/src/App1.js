import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './customerList';

function App() {
  const numbers = [44,75,21,36,10];
  const listItems = numbers.map((number)=><li>{number}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <h2>List Rendering</h2>
        <ul>{listItems}</ul>
        <CustomerList/>
      </header>
    </div>
  );
}

export default App;
