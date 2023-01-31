const isobject = function (object) {
    if (JSON.stringify(object) == '{}') {
        return true
    }
    return false
}
const isobject_2 = function (object) {
    if (Object.keys(object).length<=0) {
        return true
    }
    return false
}
console.log(isobject_2({a:1}))