var React = require('react');
var render = require('react-dom').render;
var Provider = require('react-redux').Provider;
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var configureStore = require('./store/configureStore');
var routes = require('./routes');
var store = configureStore()

import 'antd/dist/antd.css';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('gaoqi-admin')
)
