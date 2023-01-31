class objA {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class objB extends objA {
    constructor(id, name, age) {
        super(id, name);
        this.age = age
    }
}

let b = new objB(1, 'kif', 12);
console.log('b.name',b.name)