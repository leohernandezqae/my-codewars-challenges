const decodeMorse = require('./decode-morse.js');

function decodeBits(bits) {
    var zeroRating = [];
    var oneRating = [];
    var constAuxBits = '';
    var pos = 0;

    // Find out the binaries rating
    zeroRating = getRating(bits.replace(/^0+|0+$/g, '').split('1'));
    oneRating = getRating(bits.replace(/^0+|0+$/g, '').split('0'));

    while (pos < bits.length) {
        var onesCounter = 0;
        var zerosCounter = 0;

        if (bits[pos] == 0) {
            while (bits[pos] == 0) {
                zerosCounter++;

                if (bits[pos + 1] != 0) {
                    if (zerosCounter < Math.min(...zeroRating)) {
                        pos++;
                        break;
                    }

                    if ((zerosCounter > Math.min(...zeroRating) &&
                        zerosCounter < Math.max(...zeroRating) &&
                        zeroRating.includes(zerosCounter)) ||
                        (zerosCounter % Math.min(oneRating) == 0 &&
                            zerosCounter > Math.max(...oneRating))) {

                        pos++;
                        constAuxBits += ' ';
                        break
                    }

                    if (zerosCounter == Math.max(...zeroRating) &&
                        zerosCounter > Math.max(...oneRating)) {

                        pos++;
                        constAuxBits += '   ';
                        break;
                    }
                }
                pos++;
            }
        } else {
            while (bits[pos] == 1) {
                onesCounter++;
                if (bits[pos + 1] != 1) {
                    if (onesCounter == Math.min.apply(0, oneRating) &&
                        onesCounter <= Math.min.apply(0, zeroRating)) {

                        constAuxBits += '.';
                        pos++;
                        break;
                    } else {
                        constAuxBits += '-';
                        pos++;
                        break
                    }
                }
                pos++;
            }
        }
    }

    return constAuxBits.trim();
}

function getRating(groupRating) {
    var position = 0;
    var rating = [];

    while (position < groupRating.length) {
        if (groupRating[position] != '' && !rating.includes(groupRating[position].length)) {
            rating.push(groupRating[position].length);
        }
        position++;
    }
    return rating;
}

module.exports = decodeBits;