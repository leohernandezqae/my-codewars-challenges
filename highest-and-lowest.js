const numberRow = "1 2 3 4 5";

function highAndLow(numbers) {
    const numberList = numbers.split(' ');
    return `${Math.max(...numberList)} ${Math.min(...numberList)}`
}

module.exports = highAndLow;