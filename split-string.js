const word = 'situation';

function solution(str) {
    var splittedWord = str.split('');
    var joinWord = [];

    for (var i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            joinWord.push(splittedWord[i] + (splittedWord[i+1] || '_'));
        }
    }
    return joinWord;
}

function solution2(s) {
    return (s+"_").match(/.{2}/g)||[]

}

module.exports = solution;