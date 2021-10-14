// Write code to create a function that returns the factorial of `num`
const test = 5

var factorial = function(num) {
let fact = 1
for (let i = num; i >= 1; i--) {
 fact *= i // fact = fact * i //
 console.log(fact)
}

};

factorial(test)