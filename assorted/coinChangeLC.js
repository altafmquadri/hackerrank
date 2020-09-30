/* You are given coins of different denominations and a total amount of 
money amount. Write a function to compute the fewest number of coins that 
you need to make up that amount. If that amount of money cannot be made up
by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2

Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 231 - 1 */

const coinChange = (coins, amount) => {
    if (amount === 0 || !coins.length) return 0
    //setup 1d Array
    const dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    //iterate j directly at the coin, and take min of c.v or 1 + pointer ref
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]])
        }
    }
    //initiated value to amount + 1, if it doesn't change then no solution exists
    return dp[amount] === amount + 1 ? -1 : dp[amount]
}

console.log(coinChange([1, 5, 6, 9], 10)) //2
console.log(coinChange([1, 2, 5], 11)) //3
console.log(coinChange([2], 3)) //-1
console.log(coinChange([1], 0)) //0
console.log(coinChange([1], 1)) //1
console.log(coinChange([1], 2)) //2
console.log(coinChange([2, 5, 10, 1], 27)) //4
console.log(coinChange([186, 419, 83, 408], 6249)) //20


// const coinChange = (coins, amount) => {
//     if (amount === 0) return 0
//     coins.sort((a, b) => a - b)
//     const m = coins.length
//     const matrix = Array.from(new Array(coins.length), () => Array(amount + 1).fill(0))

//     for (let j = 0; j <= amount; j++) {
//         if (coins[0] > j) matrix[0][j] = 0
//         else if (j % coins[0] === 0) {
//             matrix[0][j] = 1 + matrix[0][j - coins[0]]
//         }
//     }

//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j <= amount; j++) {
//             if (coins[i] > j) matrix[i][j] = matrix[i - 1][j]
//             else {
//                 matrix[i][j] = Math.min(matrix[i - 1][j], 1 + (matrix[i][j - coins[i]]))
//             }
//         }
//     }
//     console.log(matrix);
//     return matrix[m - 1][amount] ? matrix[m - 1][amount] : -1
// }