// Funciones y Funciones de Flecha

// function nameFunction (params){
//     body 
//     return
// }


// const nameFunction = (params) => {
//     body
//     return
// }

function sayHello(){
    console.log("Hello");
}
sayHello();

const sayHelloInSpanish = () => console.log("Hola");
sayHelloInSpanish();

function sayHelloTo1(name){
    console.log('Hello '+name);
}

const sayHelloTo = name => console.log(`Hello ${name}`);
sayHelloTo('Joss');  

function fullName(name, lastName){
    console.log ( `${name} ${lastName}`);
}
fullName('Joss', 'Mikee');

const fullName2 = (name, lastName) => console.log(`${name} ${lastName}`);
fullName2('Dani', 'Dxanzx');

function duplicateNumber(nnumber){
    return nnumber*2;
}
duplicate = duplicateNumber(5);
console.log(duplicate);

const halfNumber = number => number/2;
let half = halfNumber(10);
console.log(half);

//Parametros opcionales
function greetings(name = 'Invitado'){
    console.log(`Holas ${ name }`);
}
greetings('Joss'); //Si se manda un nombre se imprime con el nombre
greetings(); //Y si no se manda como 'Invitado'

const greetings2 = (name = 'Invitado') => console.log(`Hola ${ name }`);
greetings2('Joss');
greetings2();