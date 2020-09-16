const repeatedString = (s, n) => {
    let count = 0
    let remainder, str
    for (let letter of s) {
        if (letter === 'a') count++
    }
    count *= Math.floor(n / s.length)
    remainder = n % s.length
    if (remainder === 0) return count
    str = s.substring(0, remainder)
    for (let l of str) {
        if (l === 'a') count++
    }
    return count
}

console.log(repeatedString('aba', 10)) //7
console.log(repeatedString('a', 1000000000000)) //1000000000000