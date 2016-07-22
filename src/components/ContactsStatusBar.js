/**
 * ContactsStatusBar Component
 * @authors yanjixiong 
 * @date    2016-07-12 16:26:16
 */

var React = require('react');
var connect = require('react-redux').connect;
var ContactsActions = require('../actions/contacts');

var ContactsStatusBar = React.createClass({

  propTypes: {
    status: React.PropTypes.array,
    dispatch: React.PropTypes.func,
  },

  render: function() {
    var self = this;

    var style = {
      // display: this.props.status.length > 0 ? 'block' : 'none' 
    };
    return (
      <div style={style}>
        <h4>
          {this.props.status.map(function mapFunc(item, index) {
            return (
              <span key={item.name + index}
                onClick={function handleBack() {
                  self.props.dispatch(ContactsActions.treeBack(index));
                  ContactsActions
                    .getChildren(item.id)
                    .then(function listFunc(list) {
                      self.props.dispatch(list);
                    })
                }} >
                {index > 0 ? ' > ' : ''}{item.name}
              </span>
            );
          })}
          </h4>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    status: state.contacts.status,
  }
}

module.exports = connect(mapStateToProps)(ContactsStatusBar);
