// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty
const string1 = "Hello my name is Justin"
const string2 = "Hello name my is Marie"
const string3 = "Hello name my is Justin"

var concertFlyer = function (magazine, flyer) {
split1 = string1.split(' ').sort().join()
console.log(split1)
split2 = string2.split(' ').sort().join()
console.log(split2)
split3 = string3.split(' ').sort().join()
console.log(split3)


if (split1 === split2) {
   console.log('Its a Match') 
}
else {
    console.log('Not a Match')
}

if (split1 === split3) {
    console.log('Its a Match') 
 }
 else {
     console.log('Not a Match')
 }

 if (split2 === split3) {
    console.log('Its a Match') 
 }
 else {
     console.log('Not a Match')
 }

};

concertFlyer(string1, string3)
