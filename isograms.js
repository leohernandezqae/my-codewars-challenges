var word = 'Dermatoglyphics';

function isIsogram(str) {
	str = str.toLowerCase().split('');
	var dupCount = 0;

	console.log(str);

	for (var i = 0; i < str.length; i++) {
		dupCount = 0;
		for (var j = 0; j < str.length; j++) {
			if (str[i] == str[j]) {
				dupCount++;
			}

			if (dupCount > 1) {
				return false;
			}
		}
	}
	return true;
}

function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram2(word));

module.exports = isIsogram;