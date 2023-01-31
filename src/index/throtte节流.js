// // 节流
// // 没n秒执行一次

// const throtte = function (func, time) {
//     let timer = null
//     return function (...args) {
//         if (timer) {
//             return
//         }
//         timer = setTimeout(() => {
//             func.apply(this, args)
//         }, time)
//     }
// }

const thortte = function (fn, time) {
    let timer = null
    return function (...args) {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, time)
    }
}