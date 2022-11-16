const flatten = function (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr
}
let arr = [2,1,3,[1,2,3],[1,2,[1,2]],4]
console.log('flatten(arr)',flatten(arr))