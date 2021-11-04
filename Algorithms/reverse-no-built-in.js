// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
const string = "Hello World"
const reverse = (str) => {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
        }
        console.log(reversed)
};
reverse(string)