/* Given an array of integers and a target sum, determine the sum nearest to but not 
exceeding the target that can be created. To create the sum, use any element of your 
array zero or more times.

For example, if arr = [2,3,4] and your target sum is 10, you might select [2,2,2,2,2],
[2,2,3,3] or [3,3,3,1]. In this case, you can arrive at exactly the target.

Function Description
Complete the unboundedKnapsack function in the editor below. It must return an integer 
that represents the sum nearest to without exceeding the target value.

unboundedKnapsack has the following parameter(s):
k: an integer
arr: an array of integers

Input Format
The first line contains an integer t, the number of test cases.
Each of the next  pairs of lines are as follows:
- The first line contains two integers n and k, the length of arr and the target sum.
- The second line contains n space separated integers arr[i].

Constraints
1 <= t <= 10
1 <= n,k,arr[i] <= 2000


Output Format
Print the maximum sum for each test case which is as near as possible, but not exceeding, 
to the target sum on a separate line.

Sample Input
2
3 12
1 6 9
5 9
3 4 4 4 8

Sample Output
12
9

Explanation
In the first test case, one can pick {6, 6}. In the second, we can pick {3,3,3}. */


//dynamic programming
const unboundedKnapsack = (k, arr) => {
    let len = arr.length
    const dp = Array.from(new Array(len + 1), () => Array(k + 1).fill(0))

    for (let i = 0; i < len + 1; i++) {
        dp[i][0] = 0
    }
    for (let j = 0; j < k + 1; j++) {
        dp[0][j] = 0
    }

    for (let i = 1; i < len + 1; i++) {
        for (let j = 1; j < k + 1; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = Math.max(arr[i - 1] + dp[i][j - arr[i - 1]], dp[i - 1][j])
            }
            else dp[i][j] = dp[i - 1][j]
        }
    }
    return dp[len][k]
}

console.log(unboundedKnapsack(12, [1, 6, 9])) //12
console.log(unboundedKnapsack(9, [3, 4, 4, 4, 8])) //9
console.log(unboundedKnapsack(13, [3, 7, 9, 11])) //13

//recursive
/* const unboundedKnapsack = (k, arr) => {
    let len = arr.length

    const recursion = (arr, k, n) => {
        if (n === 0 || k === 0) return 0
        if (arr[n - 1] <= k) {
            return Math.max(arr[n - 1] + recursion(arr, k - arr[n - 1], n),
                recursion(arr, k, n - 1))
        } else return recursion(arr, k, n - 1)
    }
    return recursion(arr, k, len)
} */

//memoized
/* const unboundedKnapsack = (k, arr) => {
    let len = arr.length
    const dp = Array.from(new Array(len + 1), () => Array(k + 1).fill(-1))

    const recursion = (arr, k, n) => {
        if (n === 0 || k === 0) return 0

        if (dp[n][k] !== -1) return dp[n][k]

        if (arr[n - 1] <= k) {
            return dp[n][k] = Math.max(arr[n - 1] + recursion(arr, k - arr[n - 1], n),
                recursion(arr, k, n - 1))
        } else return dp[n][k] = recursion(arr, k, n - 1)
    }
    return recursion(arr, k, len)
} */



/*
//on the site for test cases to pass the main function has to be modified
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);

    for (let i = 0; i < t; i++) {
        const nk = readLine().split(' ');
        const n = parseInt(nk[0], 10);
        const k = parseInt(nk[1], 10);
        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
        let result = unboundedKnapsack(k, arr);
        ws.write(result + "\n");
    }

    ws.end();
} */

