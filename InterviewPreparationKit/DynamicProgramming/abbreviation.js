/* You can perform the following operations on the string, a:

1. Capitalize zero or more of a's lowercase letters.
2. Delete all of the remaining lowercase letters in a.

Given two strings, a and b, determine if it's possible to make a equal to b  
as described. If so, print YES on a new line. Otherwise, print NO.

For example, given a = AbcDE and b = ABDE, in a we can convert b and delete c to match b. 
If a = AbcDE and b = AFDE, matching is not possible because letters may only be capitalized 
or discarded, not changed.

Function Description
Complete the function abbreviation in the editor below. It must return either YES or NO.

abbreviation has the following parameter(s):
a: the string to modify
b: the string to match

Input Format
The first line contains a single integer q, the number of queries.
Each of the next q pairs of lines is as follows:
- The first line of each query contains a single string, a.
- The second line of each query contains a single string, b.

Constraints
1 <= q <= 10
1 <= |a|, |b| <= 1000
String a consists only of uppercase and lowercase English letters, ascii[A-Za-z].
String b consists only of uppercase English letters, ascii[A-Z].

Output Format
For each query, print YES on a new line if it's possible to make string a equal to string b. 
Otherwise, print NO.

Sample Input
1
daBcd
ABC

Sample Output
YES

Explanation
d ABC d
We have a = daBcd and b = ABC. We perform the following operation:
1. Capitalize the letters a and c in a so that a = dABCd.
2. Delete all the remaining lowercase letters in a so that a = ABC.
Because we were able to successfully convert a to b, we print YES on a new line. */


const abbreviation = (a, b) => {
    //create the matrix with one greater than length
    const rows = a.length + 1
    const cols = b.length + 1
    const matrix = Array.from(new Array(rows), () => Array(cols).fill(0))

    //set matrix[0][0] = 1 to set abbreviation as empty for no string
    matrix[0][0] = 1

    //iterate only through strings' length we want our output to be from 
    //our conditional checks which would change the value diagonally of our last item
    // to give us our result
    for (let row = 0; row < a.length; row++) {
        //cols is used rather than b's length to be able to update diagonal
        for (let col = 0; col < cols; col++) {
            //check conditions, if 0 just go to next 
            if (matrix[row][col] === 0) continue
            // check if letter in a === b
            if (col < b.length && a[row].toUpperCase() === b[col]) {
                matrix[row + 1][col + 1] = 1
            }
            if (a[row] !== a[row].toUpperCase()) {
                matrix[row + 1][col] = 1
            }
        }
    }
    console.log(matrix);
    return matrix[rows - 1][cols - 1] ? 'YES' : 'NO'
}

console.log(abbreviation('daBcd', 'ABC')) //YES
console.log(abbreviation("KXzQ", "K")) //NO
console.log(abbreviation("abaaA", "AA")) //YES



/* Original solution, not passing
const abbreviation = (a, b) => {

    const bHash = {}
    b.split('').forEach(letter => bHash[letter] = (bHash[letter] || 0) + 1)

    const arr = [...a].filter(letter => {
        return (
            letter.toUpperCase() in bHash ||
            letter.toUpperCase() === letter
        )
    })
    console.log(arr);
    return arr.join('').toUpperCase() === b ? 'YES' : 'NO'
}
 */

/* Make a two dimensional boolean array with dimensions as length of both the strings such as
new boolean[a.length()+1][[b.length()+1].
Now build the dp matrix by covering base cases first.
1. If a is empty and b is not empty store false
2. If both the strings are empty store true
3. If b is empty and a has all the characters in lowercase, store true
4. Iterate over each character of a and b -
(i). If character in a is uppercase and it is equal to character in b - store true if string can
    be formed up to last characters in both strings, i.e. dp[i-1][j-1] is true, otherwise store false
(ii). If character in a is lowercase - check if it can be made equal to character in b by changing to uppercase:
If yes then store true if we can make the string b by including this or excluding this
If no then store true if we can make the string b by excluding this character
5. Return dp[a.length()][b.length()] */

/* This can be solved through a slight modification of LCS(longest common subsequence).
The columns are characters of string 2 (all caps string), rows are characters from string 1
(which can have both caps and non-caps). There are 2 modifications needed when using
LCS - * You need to modify the way counts are updated when counts are updated for a capital character.
The idea is that a capital character always does need to be a match. If a mismatch is found for a
capital character, you need to update the count to the previous column in the same row and not consider
the max of previous row or column. * You need to modify the way counts corresponding to small letters are
updated. Because you would have skipped updating some counts in the middle because of 1., you need to check
for a match and update the count to the max of previous row, previous column OR diagonal. i.e. if there is a
match to a small letter in String 1, either it can be matched to something or can be removed.

The best example to understand the above rule is String 1= "AbCBD" & String 2 = "ABCD".
If you run the above algorithm you will get a "NO" (which is what is expected). If you just run LCS, you will get a "YES".

For example - String 1 = "AbCBD" & String 2 = "ABCD" If you just perform a LCS algorithm on the above 2, you will get a hit.
However, when you are updating the counts for 'B */


/*
The key observations are:

we can filter out "bad" inputs first in O(max(m,n)) time - we count the capitals in A
and check if they are greater in number than in B. If there are so, then we return
instantly "NO" for those cases.

Now the DP part:

1 we make boolean[][] dp array: B x A, so B input makes columns, and A input makes rows
2 we initialize the first row (base cases) to true, since this means "empty" to be matched.
We can always match something which is empty. Other dp array cells have 'false'
3 if capital letter in A matches B, then we know that we ‘consume’ this solution, so we use: dp[i-1][j-1]
4 if capital letter in A is different than in B, then we mark it as false, so we do: dp[i][j] = false
5 if lowercase letter in A matches B only when 'a' is capitalized, we have 2 paths:
6 either we promoted the letter to uppercase and consumed it - this means dp[i-1][j-1]
7 or we skip the letter (delete it, because we can) - this means dp[i][j-1]
    a so we do: dp[i][j] = dp[i][j-1] || dp[i-1][j-1]
    b in any other case (which is lowercase 'a' does not match B when it is promoted to uppercase)
    c we skip the letter, so we do: dp[i][j] = dp[i][j-1]
*/


/*
// Recursive I've found will go through at another time
function abbreviation(a, b) {
    var cache = {}
    const recursiveCall = function (a, b) {
        // check if cache has answer
        const key = `${a}1${b}`
        if (cache[key]) { return cache[key] }

        // check if b is empty
        if (b.length === 0) {
            // returns 'YES' if a has no uppercase
            cache[key] = !/A-Z/.test(a) ? 'YES' : 'NO'
            return !/A-Z/.test(a) ? 'YES' : 'NO'
        }

        // if a < b is not return 'NO'
        if (a.length < b.length) {
            cache[key] = 'NO'
            return 'NO'
        }

        // check if last letter of a is uppercase
        if (a[a.length - 1] === a[a.length - 1].toUpperCase()) {
            // if last letters do not match return 'NO'
            if (a[a.length - 1] !== b[b.length - 1]) {
                cache[key] = 'NO'
                return 'NO'
            }
            // if last letters match return a - 1 and b - 1
            const answer =
                recursiveCall(a.substring(0, a.length - 1), b.substring(0, b.length - 1))
            cache[key] = answer
            return answer
        }

        // last letter of a is lowercase
        // split to a-1 and aCapital
        var modifiedA = a.substring(0, a.length - 1)
        const answer = recursiveCall(modifiedA, b) === 'YES'
            || recursiveCall(modifiedA + a[a.length - 1].toUpperCase(), b) === 'YES'
            ? 'YES'
            : 'NO'
            ;
        cache[key] = answer
        return answer

    }
    return recursiveCall(a, b)
}
*/