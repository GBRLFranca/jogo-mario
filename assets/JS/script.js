
const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvens = document.querySelector('.nuvens');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}


const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* O sinal de + no inicio converte a string em number, já que o valor impresso da constante estava sendo impresso como string */
    const nuvemPosition = nuvens.offsetLeft;

    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80) { 

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginBottom = '25px'
        mario.style.marginLeft = '40px'

        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvemPosition}px`;
        
        clearInterval(loop);

    }



}, 10);

document.addEventListener('keydown', jump);