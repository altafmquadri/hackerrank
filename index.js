
// const maxSubsetSum = (arr) => {
//     let max = -Infinity

//     const helper = (arr, len) => {
//         if (len < 0) return max
//         let sum = 0
//         let n = 2
//         for (let n = 2; n < arr.length; n++) {
//             let pointer = len
//             let temp = 0
//             while (pointer >= 0) {
//                 temp += arr[pointer]
//                 pointer -= n
//             }
//             sum = Math.max(sum, temp)
//         }
//         return max = Math.max(sum, helper(arr, len - 1))
//     }
//     return helper(arr, arr.length - 1)
// }

// const maxSubsetSum = (arr) => {
//     const newArr = new Array(arr.length).fill(-1)
//     console.log(newArr);
//     const helper = (arr, len, sum) => {
//         if (len < 0) return sum

//         if (newArr[len] !== -1) return newArr[len]

//         let sum1 = helper(arr, len - 1, sum)
//         let sum2 = helper(arr, len - 2, sum + arr[len])
//         return newArr[len] = Math.max(sum1, sum2)
//     }

//     return helper(arr, arr.length - 1, 0)
// }

const maxSubsetSum = (arr) => {
    let min = -Infinity
    let memo = new Array(arr.length).fill(min)
    const helper = (arr, idx) => {
        if (idx < 0) return min
        if (memo[idx] !== min) return memo[idx]
        let inc = helper(arr, idx - 2)
        let notInc = helper(arr, idx - 1)
        inc = inc == min ? arr[idx] : Math.max(arr[idx], arr[idx] + inc)
        memo[idx] = Math.max(inc, notInc)
        return memo[idx]
    }
    return helper(arr, arr.length - 1)
}

console.log(maxSubsetSum([3, 7, 4, 6, 5])) //13
console.log(maxSubsetSum([2, 1, 5, 8, 4])) //11
console.log(maxSubsetSum([3, 5, -7, 8, 10])) //15