const myInstanceof = function(left,right){
    // 获取对象原型
    let proto = Object.getPrototypeOf(left)
    // 获取构造函数
    let protoType = right.prototype
    
    while(true){
        if(!proto){
            return false
        }
        if(proto==protoType){
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    
}
console.log(myInstanceof(12,String))