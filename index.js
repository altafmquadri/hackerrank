const rotLeft = (a, d) => {
    let i = 0
    let rotation = d
    const newArr = []

    while (rotation < a.length) {
        newArr[i++] = a[rotation++]
    }
    rotation = 0
    while (rotation < d) {
        newArr[i++] = a[rotation++]
    }
    return newArr
}


console.log(rotLeft([1, 2, 3, 4, 5], 4)) //5 1 2 3 4