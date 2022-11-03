"use strict";

// 防抖
// n秒后执行，n秒内重复执行重新计时
var debounce = function debounce(fun, time) {
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      fun.apply(_this, args);
    }, time);
  };
};