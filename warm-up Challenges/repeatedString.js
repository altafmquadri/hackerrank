/* 
Lilah has a string, s, of lowercase English letters that she 
repeated infinitely many times.Given an integer, n, find and 
print the number of letter a's in the first n letters of Lilah's infinite string.

For example, if the string s='abcac' and n = 10, the substring we consider is abcacabcac, 
the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description
Complete the repeatedString function in the editor below. It should return an integer representing 
the number of occurrences of a in the prefix of length n in the infinitely repeating string.

repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider

Input Format
The first line contains a single string, s.
The second line contains an integer, n.


Output Format
Print a single integer denoting the number of letter a's in the first n letters of the infinite string 
created by repeating s infinitely many times.

Sample Input 0
aba
10

Sample Output 0
7

Explanation 0
The first n=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we print 7 on a new line.

Sample Input 1
a
1000000000000

Sample Output 1
1000000000000

Explanation 1
Because all of the first n = 1000000000000 letters of the infinite string are a, we print 1000000000000 on a new line. */


const repeatedString = (s, n) => {
    let total = 0
    let found = 0
    let repeatsOfS = Math.floor(n / s.length)
    let remainder = n % s.length
    
    for (let letter of s) {
        if (letter === 'a') found++
    }
    
    total = found * repeatsOfS
    if (remainder === 0) return total
    
    let part = s.substring(0, remainder)
    for (let letter of part) {
        if (letter === 'a') total++
    }
    return total
}

/* const repeatedString = (s, n) => {
    let total = 0
    let found = 0
    //calculate how many times the string repeats by dividing from the length of string rounded down to whole number
    //'abaabaaba'
    let repeatsOfS = Math.floor(n / s.length)
    //find out what's left over
    let remainder = n % s.length
    //search for a's in the string
    // 2 a's in the string
    for (let letter of s) {
        if (letter === 'a') found++
    }
    //number of a's found times how many times the string repeats
    // 2 a's * 3 repeats = 6 a's in the string
    total = found * repeatsOfS
    if (remainder === 0) return total
    // if there is a remainder find out what that part of string is
    // another a is missing from 'abaabaaba' which is 9, add a to complete pattern 'abaabaabaa'
    let part = s.substring(0, remainder)
    //count the a's in that part
    for (let letter of part) {
        if (letter === 'a') total++
    }
    //return 7 a's as the answer
    return total
} */

console.log(repeatedString('aba', 10)) //7
console.log(repeatedString('a', 1000000000000)) //1000000000000