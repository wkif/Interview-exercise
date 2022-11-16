// 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)
// 经典面试题：实现add(1)(2)(3)(4)=10; 、 add(1)(1,2,3)(2)=9;
const add = function () {
    const _args = [...arguments]
    function fn() {
        _args.push(...arguments)
        return fn
    }
    fn.toString = function () {
        let sum = 0
        _args.forEach(item => {
            sum += item
        })
        return sum
    }
    return fn
}
console.log('add(1)(2)(3)(4)', add(1)(2)(3)(4).toString())