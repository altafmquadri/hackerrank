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