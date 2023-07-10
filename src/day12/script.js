"use strict";

// Factorial: !5 = 5x4x3x2x1 => [n*(n-1)*(n-2)*(n-3)*(n-4)]
// Logic: Iterate by one until it reaches the base value
const getFactorial = function (value) {
    let result = 1;
    for (let i = 2; i <= value; i++) result *= i; //    Loops and multiply by i
    return result;
}

const output = getFactorial(5);
console.log(output);
//  Output: 120