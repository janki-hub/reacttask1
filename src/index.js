import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function shoot() {
  alert("congratution! you did it.");
}

const myelement = (
  <button onClick={shoot}>click here if you completed the diet plan</button>
);


ReactDOM.render(myelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
