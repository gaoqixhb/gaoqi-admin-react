/**
 * PublicAccountList Component
 * @authors yanjixiong 
 * @date    2016-07-11 16:28:49
 */

var React = require('react');
var SearchBox = require('./SearchBox');

var PublicAccountList = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBox />
        <div>
          公众号列表
        </div>
      </div>
    );
  },
});

module.exports = PublicAccountList;
