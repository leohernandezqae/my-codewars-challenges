const namesFF = ["Ryan", "Kieran", "Jason", "Yous"];

function friend(names){
    var friends = [];

    // Iterates over the names and stores only if length is equals 4
    names.forEach((fOrF) => fOrF.length === 4 ? friends.push(fOrF) : null);

    // Returns the found names
    return friends;

    // OR
    //return friends.filter(n => n.length === 4)
}

module.exports = friend;