// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .
//
// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

function rotLeft(a, d) {
    if (d === 0 || d === a.length) {
        return a
    }
    let numOfRotations = d % a.length
    for (let i = 0; i < numOfRotations; i++) {
        let item = a.shift()
        a.push(item)
    }
    return a
}
