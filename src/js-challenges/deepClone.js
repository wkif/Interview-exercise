const deepClone = function(data){
    let res = Array.isArray(data)?[]:{}
    for(let key of Object.keys(data)){
        res[key] = typeof data[key] === 'object'?deepClone(data[key]):data[key]
    }
    return res
}

let obj = {
            a: 1,
            b: 2,
            c: {
                c: 1,
                d: 2
    }
}

console.log(deepClone(obj))

