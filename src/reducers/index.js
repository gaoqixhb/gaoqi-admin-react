var combineReducers = require('redux').combineReducers;
var contacts = require('./contacts');

var rootReducer = combineReducers({
  contacts: contacts,
});

module.exports = rootReducer;
