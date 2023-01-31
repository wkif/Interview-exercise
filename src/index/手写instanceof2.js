function myInstanceof(A,B){
    let p =A
    while(p){
        p = p.__proto__
        if(p==B.prototype){
            return true
        }
    }
    return false
}
function Foo(){}
let foo = new Foo()
console.log('myInstanceof(foo,FOO)',myInstanceof(foo,Foo))