"use script";

const dataset = [12, 25, 12, 11, 41, 11, 25];

const removeDuplicate = function (data) {
    const collection = new Set(data);
    const result = [];
    for (const item of collection) result.push(item);
    return result;
}

const output = removeDuplicate(dataset);
console.log(output);
//  Output: [ 12, 25, 11, 41 ]