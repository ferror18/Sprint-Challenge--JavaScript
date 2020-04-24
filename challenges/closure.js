// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Nested function is inside myFunction and because of this it has function scope, therefore it can acces stuff inside myFucntion  as the const internal.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
// IF SUMMATION DOESNT REQUIRE CLOSURE
// function summation(num){
//   let counter = 0
//   for (let i=0; i<num; i++){
//     counter += num - i
//   }
//   return counter;
// }
// console.log(summation(4))

// IF SUMMATION DOES REQUIRE CLOSURE
function summation (num){
  let counter = 0
  function process(){
    for (let i=0; i<num; i++){
      counter += num - i
    } 
    return counter;
  }
  return process();
}
const s4 = summation(4);
console.log(s4);  
console.log(counter); /* This showys the counter is not accesible outside  summation.

