// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

testString = "character";


var characterCount = function(str) {
   if (str.length == 0) {
      console.log('Invalid String"')
      return;
   }
   for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i >j) {
        break; 
      } 
       if (str[i] == str[j]) {
          count ++
       }
    }
      if (count > 0) {
         console.log(`${str[i]} occurs ${count} times`)
      }
   }
   
};

characterCount(testString)
