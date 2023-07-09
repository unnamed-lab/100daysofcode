function telephoneCheck(str) {
  const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  /*  Regular Expression returns the following string expressions as true:
        555-555-5555
        (555)555-5555
        (555) 555-5555
        555 555 5555
        5555555555
        1 555 555 5555
        1(555)555-5555
        1 555-555-5555
        1 (555) 555-5555
 */
  if (phoneNumberRegex.test(str) === true)
    return true; //  If the input string follows the RegEx it returns true
  else return false;
}

const output = telephoneCheck('1 (555) 555-5555');
console.log(output);
//  Output: True
