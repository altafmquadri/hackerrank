/* John works at a clothing store. He has a large pile of socks 
that he must pair by color for sale. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]. 
There is one pair of color 1 and one of 2 color. 
There are three odd socks left, one of each color. The number of pairs is 2.

Function Description
Complete the sockMerchant function in the editor below. 
It must return an integer representing the number of matching pairs of socks 
that are available.

sockMerchant has the following parameter(s):
n: the number of socks in the pile
ar: the colors of each sock

Input Format
The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers describing the colors ar[i] 
of the socks in the pile.


Output Format
Return the total number of matching pairs of socks that John can sell.

Sample Input
9
10 20 20 10 10 30 50 10 20

Sample Output
3

John can match three pairs of socks.*/

const sockMerchant = (n, ar) => {
    //create a hash
    let count = 0
    let val
    const hash = {}

    for (let item of ar) {
        hash[item] = (hash[item] || 0) + 1
    }
    //take the value in each hash and divide it by two rounding down
    for (let key in hash) {
        val = Math.floor(hash[key] / 2)
        count += val
    }
    return count
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) //3