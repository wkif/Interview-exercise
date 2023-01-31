
let n = 3;
let m = 3;
let k = 9;
let str = '123'

const mirror = function (str, n, m, k) {
    // console.log(str, n, m, k)
    // let resultStr = str
    // for (let i = 0; i < m; i++) {
    //     if (i % 2 == 0) {
    //         resultStr += strReverse(resultStr)
    //     } else {
    //         resultStr += resultStr
    //     }
    // }
    // // console.log('resultStr',resultStr)
    // return resultStr[k-1]
    // let count = n % k
    // console.log('count', count)
    let count = n / k
    if (count - 2 % 4 == 0 || count - 3 % 7 == 0) {
        return strReverse(str)[n % k - 1]
    } else {
        return str[n % k - 1]
    }
}
const strReverse = function (str) {
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}
console.log(mirror(str, n, m, k));