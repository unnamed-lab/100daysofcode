'use strict';

const dataset = [
  1,
  2,
  3,
  4,
  [5, 6],
  7,
  8,
  [
    [9, 10],
    [11, 12, 13],
  ],
];

const reverseList = function (arr) {
  const newArr = [];
  let i = arr.length - 1;
  const isArr = function (arr) {
    if (typeof arr === 'object') {
      const anotherArr = [];
      for (let j = arr.length - 1; j >= 0; j--) {
        anotherArr.push(arr[j]);
        if (typeof arr[j] === 'object') isArr(arr[j]);
      }
      arr = anotherArr;
    }
    arr.reverse();
  };

  do {
    if (typeof arr[i] === 'object') isArr(arr[i]);
    newArr.push(arr[i]);
    i--;
  } while (i >= 0);

  return newArr;
};

console.log(reverseList(dataset));
