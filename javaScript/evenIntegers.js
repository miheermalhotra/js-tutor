/*
* @method removeIntegers: Used to get params and filter out
* the required conditions in the output
*
 */
function removeIntegers(arr) {
    return arr.filter((v => (v%2) !=0));
}

console.log(removeIntegers([3,2,41,3,34]))
console.log(removeIntegers([1,12,13,23,24,28,31]))