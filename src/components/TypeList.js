/**
 * TypeList Component
 * @authors yanjixiong 
 * @date    2016-07-11 10:28:01
 */

var React = require('react');
var Link = require('react-router').Link;

var TypeList = React.createClass({
  render: function() {
    return (
      <div>
          <div className="list-type">
            <div className="list-type-item public-account">
              <Link to={'/publicAccount'}>
                <div className="item-avatar icon-public-acount">
                  <img src="" alt="" />
                </div>
                <div className="item-title">
                  <span>公众号</span>
                </div>
              </Link>
            </div>
            <div className="list-type-item group">
              <Link to={'/group'}>
                <div className="item-avatar icon-group">
                  <img src="" alt="" />
                </div>
                <div className="item-title">
                  <span>群组</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
    );
  },
});

module.exports = TypeList;
