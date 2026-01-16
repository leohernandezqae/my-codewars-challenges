const p1 = 10;
const p2 = 2000;

function sumDigPow(a, b) {
  var eureka = [];

  for (var i = a; i <= b; i++) {
    var aux = 0;
    var pn = i.toString().split('');

    //pn.forEach((n) => aux = aux + Math.pow(parseInt(n), (pn.indexOf(n) + 1)));

    for (var j = 0; j < pn.length; j++) {
      aux = aux + (Math.pow(parseInt(pn[j]), j + 1));
    }

    if (i === aux) {
      eureka.push(aux);
    }
  }
  return eureka;
}

//console.log(sumDigPow(p1, p2));

/**
const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );
*/

module.exports = sumDigPow;