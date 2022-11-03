const getNumber = function (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr[i]) {
            res.push(i)
            arr = [...arr.slice(0, i),i, ...arr.slice(i)]
            i--
        }
    }
    return res
}
let arr = [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16]
console.log('getNumber(arr)', getNumber(arr))