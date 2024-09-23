const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightBall = () => {
    const question = prompt('Pregunta');
    const random = Math.floor(Math.random() * 8);
    const options = [ 'No','Si','*se va*','xd','Tal vez','Que','Dani','.-.']
    h1.innerText = options[random];
}

main.addEventListener('click', eightBall);