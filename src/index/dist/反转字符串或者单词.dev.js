"use strict";

var reverseBySep = function reverseBySep(str, sep) {
  return str.split(sep).reverse().join(str);
};

var str = 'ajshxka jaskdjhak kkasa klhklask asda ';
console.log(reverseBySep(str, ''));