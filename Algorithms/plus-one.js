// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place


const test = [2,9]

var plusOne = function(digits) {
  const len = digits.length;
  if(len === 0) console.log(1);
  let last = len - 1;
  

  if(digits[last] === 9) {
  (plusOne(digits.slice(0, last)).concat([0]));
  }else{
  console.log(digits.slice(0, last).concat([digits[last] + 1]));
  }
};
plusOne(test)