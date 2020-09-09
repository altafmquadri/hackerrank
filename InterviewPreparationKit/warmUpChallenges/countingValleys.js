/* Counting Valleys
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like
topography. During his last hike, he took exactly n steps. For every step he took, he noted if it was an uphill, U
or a downhill D step. Gary's hikes start and end at sea level. We define the following terms:

A mountain is a non-empty sequence of consecutive steps above sea level, starting with a step up from
sea level and ending with a step down to sea level.

A valley is a non-empty sequence of consecutive steps below sea level, starting with a step down from
sea level and ending with a step up to sea level.

Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he
walked through.

For example, if Gary's path is s=[DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out an up onto a mountain
units 2 units high. Finally, he returns to sea level and ends his hike.

Function Description
Complete the countingValleys function in the editor below. It must return an integer that
denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path

Input Format
The first line contains an integer, n, denoting the number of steps in Gary's hike.
The second line contains a single string s of n characters. Each character is (where U indicates a
step up and D indicates a step down), and the character in the string describes Gary's step during the
hike.

Output Format
Print a single integer denoting the number of valleys Gary walked through during his hike.
Sample Input
8
UDDDUDUU
Sample Output
1

Explanation
If we represent _ as sea level, a step up as / , and a step down as \ , Gary's hike can be drawn as:
_/\      _
   \    /
    \/\/
It's clear that there is only one valley there, so we print on a new line. */

const countingValleys = (n, s) => {
    //assign a value to each letter
    const arr = [...s].map(letter => letter === 'U' ? 1 : -1)
    let count = 0, sum = 0
    //create a running total of all the ups and downs 
    const sumArray = []
    for (let num of arr) {
        sumArray.push(sum += num)
    }
    //in the running total check to see if there is a point where zero is reached
    //if it is check the position right before to see that it is an upward movement, if so count it as a valley
    for (let [i, num] of sumArray.entries()) {
        if (num === 0 && sumArray[i - 1] === -1) {
            count++
        }
    }
    return count
}

console.log(countingValleys(8, 'UDDDUDUU'));