class Event {
    constructor() {
        this._cache = {}
    }
    on(type, callback) {
        let fns = (this._cache[type] = this._cache[type] || [])
        if (fns.indexOf(callback) === -1) {
            fns.push(callback)
        }
        return this
    }
    triger(type, data) {
        let fns = this._cache[type]
        fns.forEach((fn) => {
            fn(data)
        })
        return this
    }
}

const event = new Event()
event.on('test', function (data) {
    console.log('kif', data)
})
event.triger('test', 'shan')