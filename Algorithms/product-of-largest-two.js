// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
testArray = [1, 3, 7, 5, 10]
var productOfLargestTwo = function(arr) {
    for (let i = 0; i < arr.length; i++) {
    const sortedArr = arr.sort(function(a,b){return b - a});
    result = sortedArr[0] * sortedArr[1]
    console.log(result)
    }
};

productOfLargestTwo(testArray)
