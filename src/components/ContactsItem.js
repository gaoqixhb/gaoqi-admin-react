/**
 * ContactsItem Component
 * @authors yanjixiong 
 * @date    2016-07-11 13:48:49
 */

var React = require('react');
var connect = require('react-redux').connect;

var ContactsActions = require('../actions/contacts');

var ContactsItem = React.createClass({

  propTypes: {
    contact: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  },

  handleClick: function() {
    var self = this;

    ContactsActions
      .getChildren(this.props.contact.id)
      .then(function listFunc(list) {
        self.props.dispatch(list);
      })
    
    this.props.dispatch(ContactsActions.treeForward({
      id: this.props.contact.id,
      name: this.props.contact.title,
    }));
  },

  render: function() {
    var style = {
      itemTitle: {
        height: '30px',
        lineHeight: '30px',
      },
    };
    return (
      <div className="list-contacts-item" >
        <div className="item-title" style={style.itemTitle}
          data-name={this.props.contact.title}
          onClick={this.handleClick}>
          <span>{this.props.contact.title}</span>
        </div>
      </div>
    );
  },
})

function mapStateToProps(state) {
  return {
    statusStrs: state.contacts.status.map(function mapFunc(item) {return item.name;}),
  }
}

module.exports = connect(mapStateToProps)(ContactsItem);
