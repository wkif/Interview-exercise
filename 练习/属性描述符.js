// 检测属性特性 getOwnPropertyDescriptor
let obj = {
    a: 12
}
console.log(Object.getOwnPropertyDescriptor(obj, 'a'))
//  修改属性特性 defineProperty
Object.defineProperty(obj, 'a', {
    value: 22
})
console.log('obj.a', obj.a)//22

// 对象常量 即使对象属性不可变
Object.defineProperty(obj, 'a', {
    value: 22,
    writable: false,
    configurable: false
})
obj.a = 12
console.log('obj.a', obj.a)//22
// 禁止对象扩展 Object.preventExceptions
Object.preventExtensions(obj)
obj.v=1212
console.log('obj.v',obj.v)//undefined