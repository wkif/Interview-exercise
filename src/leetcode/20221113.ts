/*
 * @Author: kif kif101001000@163.com 
 * @Date: 2022-11-15 13:57:43 
 * @Last Modified by: kif kif101001000@163.com 
 * @Last Modified time: 2022-11-15 15:07:38
 */

// 791. 自定义字符串排序

export function customSortString(order: string, s: string): string {
    let resList = new Array(order.length).fill(null)
    let strList: Array<string> = s.split('')
    let list: Array<string> = [].concat(...strList)
    list.forEach(element => {
        let index: number = order.indexOf(element)
        if (index >= 0) {
            if(!resList[index]){
                resList[index] = element
                strList.splice(strList.indexOf(element), 1)
            }
        }
    });
    let list2: Array<string> = [].concat(...strList)
    list2.forEach(item=>{
        if(resList.indexOf(item)!==-1){
            resList.splice(resList.indexOf(item),0,item)
            strList.splice(strList.indexOf(item), 1)
        }
    })
    let res = resList.concat(...strList).join('')
    return res
};
