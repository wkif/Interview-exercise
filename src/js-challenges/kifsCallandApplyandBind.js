Function.prototype.kifsCall = function(context,...args){
   context = (context==null||context==undefined) ? window : context
  context._fn = this
  const res = context._fn(...args)
  delete context._fn
  return res
}
Function.prototype.kifsApply = function(context,args){
   context = (context==null||context==undefined) ? window : context
  context._fn = this
  let res = context._fn(...args)
  delete context._fn
  return res
}

Function.prototype.kifsBind = function(context,...args){
   context = (context==null||context==undefined) ? window:context
  let _this = this
  return function(...args2){
    context._fn  = _this
    const res = context._fn(...[...args,...args2])
    delete context._fn
    return res
  }
}

class obj{
  constructor(name){
    this.name = name
  }
}
let a = new obj('kif')


const fun = function(age){
  console.log(this.name,age)
}
fun()
fun.apply(a,[1])
fun.kifsApply(a,[12])
fun.kifsCall(a,13)

let f = fun.kifsBind(a,[14])
f()






