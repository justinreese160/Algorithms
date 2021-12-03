// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const string = "caesar";
var caesarCipher = function (str, offset) {
    let sortedA = alphabet.split().sort(function(a, b){return a - b})
    
    let sortedS = string.split().sort(function(a, b){return a - b})
    
  let decipher = [];
  for (let i = 0; i < sortedS.length; i++) {
      for (let j = 0; j < sortedA.length; j++) {
       if (sortedS[i] = sortedA[j]) {
          decipher.push(sortedA[j+offset]) 
          console.log(decipher.join())
       }  
          
      }
  }
};

caesarCipher(string, 3)
