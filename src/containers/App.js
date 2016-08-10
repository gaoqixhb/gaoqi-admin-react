var React = require('react');
var connect = require('react-redux').connect;
var ContactsActions = require('../actions/contacts');

var App = React.createClass({
  
  propTypes: {
    children: React.PropTypes.array,
    dispatch: React.PropTypes.func,
  },

  componentDidMount: function() {
    ContactsActions
      .init()
      .then(function actionFunc(action) {
        this.props.dispatch(action);
      }.bind(this));
  },
  
  render: function() {
    return (
      <div>
        <div className="page-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  },
});

function mapStateToProps() {
  return {

  };
}



module.exports = connect(mapStateToProps)(App);
