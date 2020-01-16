import { getRandomThrow, checkResult } from './get-random-throw.js';

const resultDisplay = document.getElementById('displayResult');
const button = document.getElementById('playButton');
const resultImage = document.getElementById('imageResult');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');

let wins = 0;
let losses = 0;
let draws = 0;

button.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);

    if (computerChoice === 'rock') resultImage.src = 'https://cdn.pixabay.com/photo/2017/02/14/09/16/stones-2065410_1280.jpg';
    if (computerChoice === 'paper') resultImage.src = 'https://cdn.pixabay.com/photo/2018/02/17/15/40/paper-3160167_1280.jpg';
    if (computerChoice === 'scissors') resultImage.src = 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80';

    if (result === 'win') {
        wins++;
        winsDisplay.textContent = wins;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'You win!';
    } else if (result === 'lose') { 
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Computer wins!';
    } else {
        draws++;
        drawsDisplay.textContent = draws;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Draw.';
    
    }


});