/**
 * route
 * @authors yanjixiong 
 * @date    2016-07-11 16:15:25
 */

var React = require('react');
var Route = require('react-router').Route;

import App from './containers/App';
import AppChild from './containers/AppChild';

var PublicAccountList = require('./components/PublicAccountList');
var GroupList = require('./components/GroupList');
var PeopleDetail = require('./components/PeopleDetail');

module.exports = (
	<Route component={App}>
        <Route path="/" component={AppChild} />
        <Route path="/publicAccount" component={PublicAccountList} />
        <Route path="/group" component={GroupList} />
        <Route path="/people/:id/detail" component={PeopleDetail} />
	</Route>
);
