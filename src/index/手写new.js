function myNew(fn, ...args) {
    let obj = new Object()
    obj.__proto__ = fn.prototype;
    let res = fn.apply(this, args)
    return typeof res === 'object' ? res | obj : obj
}