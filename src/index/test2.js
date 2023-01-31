let n = 5
let m = 6
let k = 3
let pointList_1 = [1, 1, 2, 3, 3, 4]
let pointList_2 = [2, 5, 3, 4, 5, 5]
let worthList = [1, 3, 1, 2, 1, 1]

const getMinX = function (n, m, k, pointList_1, pointList_2, worthList) {
    let Waylength = 0
    let worth = 0
    let point=1
    let wayIndexList=[]
    while(Waylength<=k){
        wayIndexList.push(...getIndex(point))
        wayIndexList.forEach(item=>{
            
        })
    }

}
const getIndex = function (num1, num2, value) {
    let list = []
    for (let i = 0; i < num1; i++) {
        if (num1[i] = value) {
            list.push(i)
        }
    }
    for (let i = 0; i < num2; i++) {
        if (num2[i] = value) {
            list.push(i)
        }
    }
    return list
}