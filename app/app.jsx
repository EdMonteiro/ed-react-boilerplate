var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

<<<<<<< HEAD
import navbar from "./components/main";
=======
import navbar from "./components/navbar.jsx";
>>>>>>> 07e2953887d6e4a504909ec8f8ad9ff4bd0506d8


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<<<<<<< HEAD
  <main/>,
=======
  <navbar/>,
>>>>>>> 07e2953887d6e4a504909ec8f8ad9ff4bd0506d8
  document.getElementById('app')
);
