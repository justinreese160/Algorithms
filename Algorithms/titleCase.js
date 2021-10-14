// Write code to create a function takes a string and returns a
// new string with the fIRST letters of each word capitalized
const string = "a man a plan a canal panama";
const string2 = "hello";

const upperCase = function (str) {
  const splitStr = str.split(" ");
  const array = [];

  for (i = 0; i < splitStr.length; i++) {
    let word = splitStr[i];
    word[0] = word[0].toUpperCase();
   
    const splitWord = word.split("");
    
    splitWord[0] = splitWord[0].toUpperCase();
    
    splitWord.splice(0, 1, splitWord[0].toUpperCase())
    

    array.push(splitWord.join(''));
    


    
  }
  console.log(array.join(' '));
};
upperCase(string);