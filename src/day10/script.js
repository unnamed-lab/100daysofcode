'use strict';

const dataset =
  'The pervasive and pernicious influence of propaganda on public opinion underscores the critical importance of media literacy in fostering a discerning and informed citizenry.';

const findLongestWord = function (str) {
  const strArray = str.split(/[\s,.]/); //  Split words from whitespace, commas and periods
  let longestWord = ''; //  Storage variable for the longest word
  for (
    let i = 0;
    i < strArray.length;
    i++ //  Loop through the stored string array
  )
    if (strArray[i].length > longestWord.length) longestWord = strArray[i]; //  For everytime the string element in the array is larger than the old, the longestWord variable get's update
  return longestWord;
};

const output = findLongestWord(dataset);
console.log(output);
//  Output: underscores