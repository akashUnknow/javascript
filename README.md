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

====================================================================================
function
typeOf
33==> number
Number("33") ==> number
NaN==> not a number
null==> 0;
undefine==> Nan
boolean==>1,0
================================================================================
stack==>premative
heap==> ref(no-premative)

=================================================================================
string
"akash",'akash'
let name=kumar
console.log("akash"+50)=akash50
console.log(`akash+50+{kumar}`)=akash50
======================================================================================
arrays
=====================================================================================
abject
=====================================================================================
function:
function(...add)==> rest operator
=====================================================================================
scop, hoisting , arror function ,this keyword (function with this ) and (arrow function with this )
function in stack

=====================================================================================
control flow
if,else,if switch, nullish coalescing operator(??)
======================================================================================
loops
for , while , do-while , forof ,forin , froeach , filter , map ,reduce
map= unique value

======================================================================================
dom

=>getElementbyId
=>setattribute
=>iinerHtml
=>textcontent
=>innertext
=>queryslector
=>queryslectorAll
======================================================================================
setinterval()
======================================================================================
event
event popugation and even bubling
======================================================================================
asyns javascript
defult ==> syncy, simgle thread
js engine => web api==>queue (setinterval, fetch , timeoutfunction)
=====================================================================================
