'use strict';

const dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = function (data, target) {
  let low = 0;
  let high = data.length - 1;
  let isFound = false;
  let targetIndex = null;

  while (low < high) {
    const mid = Math.floor((low + high) / 2); // Get the middle array element index
    const middleValue = data[mid];

    if (middleValue === target) {
      isFound = true; // If the middle index element is the target value
      targetIndex = mid;
      break;
    } else if (middleValue > target)
      high = mid - 1; //  Changes the high variable
    else low = mid; //  Changes the low variable
  }
  if (isFound === false)
    return `The searched item was not found!`; // If the item was not found, return the string.
  else return `The searched item index is ${targetIndex}`; //  If the item was found, return th string.
};

console.log(binarySearch(dataset, 7));
//  Output: The searched item index is 6
