/* Starting with a 1-indexed array of zeros and a list of operations, for each operation add 
a value to each of the array element between two given indices, inclusive. Once all operations 
have been performed, return the maximum value in the array.

Example
Queries are interpreted as follows:
    a b k
    1 5 3
    4 8 7
    6 9 1

Add the values of  between the indices  and  inclusive:

index->	 1 2 3  4  5 6 7 8 9 10
    [0,0,0, 0, 0,0,0,0,0, 0]
    [3,3,3, 3, 3,0,0,0,0, 0]
    [3,3,3,10,10,7,7,7,0, 0]
    [3,3,3,10,10,8,8,8,1, 0]
The largest value is  after all operations are performed.

Function Description
Complete the function arrayManipulation in the editor below.
arrayManipulation has the following parameters:

int n - the number of elements in the array
int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
Returns

int - the maximum value in the resultant array
Input Format

The first line contains two space-separated integers  and , the size of the array and the number of operations.
Each of the next  lines contains three space-separated integers ,  and , the left index, right index and summand.

Constraints

Sample Input

5 3
1 2 100
2 5 100
3 4 100
Sample Output

200
Explanation

After the first update the list is 100 100 0 0 0.
After the second update list is 100 200 100 100 100.
After the third update list is 100 200 200 200 100.

The maximum value is 200. */

/* 
Brute force

const arrayManipulation = (n, queries) => {
    //create the arr
    let rows = queries.length
    let cols = n
    let currentRow, leftIndex, rightIndex, summand, fillIndex
    let sum = 0, max = 0
    const arr = Array.from(new Array(rows), () => Array(cols).fill(0))

    //fill in the array values with range (leftIndex to rightIndex) with the summand
    for (let row = 0; row < rows; row++) {
        currentRow = []
        for (let col = 0; col < cols; col++) {
            currentRow.push(queries[row][col])
        }

        leftIndex = currentRow[0] - 1
        rightIndex = currentRow[1]
        summand = currentRow[2]
        fillIndex = leftIndex

        while (fillIndex < rightIndex) {
            arr[row][fillIndex] += summand
            fillIndex++
        }
    }

    for (let col = 0; col < cols; col++) {
        let i = 0

        while (i < rows) {
            sum += arr[i][col]
            i++
        }
        max = Math.max(sum, max)
        sum = 0
    }
    return max
} 


//Shortened brute force

const arrayManipulation = (n, queries) => {
    let cols = n
    let qRow, leftIndex, rightIndex, summand
    let sum = max = 0
    let arr = Array.from(new Array(queries.length), () => Array(cols).fill(0))

    for (let row = 0; row < queries.length; row++) {
        qRow = queries[row]
        leftIndex = qRow[0] - 1
        rightIndex = qRow[1]
        summand = qRow[2]

        while (leftIndex < rightIndex) {
            arr[row][leftIndex] += summand
            leftIndex++
        }
    }

    for (let col = 0; col < cols; col++) {
        let row = 0
        sum = 0
        while (row < queries.length) {
            sum += arr[row][col]
            max = Math.max(sum, max)
            row++
        }
    }
    console.log(arr);
    return max
}
*/


/* 
Brute force refactored with 1D array and less space complexity

const arrayManipulation = (n, queries) => {
    //create the arr
    let cols = n
    const arr = new Array(cols).fill(0)
    let qRow, leftIndex, rightIndex, summand, max

    //fill in the array values with range (leftIndex to rightIndex) with the summand
    for (let query of queries) {
        qRow = query
        leftIndex = qRow[0] - 1
        rightIndex = qRow[1]
        summand = qRow[2]

        while (leftIndex < rightIndex) {
            arr[leftIndex] += summand
            leftIndex++
        }
    }
    max = Math.max(...arr)
    return max
} */


//optimal solution O(m + n)
const arrayManipulation = (n, queries) => {
    const cols = n
    const arr = new Array(n).fill(0)
    let qRow, leftIndex, rightIndex, summand

    for (const query of queries) {
        qRow = query
        leftIndex = qRow[0] - 1
        rightIndex = qRow[1]
        summand = qRow[2]
        arr[leftIndex] += summand
        if (rightIndex < arr.length) arr[rightIndex] -= summand
    }
    let sum = 0, max = 0

    for (let [i, val] of arr.entries()) {
        sum += val
        max = Math.max(sum, max)
    }
    return max
}

console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])) //200
console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]])) //10
console.log(arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]])) //31