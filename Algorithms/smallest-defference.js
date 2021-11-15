// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

const array1 = [1,10,11,17,20]
const array2 = [3,6,9,12,15]

function smallestDifference(arr1, arr2) {
    let m = arr1.length - 1;
    let n = arr2.length - 1;
    let i = 0;
    let j = 0;
    let result = Number.MAX_VALUE;
    let a, b;
    while (i < m && j < n) {
      if (Math.abs(arr1[i] - arr2[j]) < result) {
        result = Math.abs(arr1[i] - arr2[j]);
        a = arr1[i];
        b = arr2[j];
      }
      if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
    console.log(
      "The pair with minimum absolute difference is " + a + "," + b
    );
  }
  smallestDifference(array1, array2)