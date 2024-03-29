function toCurry(func, ...args) {
    // ↑需要柯里化的函数作为参数
    // ↑也可以有初始参数传入
    // ↑缓存在args中
    return function () {
        // 合并上一次缓存的参数和本次传入的参数
        args = [...args, ...arguments];
        // 判断参数数量是否足够
        if (args.length < func.length) {
            // 如果不够，继续递归
            // 注意，这里每一次递归都会形成新的闭包
            // 保证柯里化函数每一步调用都是独立的，互不影响
            return toCurry(func, ...args);
        } else {
            // 如果参数满足数量，执行函数并返回结果
            return func.apply(null, args);
        }
    }
}
function bar(a, b, c) {
    return a + b + c;
}
// 把函数传进去就可以了
var f = toCurry(bar)

console.log(f(1)(2)(3));
console.log(f(1)(2, 3));
// console.log(f(1, 2)(3));