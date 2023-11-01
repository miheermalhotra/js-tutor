
function largestOfFour(arr) {
  return arr.map(subArray => Math.max(...subArray));
}

const testArr = [[17, 23, 25, 12],
[25, 7, 34, 48],
[4, -10, 18, 21],
 [-72, -3, -17, -10]];
 
 console.log(largestOfFour(testArr));

// output:- [ 25, 48, 21, -3 ]
