/**
 * App Header
 * @authors yanjixiong
 * @date    2016-08-10 13:20:02
 */

import React, { PropTypes, Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

import 'assets/css/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Menu mode="horizontal">
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                        <Menu.Item key="setting:1">退出</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Header;