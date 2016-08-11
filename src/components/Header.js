/**
 * App Header
 * @authors yanjixiong
 * @date    2016-08-10 13:20:02
 */

import React, { PropTypes, Component } from 'react';

class Header extends Component {
    render() {

        const style = {
            display: 'block',
        };

        return (
            <header>
                <div className="ant-row">
                    <div className="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4">
                    
                    </div>
                    <div className="nav  ant-col-xs-0 ant-col-sm-17 ant-col-md-18 ant-col-lg-20" style={style}>
                    
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;