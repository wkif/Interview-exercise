const arr = [1,2,3]

Array.prototype.kifsMap =function(callback){
    let res = []
    this.forEach((item, index)=>{
        res.push(callback(item,index,this))
    })
    return res
}
const res = arr.kifsMap((item,index,arr)=>item*3)
console.log(res)
