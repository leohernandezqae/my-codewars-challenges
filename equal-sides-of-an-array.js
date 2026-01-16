const numbers = [10, -80, 10, 10, 15, 35, 20];
var sumLeft = [];
var sumRight = [];

function findEvenIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            sumLeft.push(arr[i]);
        } else {
            sumLeft.push(arr[i] + sumLeft[i - 1]);
        }
    }

    arr.reverse();

    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            sumRight.push(arr[i]);
        } else {
            sumRight.push(arr[i] + sumRight[i - 1]);
        }
    }

    var test = sumLeft.forEach((num) => sumRight.includes(num) ? num : 'no');
    console.log(test);
    /*
    console.log(`Numbers: ${numbers.reverse()}`);
    console.log(`Sum left: ${sumLeft}`);
    console.log(`Sum right: ${sumRight.reverse()}`);*/
    return -1;
}


function findEvenIndex2(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}


findEvenIndex(numbers);

module.exports = findEvenIndex2;