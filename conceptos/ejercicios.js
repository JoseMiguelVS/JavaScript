let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

let cuadrados = numeros.map(cuadrado => cuadrado * cuadrado);
console.log(cuadrados);

let cubos = numeros.map(cubo => cubo * cubo * cubo);
console.log(cubos);

let mitades = numeros.map(mitad => mitad / 2);
console.log(mitades);

//----------------------------------------------------

let pares = numeros.filter(par => par % 2 == 0 );
console.log(pares);

let impares = numeros.filter(impar => impar % 2 == 1 );
console.log(impares);

let valores = numeros.filter(valor => valor > 3 && valor < 8);
console.log(valores);

const squa = numeros.map( n => n ** 2);
const pairs = numeros.filter(n => n % 2 !== 0);