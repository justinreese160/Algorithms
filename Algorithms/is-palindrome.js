// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

const test = "civic";
const test2 = "hello";

var isPalindrome = function(str) {
const splitStr = str.split('')
const reverseStr = splitStr.reverse()
console.log(str)
const joinReverseStr = reverseStr.join('')
console.log(joinReverseStr)
if (str === joinReverseStr) {
    console.log('true');
}else{
    console.log('false');
}

};

isPalindrome(test)
isPalindrome(test2)