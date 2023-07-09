'use strict';

const decrypt = function (data, shift = 13) {
  const textInput = data.toUpperCase();
  const result = [];
  const alphabet = 
    [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

  //  Alphabet Shifter Function Here (converter();)
  const converter = function (text) {
    let output = '';
    const re = /^[A-Za-z]$/g;

    if (text !== undefined) {
      if (re.test(text) === true) {
        //  Restructure the alphabet
        const alphaShift = alphabet.indexOf(text) + shift; //  Get shifted index of the letter
        const getValidIndex = alphaShift <= 25 ? alphaShift : alphaShift - 26; //  Rearrange the fetch element index when it exceeds 25 (26 alphabets)
        output = alphabet[getValidIndex];
        return output;
      } else return (output = text);    //  Return the symbol, whitespace and emojis
    }
  };

  for (const letter of textInput) {
    const decrypted = converter(letter);
    result.push(decrypted);
  }
  return result.join('');
};

console.log(decrypt('ZL ANZR VF HAANZRQ!', 13));
//  Output: MY NAME IS UNNAMED!