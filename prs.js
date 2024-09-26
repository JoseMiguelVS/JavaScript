const btnPlay = document.querySelector('button');
const h3User = document.querySelector('#user span');
const h3Compu = document.querySelector('#compu span');
const h1Result = document.querySelector('h1');

const play = () => {
    const choiseUser = prompt('Elige: \n piedra \n papel \n tijeras');
    const choices = ['piedra', 'papel', 'tijeras'];

    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    let message = '';

    if (choiseUser == choiceCompu) {
        message = 'Empate';
    } else if (choiseUser === 'piedra' && choiceCompu === 'tijeras' || 
        choiseUser === 'papel' && choiceCompu === 'piedra' || 
        choiseUser === 'tijeras' && choiceCompu === 'papel') {
        message = 'ganaste'
    } else {
        message = 'perdiste'
    }
    h3User.innerText = choiseUser;
    h3Compu.innerText = choiceCompu;
    h1Result.innerText = message;
}
btnPlay.addEventListener('click', play);