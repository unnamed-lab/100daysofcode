'use strict';

//  Sentences to check.
const dataset = [
  'A man, a plan, a canal, Panama.',
  'Was it a car or a cat I just saw?', //  Change from original dataset
  'Step on no pets.',
  'Mr. Owl ate my metal worm.',
  'Never odd or even.',
];

const checkPalindrome = function (value) {
  const textInput = value.toLowerCase();
  let forwardPattern = []; //  The forward pattern will be stored here.
  let backwardPattern = []; //  The backward pattern will be stored here.
  const re = /^[A-Za-z0-9]+/; //  Regular Expression to lookup alphabets and numbers

  const patternChecker = function (pattern, increment = true) {
    //  Checks if every iteration follows the ReGex and returens a boolean value
    if (increment === true) {
      for (let i = 0; i < textInput.length; i++) {
        const isAlphaNumeric = re.test(textInput[i]) === true;
        if (isAlphaNumeric && textInput[i] !== undefined)
          pattern.push(textInput[i]);
      }
    } else if (increment === false) {
      for (let i = textInput.length + 1; i >= 0; i--) {
        const isAlphaNumeric = re.test(textInput[i]) === true;
        if (isAlphaNumeric && textInput[i] !== undefined)
          pattern.push(textInput[i]);
      }
    }
    return pattern;
    //  If block ensures the iteration value is alphanumeris and not undefined
  };

  patternChecker(forwardPattern, true); //  Loops forward to get the forward pattern
  patternChecker(backwardPattern, false); //  Loops backward to get the backward pattern

  //  Check if both patterns are strictly equal to each other and output text
  const isValid =
    forwardPattern.join('') === backwardPattern.join('')
      ? `The sentence is a palindrome!`
      : `The sentence is not a palindrome`;

  return isValid;
};

console.log(checkPalindrome(dataset[0]));
console.log(checkPalindrome(dataset[1]));
console.log(checkPalindrome(dataset[2]));
console.log(checkPalindrome(dataset[3]));
console.log(checkPalindrome(dataset[4]));

/*
Outputs:
  The sentence is a palindrome!
  The sentence is not a palindrome
  The sentence is a palindrome!
  The sentence is a palindrome!
  The sentence is a palindrome!
 */
