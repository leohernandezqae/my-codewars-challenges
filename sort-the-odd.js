//var numberList = [1, 3, 2, 8, -39, 47, -93, 4];

function sortArray(numList) {
	var tempArray = [];

	for (var i = 0; i < numList.length; i++) {
		if ((numList[i] < 0 ? numList[i] * -1 : numList[i]) % 2 == 1) {
			tempArray.push(numList[i]);
			numList[i] = '_';
		}
	}

	tempArray.sort((a, b) => a - b);

	for (var i = 0; i < tempArray.length; i++) {
		for (var j = 0; j < numList.length; j++) {
			if (numList[j] === '_') {
				numList[j] = tempArray[i];
				break;
			}
		}
	}

	return numList;
}

function sortArray2(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}
module.exports = sortArray;