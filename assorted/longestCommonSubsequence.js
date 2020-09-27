/* Given two strings s1 and s2, find the length of the longest common subsequence

Input
s1 = ACEDBFD
s2 = AECDF

Output
4

Explanation
4  ACDF is the common string therefore length is 4

https://youtu.be/DuikFLPt8WQ
*/


const lcsDP = (s1, s2) => {
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


const lcsMemo = (s1, s2) => {
    let i = 0, j = 0
    const memo = Array.from(new Array(s1.length), () => Array(s2.length).fill(''))
    console.log(memo);


    const helper = (s1, s2, i, j, memo) => {
        if (i === s1.length || j === s2.length) return 0

        if (memo[i][j]) return memo[i][j]

        if (s1[i] === s2[j]) {
            return 1 + helper(s1, s2, i + 1, j + 1, memo)
        }

        else {
            return memo[i][j] = Math.max(helper(s1, s2, i + 1, j, memo), helper(s1, s2, i, j + 1, memo))
        }
    }
    return helper(s1, s2, i, j, memo)
}


const lcsRecursion = (s1, s2) => {
    let i = 0, j = 0

    const helper = (s1, s2, i, j) => {
        if (i === s1.length || j === s2.length) return 0

        if (s1[i] === s2[j]) {
            return 1 + helper(s1, s2, i + 1, j + 1)
        }
        else return Math.max(helper(s1, s2, i + 1, j), helper(s1, s2, i, j + 1))
    }
    return helper(s1, s2, i, j)
}


//cSpell:disable
// console.log(lcsRecursion('ACEDBFD', 'AECDF')) //4  ACDF therefore length is 4
// console.log(lcsRecursion('ABDF', 'FBDA')) //2

// console.log(lcsMemo('ACEDBFD', 'AECDF')) //4  ACDF therefore length is 4
// console.log(lcsMemo('ABDF', 'FBDA')) //2
// console.log(lcsMemo('AY', 'AY')) //2
console.log(lcsMemo('SHINCHAN', 'NOHARAAA')) //2

//cSpell:enable