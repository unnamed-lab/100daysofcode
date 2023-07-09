'use strict';

const dataset = [23, 78, 245, 621];

const fibSequence = function (data) {
  let cValue = 0; //  Inital variable value
  const fibArr = []; //  Fib storage array

  const pushLoop = (value) => {
    fibArr.push(cValue); //  Adds the value into the variable
    cValue += value; //  Add one to the initial value
  };
  for (let i = 0; i <= data; i++) {
    //  loop if the current value is less or equal to the data input
    if (cValue <= data) {
      if (cValue === 0) pushLoop(1); // If the current value is 0, it will push the value and add one to the current value
      pushLoop(fibArr[i]); //   Add current value to array and add with current value with the previous
    } else break;
  }
  return fibArr;
};

const output = (num) => console.log(fibSequence(dataset[num]));

for (let i = 0; i < dataset.length; i++) output(i);

/*
Output:
    [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ] 
    [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ] 
    [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ] 
    [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]
 */
