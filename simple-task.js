function maxProductOfThree(arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;

  const product1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
  const product2 = arr[0] * arr[1] * arr[n - 1];

  return Math.max(product1, product2);
}

const arr = [4, 5, 0, -11, 3, -7, -20];
//console.log(maxProductOfThree(arr)); // 1100