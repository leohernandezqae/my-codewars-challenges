function zeros(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

////console.log(zeros(100000));

module.exports = zeros;