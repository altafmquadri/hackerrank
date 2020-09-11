/* You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] 
without any duplicates. You are allowed to swap any two elements. You need to find 
the minimum number of swaps required to sort the array in ascending order.

For example, given the array arr = [7,1,3,2,4,5,6] we perform the following steps:

i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]

It took 5 swaps to sort the array.

Function Description
Complete the function minimumSwaps in the editor below. It must return an integer representing 
the minimum number of swaps to sort the array.

minimumSwaps has the following parameter(s):
arr: an unordered array of integers

Input Format
The first line contains an integer, n, the size of arr.
The second line contains n space-separated integers arr[i].

Constraints
1 <= n <= 10^5
1 <= arr[i] <= n

Output Format
Return the minimum number of swaps to sort the given array.

Sample Input 0
4
4 3 1 2

Sample Output 0
3

Explanation 0

Given array arr: [4,3,1,2]
After swapping (0,2) we get arr: [1,3,4,2] 
After swapping (1,2) we get arr: [1,4,3,2] 
After swapping (1,3) we get arr: [1,2,3,4] 

So, we need a minimum of 3 swaps to sort the array in ascending order.

Sample Input 1
5
2 3 4 1 5

Sample Output 1
3

Explanation 1

Given array arr: [2,3,4,1,5]
After swapping (2,3) we get arr: [2,3,1,4,5] 
After swapping (0,1) we get arr: [3,2,1,4,5] 
After swapping (0,2) we get arr: [1,2,3,4,5]
So, we need a minimum of 3 swaps to sort the array in ascending order.

Sample Input 2

7
1 3 5 2 4 6 7
Sample Output 2

3
Explanation 2

Given array arr: [1,3,5,2,4,6,7]
After swapping (1,3) we get arr: [1,2,5,3,4,6,7] 
After swapping (2,3) we get arr: [1,2,3,5,4,6,7] 
After swapping (3,4) we get arr: [1,2,3,4,5,6,7]
So, we need a minimum of 3 swaps to sort the array in ascending order. 

https://youtu.be/JrzIgYS3SqM*/

/* Let's draw out an array with the indices in the top left corner
whatever value is in the element subtract by one, since this is the index it belongs to
go to that index and see what value is in there and repeat until the last box points back to
the first box, that indicates your first cycle, the length of the cycle is how many boxes passed
from the first box to the box that points back at it.  Take this length subtract one because swap 
will be the length - 1.  Add this to swaps iteratively for each cycle, and at the end return swaps.
*/
const minimumSwaps = arr => {
    let swaps = 0, currentIndex, valueBelongsAtIndex, cycleLength
    const visited = {}

    for (let i = 0; i < arr.length; i++) {
        visited[i] = false
    }

    for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
            visited[i] = true
            currentIndex = i
            valueBelongsAtIndex = arr[i] - 1
            cycleLength = 1

            while (valueBelongsAtIndex !== i) {
                visited[valueBelongsAtIndex] = true
                currentIndex = valueBelongsAtIndex
                valueBelongsAtIndex = arr[currentIndex] - 1
                cycleLength++
            }
            swaps += (cycleLength - 1)
        }
    }
    return swaps
}

console.log(minimumSwaps([4, 3, 1, 2])) //3
console.log(minimumSwaps([2, 3, 4, 1, 5])) //3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])) //3
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])) //5