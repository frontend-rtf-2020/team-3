import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import LogIn from './components/LogIn.jsx';
import * as serviceWorker from './serviceWorker';
//import Demo from './components/header/header';

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
//ReactDOM.render(<Demo />, document.querySelector('#root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
