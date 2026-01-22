const openOrSenior2 = require('./categorize-new-member.js');
const sumDigPow = require('./consecutive-powers.js');
const findEvenIndex2 = require('./equal-sides-of-an-array.js');
const domainName = require('./extract-from-url.js');
const findOdd2 = require('./find-the-odd-int.js');
const friend = require('./friend-or-foe.js');
const highAndLow = require('./highest-and-lowest.js');
const isIsogram = require('./isograms.js');
const inArray = require('./in-array.js');
const findShort = require('./shortest-word.js');
const findMissingLetter = require('./the-missing-letter.js');
const solution = require('./split-string.js');
const sortArray = require('./sort-the-odd.js');
const formatDuration = require('./duration-format.js');
const decodeMorse = require('./decode-morse.js');
const decodeBits = require('./decode-morse-part-2.js');
const zeros = require('./trailing-zeros.js');

const chai = require("chai");
const Test = require('@codewars/test-compat');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Categorize New Member", () => {
  it("Fixed tests", () => {
    assert.deepEqual(openOrSenior2([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
    assert.deepEqual(openOrSenior2([[3, 12], [55, 1], [91, -2], [53, 23]]), ['Open', 'Open', 'Open', 'Open'])
    assert.deepEqual(openOrSenior2([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])
  });
});

describe('Find the odd int', function () {

  function doTest(a, n) {
    assert.strictEqual(findOdd2(a), n, `Incorrect answer for input=[${a}]`);
  }

  it("Example tests", () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1, 1, 2], 2);
    doTest([0, 1, 0, 1, 0], 0);
    doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
  });

  it("Fixed tests", () => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
  });
});

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

describe("Sort the odd", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]), []);
  });
});

describe("isIsogram", function () {
  it("Sample tests", function () {
    tester("Dermatoglyphics", true);
    tester("isogram", true);
    tester("aba", false);
    tester("moOse", false);
    tester("isIsogram", false);
    tester("", true);
  });
  const tester = (input, expected) => {
    assert.strictEqual(isIsogram(input), expected, `Failed for input: "${input}"\n`);
  }
});

describe("Friend or Foe?", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})

describe("FindEvenIndex", function () {
  it("sample Tests", function () {
    doTest([1, 2, 3, 4, 3, 2, 1], 3);
    doTest([1, 100, 50, -51, 1, 1], 1);
    doTest([1, 2, 3, 4, 5, 6], -1);
    doTest([20, 10, 30, 10, 10, 15, 35], 3);
    doTest([20, 10, -80, 10, 10, 15, 35], 0);
    doTest([10, -80, 10, 10, 15, 35, 20], 6);
    doTest([8, 8], -1);
    doTest([8, 0], 0);
    doTest([0, 8], 1);
    doTest([7, 3, -3], 0);
    doTest([8], 0);
    doTest([0, 0, 0, 0, 0], 0);
    doTest([-1, 1, 0, -1, 1, 0, -1, 1, 0, 0], 2);
  });

  const { assert } = require('chai');

  function doTest(input, expected) {
    const message = `array = ${JSON.stringify(input)}\n`;
    const actual = findEvenIndex2(input);
    assert.strictEqual(actual, expected, message);
  }
});

describe("Highest and Lowest", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});

describe("Shortest Word", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})

describe("Which are in?", () => {
  it("test", () => {

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

    a1 = ["xyz", "live", "strong"];
    assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"]);

    a1 = ["live", "strong", "arp"];
    assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"]);

    a1 = ["tarp", "mice", "bull"];
    assert.sameOrderedMembers(inArray(a1, a2), []);
  });
});

describe("Take a number and sum its digits raised to the consecutive powers and ...Eureka!", function () {
  it("Fixed tests", function () {
    assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    assert.deepEqual(sumDigPow(10, 100), [89]);
    assert.deepEqual(sumDigPow(90, 100), []);
    assert.deepEqual(sumDigPow(90, 150), [135]);
    assert.deepEqual(sumDigPow(50, 150), [89, 135]);
    assert.deepEqual(sumDigPow(10, 150), [89, 135]);
    assert.deepEqual(sumDigPow(10, 2000), [89, 135, 175, 518, 598, 1306, 1676]);
  });
});

describe("Find the missing letter", function () {
  it("exampleTests", function () {
    Test.assertEquals(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
    Test.assertEquals(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
  });
});

describe("Extract the domain name from a URL", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })
})

describe("Human readable duration format", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});

describe("Decode the morse code", function () {
  it("Example from description", () => {
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  
  it("Leading and trailing spaces", () => {
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });

  it("Leading and trailing spaces", () => {
    assert.strictEqual(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '), 'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});

describe('Decode bits/morse advanced', function() {
  it('Example from description', function() {
    assert.strictEqual(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')), 'HEY JUDE');
  });

  it('Basic bits decoding', function() {
    assert.strictEqual(decodeMorse(decodeBits('1')), 'E');
    assert.strictEqual(decodeMorse(decodeBits('101')), 'I');
    assert.strictEqual(decodeMorse(decodeBits('10001')), 'EE');
    assert.strictEqual(decodeMorse(decodeBits('10111')), 'A');
    assert.strictEqual(decodeMorse(decodeBits('1110111')), 'M');
  });

  it('Multiple bits per dot handling', function() {
    assert.strictEqual(decodeMorse(decodeBits('111')), 'E'); // .
    assert.strictEqual(decodeMorse(decodeBits('1111111')), 'E'); // .
    assert.strictEqual(decodeMorse(decodeBits('110011')), 'I'); // ..
    assert.strictEqual(decodeMorse(decodeBits('111000111')), 'I'); // ..
    assert.strictEqual(decodeMorse(decodeBits('111110000011111')), 'I'); // ..
    assert.strictEqual(decodeMorse(decodeBits('11111100111111')), 'M'); // --
    assert.strictEqual(decodeMorse(decodeBits('111000000000111')), 'EE'); // . .
    assert.strictEqual(decodeMorse(decodeBits('111000111000111')), 'S'); // ...
    assert.strictEqual(decodeMorse(decodeBits('111111000000111111000000111111000000111111000000000000000000111111000000000000000000111111111111111111000000111111000000111111111111111111000000111111111111111111000000000000000000000000000000000000000000111111000000111111111111111111000000111111111111111111000000111111111111111111000000000000000000111111000000111111000000111111111111111111000000000000000000111111111111111111000000111111000000111111000000000000000000111111')), 'HEY JUDE');
  });

  it('Extra zeros handling', function() {
    assert.strictEqual(decodeMorse(decodeBits('01110')), 'E');
    assert.strictEqual(decodeMorse(decodeBits('000000011100000')), 'E');
  });

  it('Long messages handling', function() {
    assert.strictEqual(decodeMorse(decodeBits('00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110')), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
    assert.strictEqual(decodeMorse(decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111')), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});

describe("Number of trailing zeros of N!", function() {
  it("Should pass sample tests", function() {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0")
    Test.assertEquals(zeros(5), 1, "Testing with n = 5")
    Test.assertEquals(zeros(6), 1, "Testing with n = 6")
    Test.assertEquals(zeros(30), 7, "Testing with n = 30")
  });
});