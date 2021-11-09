// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const string = "[[]]";
let opened = "["
let closed = "]"
let closedCount = 0
let openedCount = 0


var validBrackets = function(str) {
for (let i = 0; i < str.length; i++) {
    if ( str[i] === closed) {
      closedCount ++  
    }else if (str[i] === opened) {
      openedCount ++  
    }
   
    if (openedCount === closedCount) {
        console.log('Matching Brackets!')
    }
   else{
       console.log('Not a Match!')
   }
    
}
};

validBrackets(string)