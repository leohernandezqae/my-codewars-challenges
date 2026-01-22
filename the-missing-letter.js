const arr = ['O', 'Q', 'R', 'S'];

function findMissingLetter(array) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
  const startPos = alphabet.indexOf(array[0].toLowerCase());
  var auxAlphabet = [];

  for (var i = startPos; i <= (array.length + startPos); i++) {
    auxAlphabet.push(alphabet[i]);
  }

  //return array.forEach(l => auxAlphabet.includes(l) ? true : false);

  for (var j = 0; j < auxAlphabet.length; j++) {
    if (!array.join('').toLowerCase().split('').includes(auxAlphabet[j])) {
      return array.join('') == array.join('').toUpperCase() ? auxAlphabet[j].toUpperCase() : auxAlphabet[j];
    }
  }
}

/** SOLUTION 1
 function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
 */

/** SOLUTION 2
 * 
 *const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
 */

//console.log(findMissingLetter(arr));

module.exports = findMissingLetter;