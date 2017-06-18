var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import navbar from "./components/main";


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <main/>,
  document.getElementById('app')
);
