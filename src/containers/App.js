import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'; 
import * as ContactsActions from '../actions/contacts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Menu, DatePicker } from 'antd'

class App extends Component {
  onChange(value, dateString) {
    console.log(value, dateString);
  }

  render() {
    return (
      <div>
        <Header />
        <Menu>
            <Menu.Item key="0">
                <a href="/logout">注销</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1" disabled>设置 </Menu.Item>
            <Menu.Item key="3" disabled>修改密码</Menu.Item>
            <Menu.Item key="4" disabled>反馈意见</Menu.Item>
        </Menu>
        <DatePicker />
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
