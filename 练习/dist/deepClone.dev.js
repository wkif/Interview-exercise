"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var deepClone = function deepClone(obj) {
  var newObj = Array.isArray(obj) ? [] : {};

  for (key in obj) {
    if (_typeof(obj[key]) == 'object') {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

var obj = {
  name: "zs",
  age: 20,
  father: [2, 3, 4],
  date: new Date(),
  action: function action() {
    console.log('action');
  }
};
console.log('deepClone(obj)', deepClone(obj));