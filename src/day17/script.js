'use strict';

// Task: Write a function to check if a given number is a power of two.

const dataset = [2, 3, 12, 18, 94];

const checkPower = function (num) {
  //  Check if when divided by two the remainder results to zero
  if (num % 2 === 0) return `The number (${num}) is a power of two!`;
  else return `The number (${num}) is not a power of two!`;
};

console.log(checkPower(129));
// Output: The number (129) is not a power of two!

console.log(checkPower(824));
// Output: The number (824) is a power of two!
