/* cSpell:disable

A string is said to be a child of a another string if it can be formed by deleting
0 or more characters from the other string. Given two strings of equal length,
what's the longest string that can be constructed such that it is a child of both?

For example, ABCD and ABDC have two children with maximum length 3, ABC and ABD. They can
be formed by eliminating either the D or C from both strings. Note that we will not consider
ABCD as a common child because we can't rearrange characters and ABCD != ABDC.

Function Description
Complete the commonChild function in the editor below. It should return the longest string
which is a common child of the input strings.

commonChild has the following parameter(s):
s1, s2: two equal length strings

Input Format
There is one line with two space-separated strings, s1 and s2.

Constraints
1 <= |s1|, |s2| <= 5000
All characters are upper case in the range ascii[A-Z].

Output Format
Print the length of the longest string s, such that s is a child of both s1 and s2.

Sample Input
HARRY
SALLY

Sample Output
2

Explanation
The longest string that can be formed by deleting zero or more characters from HARRY and SALLY is AY, whose length is 2.

Sample Input 1
AA
BB

Sample Output 1
0

Explanation 1

AA and BB have no characters in common and hence the output is 0.

Sample Input 2
SHINCHAN
NOHARAAA

Sample Output 2
3

Explanation 2
The longest string that can be formed between SHINCAN and NOHARAAA while maintaining the order is NHA.

Sample Input 3
ABCDEF
FBDAMN

Sample Output 3
2

Explanation 3
BD is the longest child of the given strings. 

cSpell:enable
 */

const commonChild = (s1, s2) => {
    //to account for extra zeros that represent if no string then 0 is the substring available
    let rows = s1.length + 1
    let cols = s2.length + 1
    const matrix = Array.from(new Array(rows), () => Array(cols).fill(0))

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            //if letter values not equal take the max of top and left matrix values
            if (s1[row - 1] !== s2[col - 1]) {
                matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col - 1])
            }
            //else take the left diagonal and add one to it
            else {
                matrix[row][col] = matrix[row - 1][col - 1] + 1
            }
        }
    }
    console.log(matrix);
    //last row and last column has the value we need, so take the matrix's last value
    return matrix[rows - 1][cols - 1]
}

// //cSpell:disable
console.log(commonChild('SHINCHAN', 'NOHARAAA')) //3
console.log(commonChild('AA', 'BB')) //0
console.log(commonChild('HARRY', 'SALLY')) //2
console.log(commonChild('ABCDEF', 'FBDAMN')) //2









// const commonChild = (s1, s2) => {
//     const dp = [];
//     let m = s1.length;
//     let n = s2.length;

//     for (let i = 0; i <= m; i++) {
//         dp[i] = new Array(n + 1).fill(0);
//     }

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             // two  possible scenarios:
//             // 1. the current char of text1 and text2 does not match
//             // 2. the current char of text1 and text2 matches

//             if (s1[i - 1] !== s2[j - 1]) {
//                 // check left and top for longer subsequence length
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//             else {
//                 // check diag for prev longest subsequence length and add 1
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//             }
//         }
//     }
//     console.log(dp);
//     return dp[m][n];
// }














// const commonChild = (s1, s2) => {
//     const arr1 = [...s1].filter(letter => s2.includes(letter))
//     const arr2 = [...s2].filter(letter => s1.includes(letter))

//     console.log(arr1.join(''));
//     console.log(arr2.join(''));

//     const lcsMemo = (s1, s2) => {
//         let i = s1.length - 1, j = s2.length - 1
//         const memo = []
//         let size = s1.length <= s2.length ? s1.length : s2.length

//         for (let i = 0; i < size; i++) {
//             memo.push([])
//         }
//         // console.log({ size })
//         // console.log({ memo });

//         const helper = (s1, s2, i, j) => {
//             let finalResult
//             if (memo[i][j] !== undefined) return memo[i][j]

//             if (i === 0 || j === 0) finalResult = 0

//             else if (s1[i - 1] === s2[j - 1]) {
//                 finalResult = 1 + helper(s1, s2, i - 1, j - 1)
//             }

//             else {
//                 finalResult = Math.max(helper(s1, s2, i - 1, j), helper(s1, s2, i, j - 1))
//             }
//             memo[i][j] = finalResult
//             return finalResult
//         }
//         console.log(memo);
//         return helper(s1, s2, i, j)
//     }
//     return lcsMemo(arr1, arr2)
// }


// const commonChild = (s1, s2) => {
//     const arr1 = [],
//         arr2 = []


//     for (let [i, letter] of [...s1].entries()) {
//         let index = s2.indexOf(letter)
//         if (index > -1) {
//             arr1.push(letter)
//         }
//     }
//     for (let [i, letter] of [...s2].entries()) {
//         let index = s1.indexOf(letter)
//         if (index > -1) {
//             arr2.push(letter)
//         }
//     }

//     console.log(arr1.join(''));
//     console.log(arr2.join(''));

//     const lcsMemo = (s1, s2) => {
//         let i = 0, j = 0
//         const memo = Array.from(new Array(s1.length), () => Array(s2.length).fill(''))

//         const helper = (s1, s2, i, j, memo) => {
//             if (i === s1.length || j === s2.length) return 0

//             if (memo[i][j]) return memo[i][j]

//             if (s1[i] === s2[j]) {
//                 return 1 + helper(s1, s2, i + 1, j + 1, memo)
//             }

//             else {
//                 return memo[i][j] = Math.max(helper(s1, s2, i + 1, j, memo), helper(s1, s2, i, j + 1, memo))
//             }
//         }
//         return helper(s1, s2, i, j, memo)
//     }

//     return lcsMemo(arr1.join(''), arr2.join(''))
// }


// const commonChild = (s1, s2) => {
//     const arr1 = [...s1].filter(letter => s2.includes(letter))
//     const arr2 = [...s2].filter(letter => s1.includes(letter))

//     console.log(arr1.join(''));
//     console.log(arr2.join(''));

//     var dpArr = [];
//     var size;
//     arr1.length <= arr2.length ? size = arr1.length : size = arr2.length;

//     for (var i = 0; i < size; i++) {
//         dpArr.push([]);
//     }
//     console.log(dpArr);

//     function LCS_DP(S1, m, S2, n) {
//         var finalResult;
//         //check to see if the result is already stored in the array. if it is return that instead
//         if (dpArr[m][n]) {
//             return dpArr[m][n];
//         }
//         //define base case. if the length of either strings are zero, 
//         //then no need to continue return 0
//         if (m === 0 || n === 0) {
//             finalResult = 0;
//         } else if (S1[m - 1] === S2[n - 1]) { //if the last characters are the same
//             finalResult = 1 + LCS_DP(S1, m - 1, S2, n - 1);
//         } else {
//             var excludeLastOfS1 = LCS_DP(S1, m - 1, S2, n),
//                 excludeLastOfS2 = LCS_DP(S1, m, S2, n - 1);

//             finalResult = Math.max(excludeLastOfS1, excludeLastOfS2);
//         }
//         dpArr[m][n] = finalResult;
//         //return the final result
//         return finalResult;
//     }


//     return LCS_DP(arr1, arr1.length - 1, arr2, arr2.length - 1)
// }


// const commonChild = (s1, s2) => {
//     const arr1 = [...s1].filter(letter => s2.includes(letter))
//     const arr2 = [...s2].filter(letter => s1.includes(letter))
//     let i = arr1.length - 1, j = arr2.length - 1
//     const memo = new Map()

//     const lcsMemo = (s1, s2, i, j, memo) => {
//         if (i <= 0 || j <= 0) return 0
//         const key = i + '#' + j
//         if (memo.has(key)) return memo.get(key)

//         let result

//         if (s1[i - 1] === s2[j - 1]) {
//             result = 1 + lcsMemo(s1, s2, i - 1, j - 1, memo)
//         }

//         else {
//             result = Math.max(lcsMemo(s1, s2, i - 1, j, memo), lcsMemo(s1, s2, i, j - 1, memo))
//         }
//         memo.set(key, result)
//         return result
//     }
//     return lcsMemo(arr1.join(''), arr2.join(''), i, j, memo)
// }

// const commonChild = (s1, s2) => {
//     let i = s1.length - 1, j = s2.length - 1
//     const memo = Array.from(new Array(s1.length+1), () => Array(s2.length+1).fill(''))
//     console.log(memo);


//     const helper = (s1, s2, i, j, memo) => {
//         if (i <= 0 || j <= 0) return 0

//         if (memo[i][j]) return memo[i][j]

//         if (s1[i] === s2[j]) {
//             return 1 + helper(s1, s2, i - 1, j - 1, memo)
//         }

//         else {
//             return memo[i][j] = Math.max(helper(s1, s2, i - 1, j, memo), helper(s1, s2, i, j - 1, memo))
//         }
//     }
//     return helper(s1, s2, i, j, memo)
// }


//cSpell:enable