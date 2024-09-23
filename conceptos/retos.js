function wrapping(gifts) {
  const envueltos = [];
  for (let gift of gifts) {
    let tapa = '*'.repeat(gift.length + 2);
    let g = `${tapa}\n*${gift}*\n${tapa}`;
    envueltos.push(g);

  }
  return envueltos;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped[1]);

//Reto del cubo
function createCube(size) {
  const space = ' ';
  const faceA = '/\\';
  const backA = '_\\';
  const faceB = '\\/';
  const backB = '_/';
  let cubeA = '';
  let cubeB = '';
  
  for (let i = 0; i < size; i++) {
    let line = space.repeat(i);
    line += faceA.repeat(size - i);
    line += backA.repeat(size);
    
    let line2 = space.repeat(i);
    line2 += faceB.repeat(size - i );
    line2 += backB.repeat(size);

    cubeA = line + '\n' + cubeA;
    cubeB = line2 + '\n' + cubeB;
  }
  console.log(cubeA + cubeB);
  return '';
}

const cube = createCube(3);
console.log(cube);

// const space = ' ';
// const faceA='/\\' ;
// const backA='_\\' ;
// const faceB='\\/' ;
// const backB='_/';
// return '';
// '/\\' + '_\\'
// '\\/' + '_/'
// ' ' + '/\\' + '_\\' + '_\\'
// '/\\' + '/\\'+ '_\\' + ''
