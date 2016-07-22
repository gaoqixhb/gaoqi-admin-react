/**
 * GroupList Component
 * @authors yanjixiong 
 * @date    2016-07-11 16:35:02
 */

var React = require('react');
var SearchBox = require('./SearchBox');

var GroupList = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBox />
        <div>
          群组列表
        </div>
      </div>
    );
  },
});

module.exports = GroupList;
