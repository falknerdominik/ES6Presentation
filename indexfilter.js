const data = require("./data");

console.log();
console.log("loaded json data: ");
console.log("================================================================");
console.log(data);
console.log("================================================================");
console.log();

// From Functions to Arrow Functions

// using the lambda
console.log("1", findAllPersonsWith(data.persons, pred));

// simpler with anonymous function
console.log("2", findAllPersonsWith(data.persons, function(person) {
  return person.isLeftHanded;
})); //.... still to long

// wait thats not working
console.log("3", findAllPersonsWith(data.persons, (person) => {
  return person.isLeftHanded == true;
})); // still a body for one statement?

// a lot better!
console.log("4", findAllPersonsWith(data.persons, (person) => person.isLeftHanded))

// .. even shorter?
console.log("5", findAllPersonsWith(data.persons, person => person.isLeftHanded));

/*****************************************************************************/
function findAllPersonsWith(persons, pred) {
  let arr = [];
  for(let i = 0; i < data.persons.length; ++i) {
    if(pred(persons[i])) arr.push(persons[i]);
  }
  return arr;
}

// simple predicate
function pred(person) {
  return person.isLeftHanded;
}

function findAllPersonsWith(data, pred) {
  return data.persons.filter((person) => person.isLeftHanded);
}
