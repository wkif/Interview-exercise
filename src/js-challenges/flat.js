const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]


Array.prototype.flat = function(deep=1){
    let res = []
    deep--
    this.forEach(val=>{
        if(Array.isArray(val)&&deep>=0){
            res=res.concat(val.flat(deep))
        }else{
            res.push(val)
        }
    })
    return res
}

console.log(arr.flat())



