// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
const test1 = "silent" //true
const test2 = "listen" //true
const test3 = "dog" //false
const test4 = "cat" // false
var isAnagram = function(strA, strB) {
var ana1 = strA.split('').sort().join('');
var ana2 = strB.split('').sort().join('');
if (ana1 === ana2) {
    console.log('true')
}else{
    console.log("false")
}
};

isAnagram(test1, test2)