
const array2Tree = function (data) {
    const getChildrenTree = function (data, pid) {
        return data
            .filter(item => item.pid === pid)
            .map(item => ({ ...item, children: getChildrenTree(data, item.id) }))
    }
    let root = {}
    for (item of data) {
        console.log('item',item)
        if (item.pid == null) {

            root = { ...item, children: getChildrenTree(data, item.id) }
            break
        }
    }
    return root
}

let arr = [
    {
        id: 0,
        name: 'kif1',
        pid: null

    },
    {
        id: 1,
        name: 'kif2',
        pid: 0
    },
    {
        id: 2,
        name: 'kif3',
        pid: 0
    },
    {
        id: 3,
        name: 'kif4',
        pid: 2
    },
    {
        id: 4,
        name: 'kif5',
        pid: 1
    }
]


console.log('array2Tree(arr)', array2Tree(arr))