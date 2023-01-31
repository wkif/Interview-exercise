const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

// way1
let newArr = arr.flat(Infinity)
console.log('newArr', newArr)


// way2
let newArr2 = []
const myFlat = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            myFlat(array[i])
        } else {
            newArr2.push(array[i])
        }
    }
}
myFlat(arr)
console.log('newArr2', newArr2)