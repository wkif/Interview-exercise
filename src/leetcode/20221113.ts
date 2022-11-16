/*
 * @Author: kif kif101001000@163.com 
 * @Date: 2022-11-15 13:57:43 
 * @Last Modified by: kif kif101001000@163.com 
 * @Last Modified time: 2022-11-15 15:07:38
 */

// 791. 自定义字符串排序

export function customSortString(order: string, s: string): string {
    let resList = new Array(order.length).fill(null)
    let strList = s.split('')
    let list = [].concat(...strList)
    list.forEach(element => {
        console.log(element)
        let index:number = order.indexOf(element)
        console.log(index)
        if(index>=0){
            resList[index]= element
            strList.splice(strList.indexOf(element),1)
            console.log(strList)
        }
    });
    let res = resList.concat(...strList).join('')
    console.log('res',res)
    return res
};