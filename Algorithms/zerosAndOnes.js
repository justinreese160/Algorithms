// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

stringA = "010101" //true
stringB = "0101010" //false

var zeroesAndOnes = function(str) {
str = stringA.split('')

for (let i = 0; i < str.length; i++) {
let countFor0 = 0
let countFor1 = 0

    if (str[i].value = 0 ) {
        countFor0++
        console.log(countFor0)
        
        
    }else if (str[i].value = 1) {
        countFor1 ++
        console.log(countFor1)
    }
  
    
}
};

zeroesAndOnes(stringA)