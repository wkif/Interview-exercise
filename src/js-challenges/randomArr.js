const randomArr = function(length,min=0,max=Infinity) {
    if(max - min + 1 < length){
        throw new Error("参数有误")
    }
    let arr = new Array()
    while(arr.length < length){
        let item = Math.floor(Math.random()*max)
        if(item < min ){
            continue
        }
        if(arr.indexOf(item)===-1){
            arr.push(item)
        }
    }
    return arr
}

console.log(randomArr(5,1,10))
