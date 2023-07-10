'use script';

const sum = function (num1, num2) {
  return Number(num1 + num2); //  Addition of two parameters
};

const sumNumbers = function (...num) {
  let output = 0;
  const re = /^[A-Za-z]$/g; //  Check for alphabets
  for (let i = 0; i <= num.length; i++) {
    if (re.test(num[i]) !== true && Number(num[i] !== undefined))
      output += Number(num[i]);
    //  Addition of many parameters and prevents addition of alphabets(NaN)
    else continue;
  }
  return output;
};

const output1 = sum(4, 62);
console.log(output1);
//  Output: 66

const output2 = sumNumbers(2, 'r', 9, 100);
console.log(output2);
//  Output: 111