/* You are given a string containing characters A and B only. Your task is to 
change it into a string such that there are no matching adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.
For example, given the string s = AABAAB, remove an A at positions 0 and 3 
to make s = ABAB in 2 deletions.

Function Description
Complete the alternatingCharacters function in the editor below. 
It must return an integer representing the minimum number of deletions to make 
the alternating string.

alternatingCharacters has the following parameter(s):
s: a string

Input Format
The first line contains an integer q, the number of queries.
The next q lines each contain a string s.

Constraints
1 <= q <= 10
1 <= |s| <= 10^5
Each string s will consist only of characters A and B 

Output Format
For each query, print the minimum number of deletions required on a new line.

Sample Input
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample Output
3
4
0
0
4

Explanation
The characters in lowercase are the ones that can be deleted so that the string doesn't
have matching consecutive characters. 
Aaaa -> A (3 deletions)
Bbbbb -> B (4 deletions)
ABABABAB (0 deletions)
BABABA => (0 deletions)
AaaBbb => AB (4 deletions)
*/

const alternatingCharacters = s => {
    let count = 0

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) count++
    }
    return count
}

console.log(alternatingCharacters('AAAA')) //3
console.log(alternatingCharacters('BBBBB')) //4
console.log(alternatingCharacters('ABABABAB')) //0
console.log(alternatingCharacters('BABABA')) //0
console.log(alternatingCharacters('AAABBB')) //4


/* const alternatingCharacters = s => {
    let i = 0,
        j = 1,
        count = 0

    while (j < s.length) {
        if (s[i] === s[j]) {
            count++
            i++
            j++
        } else {
            i++
            j++
        }
    }
    return count
} */