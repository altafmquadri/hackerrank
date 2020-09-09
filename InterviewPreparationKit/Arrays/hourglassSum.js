/* Given a 6 x 6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g
There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
The array will always be 6 x 6.

Example

arr = 
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

The 16 hourglass sums are:
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18

The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

0 4 3
  1
8 6 6

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description
Complete the function hourglassSum in the editor below.
hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns
int: the maximum hourglass sum

Input Format
Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

Constraints 
-9 <= arr[i][j] <= 9
0 <= i, j <= 5

Output Format
Print the largest (maximum) hourglass sum found in arr.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19
Explanation

 contains the following hourglasses:

image

The hourglass with the maximum sum () is:

2 4 4
  2
1 2 4 */

const hourglassSum = arr => {
    let gridSum
    let max = -63 //to handle the constraint that maximums could be negative or could set to Negative Infinity


    const getGridVal = (row, col) => {
        let right1 = col + 1
        let right2 = col + 2
        let middle = row + 1
        let bottom = row + 2

        gridSum = arr[row][col] +
            arr[row][right1] + arr[row][right2] +
            arr[middle][right1] + arr[bottom][col] +
            arr[bottom][right1] + arr[bottom][right2]
        max = Math.max(gridSum, max)
    }

    for (let row = 0; row < arr.length - 2; row++) {
        for (let col = 0; col < arr[0].length - 2; col++) {
            gridSum = getGridVal(row, col)
        }
    }
    return max
}

const arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]
const arr2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourglassSum(arr))
console.log(hourglassSum(arr2))