// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [4, 5, 6, 7, 8, 9, 10];

var arrayIntersection = function (arr1, arr2) {
  let newArray = arr1.filter((value) => arr2.includes(value));
  console.log(newArray);
};

arrayIntersection(array1, array2);
