/* It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! 
There are a number of people queued up, and each person wears a sticker indicating 
their initial position in the queue. Initial positions increment by 1 from 1 at the 
front of the line to n at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. 
If two people swap positions, they still wear the same sticker denoting their original 
places in line. One person can bribe at most two others. 
For example, if n=8 and Person 5 bribes Person 4, the queue will look like this: 1,2,3,5,4,6,7,8.

Fascinated by this chaotic queue, you decide you must know the minimum number 
of bribes that took place to get the queue into its current state!

Function Description
Complete the function minimumBribes in the editor below. It must print an 
integer representing the minimum number of bribes necessary, or Too chaotic 
if the line configuration is not possible.

minimumBribes has the following parameter(s):
q: an array of integers

Input Format
The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in the queue
- The second line has n space-separated integers describing the final state of the queue.

Constraints
1 <= t <= 10
1 <= n <= 10^5

Subtasks
For 60% score 1 <= n <= 10^3
For 1000% score 1 <= n <= 10^5

Output Format
Print an integer denoting the minimum number of bribes needed to get the queue into its 
final state. Print Too chaotic if the state is invalid, i.e. it requires a person to 
have bribed more than 2 people.

Sample Input
2
5
2 1 5 3 4
5
2 5 1 3 4

Sample Output
3
Too chaotic

Explanation
Test Case 1

The initial state: 1 2 3 4 5

After person 5 moves one position ahead by bribing person 4: 1 2 3   5 4

Now person 5 moves another position ahead by bribing person 3:  1 2   5 3 4

And person 2 moves one position ahead by bribing person 1:   2 1   5 3 4

So the final state is 2,1,5,3,4 after three bribing operations.

Test Case 2

No person can bribe more than two people, so its not possible to achieve the input state. */

//alternate way of swap function and boundary checking added
const minimumBribes = q => {
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

    let swapCount = 0

    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] !== i + 1) {
            if (i - 2 >= 0 && q[i - 2] === i + 1) {
                swap(q, i - 2, i - 1)
                swap(q, i - 1, i)
                swapCount += 2
            }
            else if (i - 1 >= 0 && q[i - 1] === i + 1) {
                swap(q, i - 1, i)
                swapCount++
            }
            else return console.log('Too chaotic')
        }
    }
    return console.log(swapCount)
}




minimumBribes([2, 1, 5, 3, 4]) //3
minimumBribes([2, 5, 1, 3, 4]) // Too chaotic
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]) //4
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]) // Too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]) // 7  but I am getting 5


// const minimumBribes = q => {
//     const sortedArr = [...q].sort((a, b) => a - b)
//     let min = Infinity, count = 0, val

//     for (let i = q.length - 1; i >= 0; i--) {
//         min = Math.min(q[i], min)
//         if (min < q[i - 1]) {
//             count++
//         }
//         val = Math.abs(q[i] - sortedArr[i])
//         if (val > 2) return 'Too chaotic'
//     }
//     return count
// }


// const minimumBribes = q => {

//     let count = 0

//     const swap = (arr, i, j) => {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }

//     for (let i = q.length - 1; i >= 0; i--) {
//         if (q[i] !== i + 1 && q[i] < q[i - 1]) {
//             swap(q, i, i - 1)
//             count++
//         }
//         else if (q[i] !== i + 1 && q[i] > q[i - 1] && q[i] < q[i - 2]) {
//             swap(q, i, i - 2)
//             count++
//         }
//         else if (q[i] !== i + 1) return console.log('Too chaotic')
//     }
//     return console.log(count)
// }

// not mine haven't tested
// const minimumBribes = q => {
//     let ans = 0;
//     for (let i = q.length - 1; i >= 0; i--) {
//         if (q[i] - (i + 1) > 2) {
//             return "Too chaotic"
//         }
//         for (let j = Math.max(0, q[i] - 2); j < i; j++)
//             if (q[j] > q[i]) ans++;
//     }
//     return ans
// }

// const minimumBribes = q => {

//     let count = 0

//     const swap = (arr, i, j) => {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }

//     for (let i = q.length - 1; i >= 0; i--) {
//         if (q[i] !== i + 1) {
//             if (q[i - 1] === i + 1) {
//                 swap(q, i - 1, i)
//                 count++
//             }
//             else if (q[i - 2] === i + 1) {
//                 swap(q, i - 2, i - 1)
//                 swap(q, i - 1, i)
//                 count += 2
//             }
//             else return console.log('Too chaotic')
//         }
//     }
//     return console.log(count)
// }