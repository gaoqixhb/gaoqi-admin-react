/**
 * AppChild
 * @authors yanjixiong 
 * @date    2016-07-11 16:39:17
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import TypeList from '../components/TypeList';
import ContactsContainer from '../components/ContactsContainer';

class AppChild extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <TypeList />
        <ContactsContainer
          contactsList={this.props.contactsList}
          status={this.props.status}
          />
      </div>
    )
  }
}

AppChild.propTypes = {
  contactsList: React.PropTypes.array,
  status: React.PropTypes.array,
}

function mapStateToProps(state) {
  return {
    contactsList: state.contacts.contactsList,
    status: state.contacts.status.length === 0 ? [] : state.contacts.status,
  }
}

export default connect(mapStateToProps)(AppChild);
