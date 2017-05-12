// Hoisting - const, let, var
// var x;
var vara = "iii"

// var how does it behave?
x = 5;

// always to nearest function scope
function double(x) {
  var two = 2
  return two * x;
}

// mhhh...
for(var i = 0; i < 10; ++i) {
  // do stuff
}

// better!
for(let j = 0; i < 10; ++i) {
  // do stuff
}

const PI = 3.1415;

console.log("x: " + x);
// console.log("two: " + two); -> not defined
console.log("y: " + y);
console.log("i: " + i);
// console.log("j: " + j); -> not defined

var y;
y = 5;
