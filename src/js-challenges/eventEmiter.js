class eventEmits{
    constructor(){
        this.callMap=new Map()
    }
    on(name,callback){
        // this.callMap.set(name,callback)
        let list =[]
        if(this.callMap.has(name)){
            list.push(...this.callMap.get(name))
        }
        list.push(callback)
        this.callMap.set(name,list)
    }
    off(name,callback){
        if(this.callMap.has(name)){
            let list = this.callMap.get(name)
            this.callMap.set(name, list.filter(item=>item!==callback))
        }
        else{
            throw new Error("this is  no callback named " +name)
        }
    }
    emit(name,...args){
        if(this.callMap.has(name)){
            let funList = this.callMap.get(name)
            funList.forEach(function(fun){
                fun(...args)
            })
        }else{
            throw new Error("this is  no callback named " +name)
        }
    }
}



const eventEmit = new eventEmits()

const fn1 = function(name){
    console.log(name+'fn1')
}
const fn2 = function(name){
    console.log(name+'fn2')
}
eventEmit.on('fn1',fn1)
eventEmit.on('fn1',fn2)


eventEmit.emit('fn1','kif')

// console.log(eventEmit)

