'use strict';

/* 
    ### 1. Challenge: Reverse a String
    Description: Write a function that reverses a given string.
    Tips and Tricks: You can use the `split()`, `reverse()`, and `join()` methods to achieve this.
 */

const string = 'The quick brown fox jumps over the lazy dog.';

const reverseString = function (str) {
  const strArray = str.split('').reverse().join('');
  return strArray;
};

const output = reverseString(string);
console.log(output);
//  Output: .god yzal eht revo spmuj xof nworb kciuq ehT
