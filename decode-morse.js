const inputMorse = '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ';

function decodeMorse(morseCode) {
    const MORSE_CODE = {
        '-.-.--': '!', '.-..-.': '"', '...-..-': '$', '.-...': '&',
        '.----.': "'", '-.--.': '(', '-.--.-': ')', '.-.-.': '+',
        '--..--': ',', '-....-': '-', '---...': ':', '-.-.-.': ';',
        '-...-': '=', '..--..': '?', '.--.-.': '@', '.-.-.-': '.',
        '-..-.': '/', '..--.-': '_', '...---...': 'SOS', '-----': '0',
        '.----': '1', '..---': '2', '...--': '3', '....-': '4',
        '.....': '5', '-....': '6', '--...': '7', '---..': '8',
        '----.': '9', '.-': 'A', '-...': 'B', '-.-.': 'C',
        '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G',
        '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K',
        '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S',
        '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W',
        '-..-': 'X', '-.--': 'Y', '--..': 'Z'
    }

    const groupedMorse = morseCode.trim().split('   ');
    const translatedMorse = [];

    // Read and store the morse
    for (var i = 0; i < groupedMorse.length; i++) {
        var auxTranslate = '';
        groupedMorse[i].split(' ').forEach((w) => auxTranslate += MORSE_CODE[w]);
        translatedMorse.push(auxTranslate);
    }

    return translatedMorse.join(' ');
}

/**
 * OTHER GREAT SOLUTION
 *
decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}
*/

/**
  decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }
 */

module.exports = decodeMorse;