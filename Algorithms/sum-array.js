// Write code to add all the numbers in `arr` and return the total
const array = [2, 5, 10];
var sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    }
    console.log(sum)

};

sumArray(array)
