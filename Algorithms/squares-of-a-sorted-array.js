// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

array1 = [3,6,5,9,11,12,1,2]

var sortedSquares = function(arr) {
sortedArray = arr.sort(function(a, b){return a - b})
const newArray = new Array(sortedArray.length).fill(0)
    for (let i = 0; i < sortedArray.length; i++) {
        let value = sortedArray[i];
        newArray[i] = value * value;
    }
console.log(newArray)

};

sortedSquares(array1)