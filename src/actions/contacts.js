/**
 * contacts action
 * @authors yanjixiong
 * @date    2016-07-11 08:58:29
 */

'use strict';
var fetch = require('isomorphic-fetch');
var types = require('../constants');
var API = require('../constants/api');

module.exports = {
  /**
   * 跳到的节点对象
   * @param  {[type]} node [description]
   * @return {[type]}      [description]
   */
  treeForward: function(node) {
    return { type: types.TREE_FORWARD, node: node };
  },

  /**
   * 回退到的节点在状态列表中的下标
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  treeBack: function(index) {
    return { type: types.TREE_BACK, index: index };
  },

  /**
   * 初始化列表数据
   * @return {[type]} [description]
   */
  init: function() {
    return fetch(API.URL + '/api/v1/taddress')
      .then(function(res) {
        return res.json();
      })
      .then(function(result) {
        return {type: types.INIT, contactsList: result.contactsList};
      })
  },

  /**
   * 根据当前节点id获取所有直接子节点
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  getChildren: function(id) {
    return fetch(API.URL + '/api/v1/taddress/' + id + '/children')
      .then(function(res) {
        return res.json();
      })
      .then(function(result) {
        return { type: types.GET_CHILDREN, children: result.children };
      });
  },
};
