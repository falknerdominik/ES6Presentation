const data = require("./data");
const Person = require("./lib/Person");

console.log();
console.log("loaded json data: ");
console.log("================================================================");
console.log(data);
console.log("================================================================");
console.log();

// map creates a new datastructure
let arr = [];
for(let i = 0; i < data.persons.length; ++i) {
  let person = data.persons[i];
  arr[i] = new Person(person.firstName, person.lastName, person.isLeftHanded)
}

console.log(data.persons.map((person) => person.firstName));

console.log();
console.log(arr);
console.log();
// console.log(data.persons.map((person) => new Person(person.firstName, person.lastName, person.isLeftHanded)));


console.log();
// reduce, generisches allzwechswerkzeug
var orders = [
  {amount: 12.17},
  {amount: 17.1},
  {amount: 10},
  {amount: 19.99}
]

let total = 0;
for(let i = 0; i < orders.length; ++i) {
  total += orders[i].amount;
}

console.log("Sum of Orders (iter): " + Math.round(total));

total = orders.reduce(function(sum, order) {
    return sum + order.amount;
}, 0);


console.log("Sum of Orders (func): " + Math.round(total));

let names = data.persons.reduce((list, person) => {
  console.log(list);
  list.push(person.firstName)
  return list;
}, []);

console.log(names);

console.log();
console.log();
console.log();

let lambda = (person) => person.firstName.length > 4;
// fun
console.log(
  data.persons
    .filter((person) => !person.isLeftHanded) // filters out max
    .filter(lambda) // filters out tony
    .map((person) => person.firstName + " " + person.lastName)
);
