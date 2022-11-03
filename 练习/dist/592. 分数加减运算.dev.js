"use strict";

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function fractionAddition(expression) {
  expression = expression.replace('-', '+-');
  var arr = expression.split('+');
  var numList = [];

  for (var i = 0; i < arr.length; i++) {
    var t = arr[i].split('/');

    if (Number(t[0])) {
      numList.push({
        'A': Number(t[0]),
        'B': Number(t[1])
      });
    }
  }

  var sumB = 1;
  numList.forEach(function (item) {
    sumB *= item.B ? item.B : 1;
  });
  var sumA = 0;

  for (var _i = 0; _i < numList.length; _i++) {
    var sum = numList[_i].A;
    numList.forEach(function (item) {
      sum *= item.B ? item.B : 1;
    });
    sum /= numList[_i].B;
    sumA += sum;
  } // console.log('sumA', sumA)
  // console.log('sumB', sumB)


  var x = gcd(sumA, sumB); // console.log('x', x)

  return sumA / x + '/' + sumB / x;
};

function gcd(a, b) {
  if (a < b) {
    var _ref = [b, a];
    a = _ref[0];
    b = _ref[1];
  }

  var t;

  while (b != 0) {
    t = a % b;
    a = b;
    b = t;
  }

  return a;
}

var res = fractionAddition("-1/2-1/2+1/3");
console.log(res);