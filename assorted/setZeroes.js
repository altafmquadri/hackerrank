const setZeroes = (matrix) => {
    const visited = []

    const inBounds = (row, col, matrix) => {
        if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) return true
    }

    const determineChange = (row, col, matrix) => {
        let up = row, down = row, left = col, right = col
        while (up >= 0 || down < matrix.length) {
            up--
            down++
            if (inBounds(up, col, matrix)) visited.push([up, col])
            if (inBounds(down, col, matrix)) visited.push([down, col])
        }
        while (left >= 0 || right < matrix[0].length) {
            left--
            right++
            if (inBounds(row, left, matrix)) visited.push([row, left])
            if (inBounds(row, right, matrix)) visited.push([row, right])
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let val = matrix[row][col]
            if (val === 0) {
                determineChange(row, col, matrix)
            }
        }
    }

    visited.forEach(coordinate => {
        let [row, col] = coordinate
        matrix[row][col] = 0
    })

    return matrix
}

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))