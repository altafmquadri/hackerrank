const minimumSwaps = arr => {

    const visited = {}
    let cycleLength, currentIdx, valueBelongsAtIndex, swaps = 0

    for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
            visited[i] = true
            currentIdx = i
            valueBelongsAtIndex = arr[i] - 1
            cycleLength = 1

            while (valueBelongsAtIndex !== i) {
                visited[valueBelongsAtIndex] = true
                currentIdx = valueBelongsAtIndex
                valueBelongsAtIndex = arr[currentIdx] - 1
                cycleLength++
            }
            swaps += (cycleLength - 1)
        }
    }
    return swaps
}



console.log(minimumSwaps([4, 3, 1, 2])) //3
console.log(minimumSwaps([2, 3, 4, 1, 5])) //3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])) //3
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])) //5
console.log(minimumSwaps([4, 2, 5, 1, 7, 3, 6])) //4