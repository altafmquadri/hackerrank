
const countingValleys = (n, s) => {
    let count = 0, sum = 0
    //assign string a number either 1 or -1 and then convert to running total
    const path = [...s].map(val => val === 'U' ? 1 : -1)
        .map(val => sum += val)
    //check for a zero value, if left value is -1 they are coming from below to sea-level count as valley
    path.forEach((val, i) => {
        val === 0 && path[i - 1] === -1 ? count++ : false
    })
    return count
}

//cSpell:disable
console.log(countingValleys(8, 'UDDDUDUU'));
console.log(countingValleys(12, 'DDUUDDUDUUUD'))