/**
 * contacts reducer
 * @authors yanjixiong 
 * @date    2016-07-12 18:22:25
 */

import types from '../constants'

export default function constants(state, action) {
  var newArr;
  var oldState = !state 
  ? {
    contactsList: [],
    status: [{
      id: 0,
      name: '首页',
    }],
  } 
  : state;

  switch (action.type) {

  case types.TREE_FORWARD:
    newArr = Array.prototype.concat(oldState.status, action.node);
    return Object.assign({}, oldState, {
      status: newArr,
    });

  case types.TREE_BACK:
    newArr = Array.prototype.slice.call(oldState.status, 0, action.index + 1);
    return Object.assign({}, oldState, {
      status: newArr,
    });

  case types.INIT:
    return Object.assign({}, oldState, {
      contactsList: action.contactsList,
    });

  case types.GET_CHILDREN:
    return Object.assign({}, oldState, {
      contactsList: action.children,
    });

  default:
    return oldState;
  }
}
