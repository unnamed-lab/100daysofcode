'use strict';

const dataset = [23, 78, 112, 266, 71, 647];

const getHighestPrime = function (dataArr) {
  const findPrimeFactor = function (data) {
    //  Find the prime factors of the dataset
    let factorArr = [];
    for (let i = 0; i <= data; i++) if (data % i === 0) factorArr.push(i); //  Getting the factors
    const isPrimeNumber = factorArr.length === 2 ? true : false; //  Fetching the prime numbers (Two values - 1 and itself)
    return isPrimeNumber;
  };

  let isPrimeNumber = new Map(); //  Map the prime numbers
  for (let i = 0; i < dataArr.length; i++) {
    isPrimeNumber.set(dataArr[i], findPrimeFactor(dataArr[i])); //  Configure the mapping to set a boolean value to prime and non prime numbers
  }

  const highestPrime = function () {
    //  Get the highest prime number
    let primeNumbers = [];
    let highestPrimeNumber = 0;
    for (let i = 0; i < dataArr.length; i++) {
      if (isPrimeNumber.get(dataArr[i]) === true) primeNumbers.push(dataArr[i]); //  Fetches numbers in the map that returns true
    }
    for (let i = 0; i < primeNumbers.length; i++) {
      if (primeNumbers[i] > highestPrimeNumber)
        highestPrimeNumber = primeNumbers[i]; //  Get the highest prime number in the primeNumbers array
    }
    return `The highest prime factor of the dataset is: ${highestPrimeNumber}`;
  };
  return highestPrime();
};

console.log(getHighestPrime(dataset));
// Output: The highest prime factor of the dataset is: 647
