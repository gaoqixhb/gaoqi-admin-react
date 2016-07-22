var createStore = require('redux').createStore;
var rootReducer = require('../reducers');


module.exports = function configureStore(preloadedState) {
  var store = createStore(rootReducer, preloadedState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      var nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store;
}
