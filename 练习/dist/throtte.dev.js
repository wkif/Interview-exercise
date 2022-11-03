"use strict";

// 节流
// 没n秒执行一次
var throtte = function throtte(func, time) {
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      return;
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
    }, time);
  };
};