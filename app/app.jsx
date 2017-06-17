var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import navbar from "./components/navbar.jsx";


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <navbar/>,
  document.getElementById('app')
);
