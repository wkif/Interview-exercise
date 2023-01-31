/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    expression = expression.replace('-', '+-')
    let arr = expression.split('+')
    let numList = []
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i].split('/')
        if (Number(t[0])) {
            numList.push({
                'A': Number(t[0]),
                'B': Number(t[1])
            })
        }
    }
    let sumB = 1
    numList.forEach(item => {
        sumB *= item.B ? item.B : 1
    })
    let sumA = 0
    for (let i = 0; i < numList.length; i++) {
        let sum = numList[i].A
        numList.forEach(item => {
            sum *= item.B ? item.B : 1
        })
        sum /= numList[i].B
        sumA += sum
    }
    // console.log('sumA', sumA)
    // console.log('sumB', sumB)
    let x = gcd(sumA, sumB)
    // console.log('x', x)
    return sumA / x + '/' + sumB / x

};
function gcd(a, b) {
    if (a < b) {
        [a, b] = [b, a]
    }
    let t
    while (b != 0) {
        t = a % b
        a = b
        b = t
    }
    return a
}

let res = fractionAddition("-1/2-1/2+1/3");
console.log(res);