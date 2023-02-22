const kifsInstanceof =function(a,b){
  const protoOfa = a.__proto__
  let protoTypeOfb = b.prototype
  while(protoTypeOfb){
    if(protoOfa === protoTypeOfb){
      return true
    }else{
      protoTypeOfb = protoTypeOfb.prototype
    }
  }
  return false
}

class obj {

}

let a= new obj()

console.log(a instanceof obj)
console.log(kifsInstanceof(a,obj))