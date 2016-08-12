import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'; 
import * as ContactsActions from '../actions/contacts';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page-wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

  componentDidMount() {
    ContactsActions
      .init()
      .then((action) => {this.props.dispatch(action)});
  }
}

App.PropTypes = {
  children: React.PropTypes.array,
  dispatch: React.PropTypes.func,
}

function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps)(App)
