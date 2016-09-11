/**
 * Login Page
 * @authors luoyjx (yjk99@qq.com)
 * @date    2016-08-12 22:00:02
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },


  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="账户"
          >
            <Input placeholder="请输入账户名"
              {...getFieldProps('userName')}
            />
          </FormItem>
          <FormItem
            label="密码"
          >
            <Input type="password" placeholder="请输入密码"
              {...getFieldProps('password')}
            />
          </FormItem>
          <FormItem>
            <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
          </FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form>
      </div>
    );
  }
}

export default Login