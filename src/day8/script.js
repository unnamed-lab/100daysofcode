"use strict";

function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };

  let changeDue = cash - price;
  let totalCid = 0;
  let change = [];

  // Calculate the total amount in the cash-in-drawer (totalCid)
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  // Case 1: Insufficient funds
  if (totalCid < changeDue) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  // Case 2: Exact change
  if (totalCid === changeDue) {
    return { status: 'CLOSED', change: cid };
  }

  // Case 3: Calculate change
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyName = cid[i][0];
    let currencyTotal = cid[i][1];
    const currencyValue = currencyValues[currencyName];
    let currencyCount = Math.floor(currencyTotal / currencyValue);
    let currencyAmount = 0;

    while (changeDue >= currencyValue && currencyCount > 0) {
      changeDue -= currencyValue;
      changeDue = changeDue.toFixed(2);
      currencyTotal -= currencyValue;
      currencyCount--;
      currencyAmount += currencyValue;
    }

    if (currencyAmount > 0) {
      change.push([currencyName, currencyAmount]);
    }
  }

  // Case 4: Unable to provide exact change
  if (changeDue > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  return { status: 'OPEN', change: change };
}

const output = checkCashRegister(19.5, 50, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(output);
// Output:  {  status: 'OPEN',  change: [ [ 'TWENTY', 20 ], [ 'TEN', 10 ], [ 'QUARTER', 0.5 ] ]}