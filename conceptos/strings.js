// String en JavaScript
// Hello, I'm Joss Mikee and I'm from Xaloztoc
let name= "Joss";
let city= "Xaloztoc";
let message = "Hello, I'm " + name + " and I'm from " + city;
console.log(message);
message= 'Hello, I\'m ' + name + ' and I\'m from '+city;
console.log(message);

//template literals
message = `Hello, I'm ${ name } and I'm from ${ city }`;
console.log(message);

//funciones para string
console.log(message.toLocaleLowerCase());
console.log(message.toLocaleUpperCase());
console.log(message.length);
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));