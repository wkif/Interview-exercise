"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var array2Tree = function array2Tree(data) {
  var getChildrenTree = function getChildrenTree(data, pid) {
    return data.filter(function (item) {
      return item.pid === pid;
    }).map(function (item) {
      return _objectSpread({}, item, {
        children: getChildrenTree(data, item.id)
      });
    });
  };

  var root = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      item = _step.value;
      console.log('item', item);

      if (item.pid == null) {
        root = _objectSpread({}, item, {
          children: getChildrenTree(data, item.id)
        });
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return root;
};

var arr = [{
  id: 0,
  name: 'kif1',
  pid: null
}, {
  id: 1,
  name: 'kif2',
  pid: 0
}, {
  id: 2,
  name: 'kif3',
  pid: 0
}, {
  id: 3,
  name: 'kif4',
  pid: 2
}, {
  id: 4,
  name: 'kif5',
  pid: 1
}];
console.log('array2Tree(arr)', array2Tree(arr));