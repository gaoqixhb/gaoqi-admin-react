/**
 * SerarchBox Component
 * @authors yanjixiong 
 * @date    2016-07-11 10:24:01
 */

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SearchBox = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {
      value: '',
    };
  },

  render: function() {
    return (
      <div>
        <div className="search-box-container">
          <div className="search-box">
            <div className="search-input">
              <input type="text" 
                valueLink={this.linkState('value')} 
                placeholder="请输入联系人" 
                />  
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = SearchBox;
