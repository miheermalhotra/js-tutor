/*
* @method memoizer: Used to get params and methods, checks for
* already processed info to avoid extra processing
 */

function memoizer(fn) {
    let localCache = {}
    return function (...params) {
        let list = JSON.stringify(params)
        if(list in localCache) {
            return localCache[list]
        } else {
            return localCache[list] = fn.apply(this, params)
        }

    }
}

function sum(a,b) {
    console.log('-- called sum --');
    return a + b;
}

function calc(a,b,c,d) {
    console.log('-- called calc --');
    return (a*b) + (c*d);
}

const memoSum = memoizer(sum);
console.log(memoSum(2,4));
console.log(memoSum(4,6));
console.log(memoSum(2,4)); // should return from cache

const memoCalc = memoizer(calc);
console.log(memoCalc(1,2,3,4));
console.log(memoCalc(5,6,7,8));
console.log(memoCalc(1,2,3,4)); // should return from cache
