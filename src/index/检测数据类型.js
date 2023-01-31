
// // 检测数据类型

// const checkType = function (arg) {
//     if (typeof (arg) != 'object') {
//         return typeof (arg)
//     } else if (arg instanceof Array) {
//         return 'Array'
//     }else if ( arg instanceof Function){
//         return 'Function'
//     }else{
//         return 'object'
//     }

// }
// let arg ={}
// console.log('checkType(arg)',checkType(arg))

// typeof
console.log(typeof ('kif'))
console.log(typeof (12))
let a = function () { }
console.log(typeof (a))
console.log(typeof ({}))//object
console.log(typeof ([]))//object
// instanceof
console.log(12 instanceof Number)//false
console.log([] instanceof Array)
console.log({} instanceof Object)
// Array
let arr = []
console.log(Array.isArray(arr))//

// constructor
console.log((12).constructor === Number)//true
//Object.prototype.toString.call()
let x = Object.prototype.toString
console.log(x.call(12))
console.log(x.call([]))
console.log(x.call({}))