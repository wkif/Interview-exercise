const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// es6

let newArr = [...new Set(arr)]
console.log('newArr',newArr)
const res1 = Array.from(new Set(arr));
console.log('res1',res1)