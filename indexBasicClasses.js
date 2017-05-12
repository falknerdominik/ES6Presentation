const Person = require("./lib/Person");
const Point = require("./lib/Point")  ;

let arr = [];
arr.push(new Person("Tony", "Stark"));
arr.push(new Person("Max", "Mustermann", true));
arr.push(new Person("Stefan", "Raab"));
arr.push(new Person());
arr.push(new Person("Scharinger"));

printArray(arr);
console.log(JSON.stringify(arr));
printName(arr.pop());

console.log();
let p = new Point({x: 10.0, y: 12.0});
console.log(new Point() );
console.log(new Point(2.2, 3.3));
console.log(new Point({x: 2.2, y: 3.3}));
console.log(new Point({point: p}));

/*****************************************************************************/

function printArray(arr) {
  arr.forEach((person) => console.log(person.toString()));
}

function printName({firstName, lastName}) {
  console.log(`${firstName} ${lastName}`);
}
