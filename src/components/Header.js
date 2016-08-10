/**
 * App Header
 * @authors yanjixiong
 * @date    2016-08-10 13:20:02
 */

import React, {PropTypes, Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="ant-row">
                    <div class="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4">
                    <i class="nav-phone-icon anticon anticon-menu"></i>
                    <a id="logo" href="/">
                    <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                    <span>Ant Design</span>
                    </a>
                    </div>
                    <div class="nav  ant-col-xs-0 ant-col-sm-17 ant-col-md-18 ant-col-lg-20" style="display: block;">
                    <div id="search-box">
                    <div class="ant-select ant-select-combobox ant-select-enabled">
                    <div class="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                    <div class="ant-select-selection__rendered"><div unselectable="unselectable" class="ant-select-selection__placeholder" style="display: block; -webkit-user-select: none;">搜索组件...</div>
                    <ul>
                    <li class="ant-select-search ant-select-search--inline">
                    <div class="ant-select-search__field__wrap">
                    <input value="" class="ant-select-search__field" />
                    <span class="ant-select-search__field__mirror"></span>
                    </div>
                    </li>
                    </ul>
                    </div><span class="ant-select-arrow" unselectable="unselectable" style="-webkit-user-select: none;"><b></b></span></div></div></div><ul class="ant-menu ant-menu-horizontal  ant-menu-light ant-menu-root" role="menu" aria-activedescendant="" id="nav" tabindex="0"><li class="ant-menu-item" role="menuitem" aria-selected="false"><a href="/"><span>首页</span></a></li><li class="ant-menu-item" role="menuitem" aria-selected="false"><a href="/docs/practice/cases"><span>实践</span></a></li><li class="ant-menu-item" role="menuitem" aria-selected="false"><a href="/docs/pattern/navigation"><span>模式</span></a></li><li class="ant-menu-item-selected ant-menu-item" role="menuitem" aria-selected="true"><a href="/docs/react/introduce"><span>组件</span></a></li><li class="ant-menu-item" role="menuitem" aria-selected="false"><a href="/docs/spec/introduce"><span>语言</span></a></li><li class="ant-menu-item" role="menuitem" aria-selected="false"><a href="/docs/resource/download"><span>资源</span></a></li></ul></div></div>
            </header>
        )
    }
}

export default Header;