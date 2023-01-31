### 检测数据类型

1. typeof

2. instanceof

   

```js
// 检测数据类型

const checkType = function (arg) {
    if (typeof (arg) != 'object') {
        return typeof (arg)
    } else if (arg instanceof Array) {
        return 'Array'
    }else if ( arg instanceof Function){
        return 'Function'
    }else{
        return 'object'
    }

}
let arg ={}
console.log('checkType(arg)',checkType(arg))
```



### 深拷贝



```js


const deepClone = function (obj) {
    let newObj = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        if (typeof (obj[key]) == 'object') {
            newObj[key] = deepClone(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}



let obj = {
    name: "zs",
    age: 20,
    father: [2, 3, 4],
};

console.log('deepClone(obj)', deepClone(obj))
```





### 防抖

```js
// 防抖
// n秒后执行，n秒内重复执行重新计时

const debounce = function (fun, time) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fun.apply(this,args)
        }, time)

    }
}
```



### 节流

```js
// 节流
// 没n秒执行一次

const throtte = function (func, time) {
    let timer = null
    return function (...args) {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, time)
    }
}
```



