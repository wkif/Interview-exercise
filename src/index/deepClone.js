

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
    date: new Date(),
    action: function () {
        console.log('action')
    }

};

console.log('deepClone(obj)', deepClone(obj))