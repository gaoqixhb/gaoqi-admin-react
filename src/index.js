var React = require('react');
var render = require('react-dom').render;
var Provider = require('react-redux').Provider;
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var configureStore = require('./store/configureStore');
var routes = require('./routes');
var store = configureStore()

render(
  <Provider store={store}>
    <Router >
      {routes}
    </Router>
  </Provider>,
  document.getElementById('contacts')
)
