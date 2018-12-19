// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
//
// repeatedString has the following parameter(s):
//
// s: a string to repeat
// n: the number of characters to consider
// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

function repeatedString(s, n) {
    var aCounter = function (string) {
        let numOfAs = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] === "a") {
                numOfAs += 1;
            }
        }
        return numOfAs;
    };

    let numOfReps = Math.floor(n / s.length)
    let leftover = n % s.length;
    let substring;
    if (leftover) {
        substring = s.substring(0, leftover)
    }
    let result = aCounter(s) * numOfReps
    if (substring) {
        result += aCounter(substring)
    }
    return result
}
