const words = [
 'californication',
 'plataforma5',
 'black',
 'summer',
 'flea',
 'aeroplane',
 'peppers',
 'unlimited',
 'arcadium',
 'love',
 'getaway',
 'stadium',
 'quixoticelixer',
 'quarter',
 'snow',
 'dylan',
 'zephyr',
 'funky',
 'chili',
 'goku',
 'freezer',
 'vegueta',
 'minecraft',
 'sword'
];

let time = 10;
let score = 0;

const randomWord = (array) =>{
    return array[Math.floor(Math.random() * array.length)];
}

let palabraAleatoria = randomWord(words);

const addToDOM = (randomWord) =>{
    let h1 = document.getElementById('randomWord');
    h1.textContent = randomWord;
}

addToDOM(palabraAleatoria);

addEventListener('input', (e) => {
    let palabraIngresada = e.target.value;
    if(palabraIngresada == palabraAleatoria){
        time += 3;
        updateScore();
        palabraAleatoria = randomWord(words);

        addToDOM(palabraAleatoria);
        e.target.value = '';
    }
})

let timeInterval; 

const actualizarTiempo = () => {
    timeSpan = document.getElementById('timeSpan');
    timeSpan.textContent = time + 's';
    time--;
    if (time === 0) {
        timeSpan.textContent = '0s';
        clearInterval(timeInterval);
        gameOver();
    }
}

timeInterval = setInterval(actualizarTiempo, 1100);

const updateScore = () =>{
    score++;
    let scoreSpan = document.getElementById('score');
    scoreSpan.textContent = score;
}

const gameOver = () =>{
    let endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
    <h1>Game Over</h1>
    <p>Score: ${score}</p>
    <button onclick="location.reload();">Volvé a empezar</button>
    `
}
