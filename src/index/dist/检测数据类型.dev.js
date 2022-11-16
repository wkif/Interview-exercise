"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// // 检测数据类型
// const checkType = function (arg) {
//     if (typeof (arg) != 'object') {
//         return typeof (arg)
//     } else if (arg instanceof Array) {
//         return 'Array'
//     }else if ( arg instanceof Function){
//         return 'Function'
//     }else{
//         return 'object'
//     }
// }
// let arg ={}
// console.log('checkType(arg)',checkType(arg))
// typeof
console.log(_typeof('kif'));
console.log(_typeof(12));

var a = function a() {};

console.log(_typeof(a));
console.log(_typeof({})); //object

console.log(_typeof([])); //object
// instanceof

console.log(12 instanceof Number); //false

console.log([] instanceof Array);
console.log({} instanceof Object); // Array

var arr = [];
console.log(Array.isArray(arr)); //
// constructor

console.log(12 .constructor === Number); //true
//Object.prototype.toString.call()

var x = Object.prototype.toString;
console.log(x.call(12));
console.log(x.call([]));
console.log(x.call({}));