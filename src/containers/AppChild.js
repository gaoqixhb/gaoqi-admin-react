/**
 * AppChild
 * @authors yanjixiong 
 * @date    2016-07-11 16:39:17
 */

var React = require('react');
var connect = require('react-redux').connect;
var SearchBox = require('../components/SearchBox');
var TypeList = require('../components/TypeLIst');
var ContactsContainer = require('../components/ContactsContainer');


var AppChild = React.createClass({
  
  propTypes: {
    contactsList: React.PropTypes.array,
    status: React.PropTypes.object,
  },

  render: function() {
    return (
      <div>
        <SearchBox />
        <TypeList />
        <ContactsContainer
          contactsList={this.props.contactsList}
          status={this.props.status}
          />
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    contactsList: state.contacts.contactsList,
    status: state.contacts.status.length === 0 ? [] : state.contacts.status,
  }
}

module.exports = connect(mapStateToProps)(AppChild);
