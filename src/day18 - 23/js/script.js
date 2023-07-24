"use strict";

const backspaceIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33"/></svg>`;

const chervonIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M342.43 273.77l-74.13-89.09a16 16 0 00-24.6 0l-74.13 89.09A16 16 0 00181.86 300h148.28a16 16 0 0012.29-26.23z" fill="#ffffff"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="32"/></svg>`;

document.querySelector(
  "#microphone"
).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80"/><path d="M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`;

document.querySelector(
  "#lang"
).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416M464 256H48"/></svg>`;

let firstRowElements = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let secondRowElements = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let thirdRowElements = ["Case", "z", "x", "c", "v", "b", "n", "m", "Del"];

const firstRow = document.querySelector(".first");
const secondRow = document.querySelector(".second");
const thirdRow = document.querySelector(".third");
const space = document.querySelector("#spacebar");
const numberBtn = document.querySelector("#numerals");
const textInput = document.querySelector("#outputText");
textInput.value = "Hi World!";

const createRow = function (row, item) {
  row.innerHTML = "";
  item.map(function (item) {
    let value = item;
    let iC = value;
    if (value === "Del") value = backspaceIcon, iC = 'del';
    if (value === "Case") value = chervonIcon, iC = 'case';
    const deleteItem = value === backspaceIcon ? " remove" : "";
    const capLockKey = value === chervonIcon ? " caplock" : "";
    const html = `<button class="app_btn${
      deleteItem || capLockKey
    }" id="${iC}">${value}</button>`;
    row.insertAdjacentHTML("beforeend", html);
  });
};

createRow(firstRow, firstRowElements);
createRow(secondRow, secondRowElements);
createRow(thirdRow, thirdRowElements);

const capLock = document.querySelector('#case');
capLock.addEventListener("click", function () {
  console.log("Caplock Click!");
  capLock.classList.toggle("active");
  // const getCase = function (...arr) {
  //   let [first, second, third] = arr;
  //   let isCap = first[0] !== "q" ? true : false;
  //   console.log(isCap);
  //   if (isCap === false) {
  //     firstRowElements = first.map((x) => x.toUpperCase());
  //     secondRowElements = second.map((x) => x.toUpperCase());
  //     thirdRowElements = third.map((x) => {
  //       if (x !== "Case" && x !== "Del") return x.toUpperCase();
  //       else return x;
  //     });
  //     createRow(firstRow, firstRowElements),
  //       createRow(secondRow, secondRowElements),
  //       createRow(thirdRow, thirdRowElements);
  //     isCap = true;
  //   } else {
  //     firstRowElements = first.map((x) => x.toLowerCase());
  //     secondRowElements = second.map((x) => x.toLowerCase());
  //     thirdRowElements = third.map((x) => {
  //       if (x !== "Case" && x !== "Del") return x.toLowerCase();
  //       else return x;
  //     });
  //     console.log(firstRowElements, secondRowElements, thirdRowElements);
  //     createRow(firstRow, firstRowElements);
  //     createRow(secondRow, secondRowElements);
  //     createRow(thirdRow, thirdRowElements);
  //     isCap = false;
  //   }
  //   console.log(isCap);
  // };
  // getCase(firstRowElements, secondRowElements, thirdRowElements);
});

const getEventListeners = function (first, second, third) {
  const arr = first
    .concat(second, third)
    .filter((item) => item !== "Case" && item !== "Del");
  arr.map((x) => {
    return document
      .querySelector(`#${x}`)
      .addEventListener("click", function () {
        textInput.value += `${x}`;
      });
  });
};
getEventListeners(firstRowElements, secondRowElements, thirdRowElements);

document.querySelector("#spacebar").addEventListener("click", function () {
  textInput.value += " ";
});

document.querySelector("#del").addEventListener("mousedown", function () {
  textInput.value = textInput.value.slice(0, -1);
});
