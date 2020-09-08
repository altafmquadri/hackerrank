const isValidSudoku = (board) => {
    const rowsHash = {}
    const colsHash = {}
    const gridsHash = {}

    //each hash will have it's individual row, col, grid hash
    for (let i = 0; i < board.length; i++) {
        rowsHash[i] = {}
        colsHash[i] = {}
        gridsHash[i] = {}
    }

    //populate the hashes
    for (let row = 0; row < board.length; row++) {
        //setup rows for each iteration
        let currentRow = rowsHash[row]
        for (let col = 0; col < board[0].length; col++) {
            let num = board[row][col]
            //setup col and grid for each iteration
            let currentCol = colsHash[col]
            let currentGrid = gridsHash[Math.floor(row / 3) * 3 + Math.floor(col / 3)]

            //ignore '.'
            if (num === '.') continue
            //if num is found that means we have it in our hash, hence a duplicate
            if (currentRow[num] || currentCol[num] || currentGrid[num]) return false
            else {
                //populate count of 1 
                currentRow[num] = 1
                currentCol[num] = 1
                currentGrid[num] = 1

            }
        }
    }
    return true
}

const boardOne = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

const boardTwo = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(boardOne))
console.log(isValidSudoku(boardTwo))