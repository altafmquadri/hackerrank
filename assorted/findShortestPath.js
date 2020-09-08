const findShortestPath = (startCoordinates, grid) => {
    let distanceFromTop = startCoordinates[0]
    let distanceFromLeft = startCoordinates[1]

    const location = {
        distanceFromTop,
        distanceFromLeft,
        path: [],
        status: 'Start'
    }


    const queue = [location]

    while (queue.length > 0) {
        let currentLocation = queue.shift()

        const directions = ['North', 'East', 'South', 'West']
        for (let direction of directions) {
            let newLocation = exploreInDirection(currentLocation, direction, grid)
            if (newLocation.status === 'Goal') {
                return newLocation.path
            } else if (newLocation.status === 'Valid') {
                queue.push(newLocation)
            }
        }
    }
    return false
}

const locationStatus = (location, grid) => {
    let gridSize = grid.length
    let dft = location.distanceFromTop
    let dfl = location.distanceFromLeft

    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= gridSize ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= gridSize) {
        return 'Invalid'
    } else if (grid[dft][dfl] === 'Goal') {
        return 'Goal'
    } else if (grid[dft][dfl] !== 'Empty') {
        return 'Blocked'
    } else {
        return 'Valid'
    }
}


const exploreInDirection = (currentLocation, direction, grid) => {
    let newPath = currentLocation.path.slice()
    newPath.push(direction)

    let dft = currentLocation.distanceFromTop
    let dfl = currentLocation.distanceFromLeft


    if (direction === 'North') {
        dft -= 1
    } else if (direction === 'East') {
        dfl += 1
    } else if (direction === 'South') {
        dft += 1
    } else if (direction === 'West') {
        dfl -= 1
    }

    let newLocation = {
        distanceFromTop: dft,
        distanceFromLeft: dfl,
        path: newPath,
        status: 'Unknown'
    }
    newLocation.status = locationStatus(newLocation, grid)

    if (newLocation.status === 'Valid') {
        grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited'
    }

    return newLocation
}

let gridSize = 4
let grid = []
for (let i = 0; i < gridSize; i++) {
    grid[i] = []
    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = 'Empty'
    }
}

grid[0][0] = "Start"
grid[2][2] = "Goal"

grid[1][1] = "Obstacle"
grid[1][2] = "Obstacle"
grid[1][3] = "Obstacle"
grid[2][1] = "Obstacle"
console.log(findShortestPath([0, 0], grid))





