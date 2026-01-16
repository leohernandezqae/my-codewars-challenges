const word = 'turns out random test cases are easier than writing out basic ones';

function findShort(s) {
    return Math.min(...s.split(' ').map(s => s.length));
}

module.exports = findShort;