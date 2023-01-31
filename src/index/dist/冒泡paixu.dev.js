"use strict";

var arr = [1, 23, 5, 1, 54, 2, 6, 34, 76, 2];

var sort = function sort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var _ref = [arr[j + 1], arr[j]];
        arr[j] = _ref[0];
        arr[j + 1] = _ref[1];
      }
    }
  }
};

sort(arr);
console.log('arr', arr);