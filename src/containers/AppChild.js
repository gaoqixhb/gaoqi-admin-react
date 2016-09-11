/**
 * AppChild
 * @authors yanjixiong 
 * @date    2016-07-11 16:39:17
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AppChild extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

AppChild.propTypes = {
  
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps)(AppChild);
