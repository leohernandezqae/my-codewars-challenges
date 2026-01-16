a1 = ["arp", "live", "strong"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr2[j].includes(arr1[i])) {
        arr3.push(arr1[i]);
        break;
      }
    }
  }
  return arr3.sort();
}

//console.log(inArray(a1, a2));
/*
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
*/
module.exports = inArray;