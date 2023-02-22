const sum = function(num,total=0){
    return num === 0 ? total : sum(num-1,total+num)
}
console.log(sum(10))
