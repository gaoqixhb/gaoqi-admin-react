/**
 * ContactsList Component
 * @authors yanjixiong 
 * @date    2016-07-11 10:34:12
 */

var React = require('react');
var ContactsItem = require('./ContactsItem');
var PeopleItem = require('./PeopleItem');

var ContactsList = React.createClass({

  propTypes: {
    contactsList: React.PropTypes.array,
  },

  renderItem: function renderItem(item, index) {
    if (item.leaf) {
      return (
        <PeopleItem
          contact={item}
          key={item.title + index}
          />
      );
    } else if (!item.leaf) {
      return (
        <ContactsItem 
          contact={item} 
          key={item.title + index} 
          />
      );
    }
    return null;
  },

  render: function() {
    var self = this;
    return (
      <div>
        {this.props.contactsList.map(function mapFunc(item, index) {
          return (self.renderItem(item, index));
        })}
      </div>
    );
  },
});

module.exports = ContactsList;
