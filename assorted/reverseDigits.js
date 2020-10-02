// const reverseDigits = num => {
//     let revNum = 0
//     while (num > 0) {
//         revNum = revNum * 10 + num % 10
//         num = num / 10
//     }
//     return revNum
// }
// const reverseDigits = num => {
//     let rem
//     let sum = 0
//     let temp = num
//     while (num > 0) {
//         rem = num % 10
//         num = num / 10
//         sum = sum * 10 + rem
//     }
//     console.log(num);
// }

const reverseDigits = (num) => {
    let startNum = num
    let count = 0

    const helper = startNum => {
        let addNum = numReverse(startNum)
        startNum += addNum
        count++
        if (count > 10000) return 'No Palindrome exists'
        if (isPalindrome(startNum)) return [count, startNum]
        return helper(startNum)
    }
    return helper(startNum)
}

const isPalindrome = num => {
    return num === numReverse(num)
}

const numReverse = num => {
    return +[...num.toString()].reverse().join('')
}


console.log(reverseDigits(121));
console.log(reverseDigits(1080));
console.log(reverseDigits(7889));
console.log(reverseDigits(52));
console.log(reverseDigits(196));
// console.log(isPalindrome(242));