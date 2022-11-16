"use strict";

// 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)
// 经典面试题：实现add(1)(2)(3)(4)=10; 、 add(1)(1,2,3)(2)=9;
function add() {
  var _args = Array.prototype.slice.call(arguments);

  function fn() {
    _args.push.apply(_args, arguments);

    return fn;
  }

  fn.toString = function () {
    return _args.reduce(function (sum, cur) {
      return sum + cur;
    });
  };

  return fn;
}

console.log('add(1)(2)(3)(4)', add(1)(2)(3)(4).toString());