// 1.原型链实现



// function Parent() {
//     this.name = 'kif'
// }

// Parent.prototype.getName = function () {
//     console.log('this.name', this.name)
// }

// function Child() { }

// // Parent的实例同时包含实例属性方法和原型属性方法，所以把new Parent()赋值给Child.prototype。
// // 如果仅仅Child.prototype = Parent.prototype，那么Child只能调用getName，无法调用.name
// // 当Child.prototype = new Parent()后， 如果new Child()得到一个实例对象child，那么
// // child.__proto__ === Child.prototype;
// // Child.prototype.__proto__ === Parent.prototype
// // 也就意味着在访问child对象的属性时，如果在child上找不到，就会去Child.prototype去找，如果还找不到，就会去Parent.prototype中去找，从而实现了继承。

// Child.prototype = new Parent()

// let child1 = new Child()
// child1.getName()
// // console.log('child1')


// 2. 构造函数实现

// function Parent(name) {
//     this.actions = ['eat', 'run'];
//     this.name = name
// }


// function Child(name, age) {
//     Parent.call(this, name)
//     this.age = age
// }

// let child1 = new Child('kif',12)
// let child2 = new Child('kif2',13)

// console.log('child1.name',child1.name)
// console.log('child1.age',child1.age)
// console.log('child1.actions',child1.actions)
// child1.actions.pop()
// console.log('child1.actions',child1.actions)
// console.log('child2.actions',child2.actions)


// class

class Father {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

let fa = new Father('kif', 12, 1)
console.log('fa.name', fa.name)

class Son extends Father {
    constructor(name, age, gender, height) {
        super(name, age, gender)
        this.height = height
    }
}

let s = new Son('kif1',12,0,'football')
console.log('s.name',s.name)
console.log('s.height',s.height)