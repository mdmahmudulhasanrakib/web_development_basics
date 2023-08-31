let a = 10;  // let is mutable
let b = 22;

const name = 'hasan';    // const is immutable. which can not be changed after declaration
let age = 25;

console.log('a + b: ',a+b);
console.log('age: ',age);

age = 26;
console.log('age: ',age);

console.log('name: ',name);
// name = 'rakib';           // this line will show error to the output
// console.log('name: ',name);