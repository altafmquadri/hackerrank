/* Given two strings, determine if they share a common substring. A substring may be as small as one character.
For example, the words "a", "and", "art" share the common substring a. The words "be" and "cat" do not share a substring.

Function Description
Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the 
strings share a common substring.

twoStrings has the following parameter(s):
s1, s2: two strings to analyze.

Input Format
The first line contains a single integer p, the number of test cases.
The following p pairs of lines are as follows:

The first line contains string s1.
The second line contains string s2.

Constraints
1 <= p <= 10
1 <= |s1|, |s2| <= 10^5
s1 and s2 consist of characters in the range ascii[a-z].

Output Format
For each pair of strings, return YES or NO.

Sample Input
2
hello
world
hi
world

Sample Output
YES
NO

Explanation
We have p=2 pairs to check:

s1 = 'hello', s2 = 'world'. The substrings 'o' and 'l' are common to both strings.
a = 'hi', b = 'world'. s1 and s2 share no common substrings. */


const twoString = (s1, s2) => {
    const strHash = {}
    s1.split('').forEach(letter => strHash[letter] = (strHash[letter] || 0) + 1)

    for (let letter of s2) {
        if (strHash[letter]) {
            return console.log('YES')
        }
    }
    return console.log("NO");
}

twoString('hello', 'world')
twoString('hi', 'world')