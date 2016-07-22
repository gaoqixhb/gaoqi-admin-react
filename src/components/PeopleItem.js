/**
 * ContactsItem Component
 * @authors yanjixiong 
 * @date    2016-07-11 10:41:33
 */

var React = require('react');
var Link = require('react-router').Link;

var PeopleItem = React.createClass({
  render: function() {
    var style = {
      itemPeople: {
        height: '30px',
        backgroundColor: '#e3e3e3',
        marginTop: '5px',
      },
    }
    return (
      <div>
        <Link to={'/people/1/detail'}>
          <div className="item-people" style={style.itemPeople}>
            <div className="item-avatar" style={{display: 'inline-block'}}>
              <img src="https://avatars1.githubusercontent.com/u/4217102?v=3&s=30" alt="" />
            </div>
            <div className="item-name" style={{display: 'inline-block'}}>名字</div>
          </div>
        </Link>
      </div>
    );
  },
});

module.exports = PeopleItem;
