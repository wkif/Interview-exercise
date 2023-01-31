const reverseBySep = function (str, sep) {
    return str.split(sep).reverse().join(sep)
}

let str = 'ajshxka jaskdjhak kkasa klhklask asda '

console.log(reverseBySep(str,''))