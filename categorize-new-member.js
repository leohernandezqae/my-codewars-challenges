const member = [[45, 12], [55, 21], [19, -2], [104, 20]];

function openOrSenior(data) {
    const memberCategories = [];

    for (const [age, handicap] of data) {
        const isSeniorOrOpen = (age >= 55 && handicap > 7) ? 'Senior' : 'Open';
        memberCategories.push(isSeniorOrOpen);
    }
    return memberCategories;
}

function openOrSenior2(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

module.exports = openOrSenior2;