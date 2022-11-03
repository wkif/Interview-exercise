let obj = {
    // a: 11,
    get a() {
        return this._a_;
    }, 
    set a(val) {
        this._a_ = val;
    }
}

console.log('obj.a',obj.a)
obj.a=33
console.log('obj.a',obj.a)
