const numberList = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

function findOdd(A) {
    var isOdd = 0;
    var countOdd = 0;

    for (var i = 0; i < A.length; i++) {
        for (var i2 = 0; i2 < A.length; i2++) {
            countOdd = (A[i] == A[i2]) ? countOdd + 1 : countOdd;
        }
        if (countOdd % 2 === 1) {
            countOdd = 0;
            isOdd = A[i];
            return isOdd;
        }
    }
    return 0;
}

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

console.log(`${findOdd2(numberList)}`);

module.exports = findOdd2;