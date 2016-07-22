/**
 * ContactsContainer Component
 * @authors yanjixiong 
 * @date    2016-07-11 11:02:16
 */

var React = require('react');
var connect = require('react-redux').connect;
var ContactsList = require('./ContactsList');
var ContactsStatusBar = require('./ContactsStatusBar');

var ContactsContainer = React.createClass({

  propTypes: {
    status: React.PropTypes.array,
    contactsList: React.PropTypes.array,
  },

  render: function() {
    var style = {
      listTitle: {
        backgroundColor: '#ccc',
        padding: '5px',
      },
    };
    return (
      <div className="list-contacts-container">
        <div className="list-title" style={style.listTitle}>
          <span>智学联系人</span>
        </div>
        <ContactsStatusBar  
          status={this.props.status}
          />
        <ContactsList 
          contactsList={this.props.contactsList} 
          />
      </div>
    );
  },
});

function mapStateToProps() {
  return {

  };
}

module.exports = connect(mapStateToProps)(ContactsContainer);
