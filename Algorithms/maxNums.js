// Write code to return the largest number in the given array
const array = [2,5,6,15,3]
let newArray = array.sort(function(a, b){return a - b});
var maxNum = function(arr) {
 console.log(arr[arr.length - 1])
 }

;
maxNum(newArray)