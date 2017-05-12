// import Stack from 'Stack';
const Stack = require("./lib/Stack").Stack;
const IllegalStateException = require("./lib/Stack").IllegalStateException;

const s = new Stack("myAmazingStack");

console.log();
console.log("Testing push");
console.log("=================");
console.log("\t" + s.toString());
console.log("\tpushing ...");
for(let i = 0; i < 10; ++i) {
  s.push(i);
}
console.log("\t" + s.toString());

// normal string
console.log();
console.log("Testing peek/template literals");
console.log("==============================");
console.log("\tAt the top: ${s.peek}")
// template literals
console.log(`\tAt the top: ${s.peek}`)


console.log();
console.log("Testing top/template literals");
console.log("=============================");
console.log(`\ttop: ${s.top}`)

console.log() ;
console.log("Clearing the Stack");
console.log("==================");
let str = "";
while(!s.isEmpty) {
  str += `${s.pop()} `;
}
console.log(`\tPopped elements: ${str}`);

console.log() ;
console.log("Testing Pop/Peek Exception");
console.log("==========================");
try {
  s.pop();
} catch(exception) {
  console.error(`\tException: ${exception.name}\n\t${exception.message}`)
}

console.log();
console.log();
try {
  s.peek;
} catch(exception) {
  if(exception instanceof IllegalStateException) {
    console.log("Custom error catched using inheritance");
    console.log(`${exception.name} ${exception.message}`);
    console.log(exception.stack);
  }
}
