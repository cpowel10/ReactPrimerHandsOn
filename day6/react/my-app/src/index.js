import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './mycomponent';
import HelloWorld from './HelloWorld';
import HelloMessage from './helloMessage';
import HelloWorldF from './HelloWorldf';
import Revature from './revature';
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyComponent />
    <HelloWorld/>
    <HelloWorldF/>
    <HelloMessage name='Revature'/>
    <HelloMessage name='Chris' message='Welcome to Props'/>
    <Revature name='Chris' value='Good'/>
    <h4>Counter component</h4>
    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
