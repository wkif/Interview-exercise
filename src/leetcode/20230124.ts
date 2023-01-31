// queries-on-number-of-points-inside-a-circle
// 给你一个数组 points ，其中 points[i] = [xi, yi] ，表示第 i 个点在二维平面上的坐标。多个点可能会有 相同 的坐标。

// 同时给你一个数组 queries ，其中 queries[j] = [xj, yj, rj] ，表示一个圆心在 (xj, yj) 且半径为 rj 的圆。

// 对于每一个查询 queries[j] ，计算在第 j 个圆 内 点的数目。如果一个点在圆的 边界上 ，我们同样认为它在圆 内 。

// 请你返回一个数组 answer ，其中 answer[j]是第 j 个查询的答案。

function countPoints(points: number[][], queries: number[][]): number[] {
  let ans:Array<number> = []
  queries.forEach(querie=>{
    let count =0;
    points.forEach(point=>{
      let li=((point[0]-querie[0])**2+(point[1]-querie[1])**2)
      // console.log('li',li,querie[2]**2)
      if(querie[2]**2>=li){
        count++
      }
    })
    ans.push(count)
  })
  return ans
};

const points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]

let ans:Array<number> = countPoints(points,queries)
console.log('ans',ans)