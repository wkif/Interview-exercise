let arr = [
    1,2,3,4,5,6
]

const sort = function (arr) {
    let count=0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                count++
            }
        }
    }
    console.log('count',count)

}
sort(arr)
console.log('arr', arr)