# javascript

learning path
=>>variable 
two type variable and constant 
const :not able to change ;
let variables are only accessible within the block (or loop)

function myFunction() {
      var x = 10; // Function-scoped
      if (true) {
        var y = 20; // Function-scoped, accessible outside the if block
        let z = 30; // Block-scoped, only accessible within the if block
      }
      console.log(x); // Output: 10
      console.log(y); // Output: 20
      //console.log(z); // Error: z is not defined
    }
    myFunction();
=============================================================================\
data type 
number, bigint, string boolean, null(standalone value), undefine ,symbol

object


undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null

