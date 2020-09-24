
const freqQuery = queries => {
    const values = {}
    const freq = {}
    const result = []
    let qRow, instruction, val

    for (let query of queries) {
        qRow = query
        instruction = qRow[0]
        val = qRow[1]

        switch (instruction) {
            case 1:
                if (freq[values[val]] > 0) freq[values[val]] -= 1
                values[val] = (values[val] || 0) + 1
                freq[values[val]] = (freq[values[val]] || 0) + 1
                break
            case 2:
                if (values[val] > 0) {
                    freq[values[val]] -= 1
                    values[val] -= 1
                    freq[values[val]] = (freq[values[val]] || 0) + 1
                }
                break
            case 3:
                freq[val] ? result.push(1) : result.push(0)
                break
            default:
                break
        }

    }
    return result
}


const query1 = [
    [1, 5],
    [1, 6],
    [3, 2],
    [1, 10],
    [1, 10],
    [1, 6],
    [2, 5],
    [3, 2]
]

const query2 = [[3, 4], [2, 1003], [1, 16], [3, 1]]

const query3 = [
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2]
]

const query4 = [[1, 3], [1, 3], [2, 3], [3, 2]]

console.log(freqQuery(query1)) //[0,1]
console.log(freqQuery(query2)) //[0,1]
console.log(freqQuery(query3)) //[0,1,1]
console.log(freqQuery(query4)) //[0]