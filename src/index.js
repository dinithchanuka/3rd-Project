import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

//import 'jquery';
// global.jQuery = require('jquery');
// require('bootstrap');
//import 'bootstrap/dist/css/bootstrap.css';
////import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//to fire base (if remove this --> remove 6 , 12-17 and un comment 10)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
