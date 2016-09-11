/**
 * route
 * @authors yanjixiong 
 * @date    2016-07-11 16:15:25
 */

var React = require('react');
var Route = require('react-router').Route;

import App from './containers/App';
import AppChild from './containers/AppChild';


module.exports = (
	<Route component={App}>
        <Route path="/" component={AppChild} />
	</Route>
);
