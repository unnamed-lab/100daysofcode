"use strict";

const checkAnagram = function (str1, str2) {
    const sortedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

const output = checkAnagram('schoolmaster', 'the classroom');
console.log(output);
//  Output: true